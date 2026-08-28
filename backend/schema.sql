-- schema.sql
-- Run this in your Supabase SQL Editor to set up the V2 database tables.

-- Table 1: State-level Dementia Prevalence (Source: LASI/LASI-DAD Estimates)
CREATE TABLE IF NOT EXISTS dementia_prevalence_state (
    id SERIAL PRIMARY KEY,
    state_name VARCHAR(100) UNIQUE NOT NULL,
    prevalence_percentage DECIMAL(5, 2) NOT NULL,
    population_over_60_est BIGINT NOT NULL,
    estimated_cases BIGINT NOT NULL,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table 2: National Dementia Burden Trends (1990-2021) (Source: IHME GBD)
CREATE TABLE IF NOT EXISTS national_trends (
    id SERIAL PRIMARY KEY,
    year INT UNIQUE NOT NULL,
    burden_index DECIMAL(10, 2) NOT NULL,
    population_over_60_million DECIMAL(10, 2) NOT NULL,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table 3: Risk Factors (Source: LASI / IHME)
CREATE TABLE IF NOT EXISTS risk_factors (
    id SERIAL PRIMARY KEY,
    factor_name VARCHAR(100) UNIQUE NOT NULL,
    impact_percentage DECIMAL(5, 2) NOT NULL,
    source_attribution VARCHAR(255),
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table 4: Healthcare Access - Geriatric Specialists by State (Source: NHM)
CREATE TABLE IF NOT EXISTS healthcare_access (
    id SERIAL PRIMARY KEY,
    state_name VARCHAR(100) UNIQUE NOT NULL,
    specialist_density_per_100k DECIMAL(5, 2) NOT NULL,
    memory_clinics_count INT NOT NULL,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
