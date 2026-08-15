from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Project Lantern API", version="1.0.0")

# Allow requests from the Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # For production, restrict this to the vercel domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "ok", "message": "Project Lantern V2 API is running"}

@app.get("/api/v1/national-trends")
def get_national_trends():
    """Returns mock data for the National Trend Chart (1990-2021) for V2 dashboards"""
    return [
        {"year": 1990, "burden_index": 2.4, "population_over_60_million": 56},
        {"year": 2000, "burden_index": 3.1, "population_over_60_million": 71},
        {"year": 2010, "burden_index": 4.5, "population_over_60_million": 92},
        {"year": 2021, "burden_index": 7.2, "population_over_60_million": 138},
    ]

@app.get("/api/v1/risk-factors")
def get_risk_factors():
    """Returns mock aggregate data for risk factor visualization"""
    return {
        "diabetes_impact": 0.35,
        "hypertension_impact": 0.42,
        "smoking_impact": 0.18,
        "obesity_impact": 0.22,
        "source": "IHME GBD 2023"
    }
