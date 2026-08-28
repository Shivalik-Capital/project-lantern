import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# Ensure models are imported
from main import Base, TrendModel, RiskFactorModel

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

def seed_data():
    if not DATABASE_URL:
        print("DATABASE_URL is not set. Please set it in your .env file to seed the database.")
        return

    print("Connecting to database...")
    engine = create_engine(DATABASE_URL)
    
    # Create tables if they don't exist
    Base.metadata.create_all(bind=engine)
    
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    db = SessionLocal()
    
    print("Seeding national trends...")
    trends = [
        TrendModel(year=1990, burden_index=2.4, population_over_60_million=56),
        TrendModel(year=2000, burden_index=3.1, population_over_60_million=71),
        TrendModel(year=2010, burden_index=4.5, population_over_60_million=92),
        TrendModel(year=2021, burden_index=7.2, population_over_60_million=138),
    ]
    
    for t in trends:
        existing = db.query(TrendModel).filter(TrendModel.year == t.year).first()
        if not existing:
            db.add(t)
            
    print("Seeding risk factors...")
    factors = [
        RiskFactorModel(factor_name="Hypertension", impact_percentage=42.0, source_attribution="IHME GBD 2023"),
        RiskFactorModel(factor_name="Diabetes", impact_percentage=35.0, source_attribution="IHME GBD 2023"),
        RiskFactorModel(factor_name="Obesity", impact_percentage=22.0, source_attribution="IHME GBD 2023"),
        RiskFactorModel(factor_name="Smoking", impact_percentage=18.0, source_attribution="IHME GBD 2023"),
    ]
    
    for f in factors:
        existing = db.query(RiskFactorModel).filter(RiskFactorModel.factor_name == f.factor_name).first()
        if not existing:
            db.add(f)
            
    db.commit()
    db.close()
    print("Database seeding complete!")

if __name__ == "__main__":
    seed_data()
