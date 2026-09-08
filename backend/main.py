from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String, Float, BigInteger
from sqlalchemy.orm import declarative_base, sessionmaker, Session
from pydantic import BaseModel
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Project Lantern API - V2", version="1.0.0")

# CORS setup so the Next.js frontend can communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to the vercel domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database Setup
DATABASE_URL = os.getenv("DATABASE_URL")

# Fallback in case DB is not yet provisioned, we can serve mock data
USE_MOCK_DATA = DATABASE_URL is None or DATABASE_URL == ""

if not USE_MOCK_DATA:
    engine = create_engine(DATABASE_URL)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    Base = declarative_base()

    class TrendModel(Base):
        __tablename__ = "national_trends"
        id = Column(Integer, primary_key=True, index=True)
        year = Column(Integer, unique=True, index=True)
        burden_index = Column(Float)
        population_over_60_million = Column(Float)

    class RiskFactorModel(Base):
        __tablename__ = "risk_factors"
        id = Column(Integer, primary_key=True, index=True)
        factor_name = Column(String, unique=True, index=True)
        impact_percentage = Column(Float)
        source_attribution = Column(String)

    def get_db():
        db = SessionLocal()
        try:
            yield db
        finally:
            db.close()


@app.get("/")
def read_root():
    return {"message": "Welcome to Project Lantern API V2. Access /docs for endpoints."}

@app.get("/api/v1/national-trends")
def get_national_trends(db: Session = Depends(get_db if not USE_MOCK_DATA else lambda: None)):
    if USE_MOCK_DATA:
        return [
            { "year": 1990, "burden_index": 2.4, "population_over_60_million": 56 },
            { "year": 2000, "burden_index": 3.1, "population_over_60_million": 71 },
            { "year": 2010, "burden_index": 4.5, "population_over_60_million": 92 },
            { "year": 2021, "burden_index": 7.2, "population_over_60_million": 138 },
        ]
    
    trends = db.query(TrendModel).order_by(TrendModel.year.asc()).all()
    return trends

@app.get("/api/v1/risk-factors")
def get_risk_factors(db: Session = Depends(get_db if not USE_MOCK_DATA else lambda: None)):
    if USE_MOCK_DATA:
        return {
            "source": "IHME GBD 2023",
            "hypertension_impact": 0.42,
            "diabetes_impact": 0.35,
            "obesity_impact": 0.22,
            "smoking_impact": 0.18,
        }
    
    factors = db.query(RiskFactorModel).all()
    # Format to match frontend expectations
    res = {"source": "IHME GBD 2023 via Supabase"}
    for f in factors:
        key = f.factor_name.lower().replace(" ", "_") + "_impact"
        res[key] = f.impact_percentage / 100.0
    return res

class PredictRequest(BaseModel):
    sleep_quality: str
    appetite: str
    wandering_incidents: int
    fall_incidents: int
    agitation_level: str

@app.post("/api/ml/predict")
def predict_agitation(req: PredictRequest):
    try:
        import joblib
        import pandas as pd
        model = joblib.load('model.pkl')
        
        sleep_map = {'poor': 0, 'fair': 1, 'good': 2}
        appetite_map = {'poor': 0, 'fair': 1, 'good': 2}
        agitation_map = {'none': 0, 'mild': 1, 'moderate': 2, 'severe': 3}
        
        input_data = pd.DataFrame([{
            'sleep_encoded': sleep_map.get(req.sleep_quality, 1),
            'appetite_encoded': appetite_map.get(req.appetite, 1),
            'wandering_incidents': req.wandering_incidents,
            'fall_incidents': req.fall_incidents,
            'agitation_encoded': agitation_map.get(req.agitation_level, 1)
        }])
        
        prob = model.predict_proba(input_data)[0][1] # Probability of class 1 (High Agitation)
        return {
            "prediction_probability": float(prob),
            "message": f"ML Prediction: {prob*100:.1f}% probability of elevated agitation tomorrow."
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
