import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score
import joblib
import random
from datetime import datetime, timedelta

print("Generating 1 Year of Synthetic Training Data...")

# Encodings
sleep_map = {'poor': 0, 'fair': 1, 'good': 2}
appetite_map = {'poor': 0, 'fair': 1, 'good': 2}
agitation_map = {'none': 0, 'mild': 1, 'moderate': 2, 'severe': 3}

records = []
start_date = datetime.now() - timedelta(days=365)

# Simulate 50 different patients
for patient_id in range(1, 51):
    current_agitation = 0
    for day in range(365):
        # Generate realistic correlated data
        # If sleep is poor, chance of wandering and high agitation increases
        sleep = random.choices(['poor', 'fair', 'good'], weights=[0.3, 0.4, 0.3])[0]
        appetite = random.choices(['poor', 'fair', 'good'], weights=[0.2, 0.5, 0.3])[0]
        
        # Base probability of incidents
        wandering = 0
        falls = 0
        
        if sleep == 'poor':
            if random.random() < 0.4: wandering += 1
            if random.random() < 0.2: falls += 1
            agitation_prob = [0.1, 0.2, 0.4, 0.3] # Skewed to moderate/severe
        else:
            if random.random() < 0.1: wandering += 1
            agitation_prob = [0.5, 0.3, 0.15, 0.05] # Skewed to none/mild
            
        if appetite == 'poor':
            agitation_prob = [0.05, 0.15, 0.5, 0.3]
            
        agitation = random.choices(['none', 'mild', 'moderate', 'severe'], weights=agitation_prob)[0]
        
        records.append({
            'patient_id': patient_id,
            'day': day,
            'sleep_quality': sleep,
            'appetite': appetite,
            'wandering_incidents': wandering,
            'fall_incidents': falls,
            'agitation_level': agitation
        })

df = pd.DataFrame(records)

# Feature Engineering
print("Performing Feature Engineering...")
df['sleep_encoded'] = df['sleep_quality'].map(sleep_map)
df['appetite_encoded'] = df['appetite'].map(appetite_map)
df['agitation_encoded'] = df['agitation_level'].map(agitation_map)

# We want to predict TOMORROW'S high agitation (moderate/severe) based on today's data
df['high_agitation'] = (df['agitation_encoded'] >= 2).astype(int)

# Shift the target variable back by 1 day per patient
df['target_tomorrow'] = df.groupby('patient_id')['high_agitation'].shift(-1)

# Drop the last day for each patient since we don't have "tomorrow" for it
df = df.dropna()

# Features and Target
features = ['sleep_encoded', 'appetite_encoded', 'wandering_incidents', 'fall_incidents', 'agitation_encoded']
X = df[features]
y = df['target_tomorrow']

# Train/Test Split
print("Splitting Data and Training Random Forest Classifier...")
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestClassifier(n_estimators=100, max_depth=5, random_state=42)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print("\n=== Model Evaluation ===")
print(f"Accuracy: {accuracy_score(y_test, y_pred):.3f}")
print("Classification Report:")
print(classification_report(y_test, y_pred))

# Save the model
model_path = 'model.pkl'
joblib.dump(model, model_path)
print(f"Model saved successfully to {model_path}!")
