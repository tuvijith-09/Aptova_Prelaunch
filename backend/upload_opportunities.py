"""
upload_opportunities.py
------------------------
Bulk-uploads detailed opportunity content to the Aptova backend via
the /opportunities/detail POST endpoint.

USAGE:
1. Make sure your FastAPI server is running:
     cd backend
     python -m uvicorn main:app --reload

2. In a NEW terminal, run this script from wherever this file is saved:
     python upload_opportunities.py

3. Watch the progress output. At the end it will print a summary of
   any failures so you know what (if anything) needs re-running.
"""

import json
import time
import requests

# ----------------------------------------------------------------
# Config
# ----------------------------------------------------------------
API_URL = "http://127.0.0.1:8000/opportunities/detail"
DATA_FILE = "upload_ready.json"

# ----------------------------------------------------------------
# Load data
# ----------------------------------------------------------------
with open(DATA_FILE, "r", encoding="utf-8") as f:
    opportunities = json.load(f)

print(f"Loaded {len(opportunities)} opportunities from {DATA_FILE}")
print(f"Uploading to: {API_URL}")
print("-" * 50)

# ----------------------------------------------------------------
# Upload loop
# ----------------------------------------------------------------
success_count = 0
failures = []

for i, opp in enumerate(opportunities, start=1):
    key = opp["opportunity_key"]
    payload = {
        "opportunity_key": key,
        "long_description": json.dumps(opp["sections"], ensure_ascii=False)
    }

    try:
        response = requests.post(API_URL, json=payload, timeout=30)
        if response.status_code == 200 and response.json().get("success"):
            print(f"[{i}/{len(opportunities)}] OK   - {key}")
            success_count += 1
        else:
            print(f"[{i}/{len(opportunities)}] FAIL - {key} -> {response.status_code} {response.text}")
            failures.append(key)
    except Exception as e:
        print(f"[{i}/{len(opportunities)}] ERROR - {key} -> {e}")
        failures.append(key)

    # Small delay to avoid hammering the local server too hard
    time.sleep(0.05)

# ----------------------------------------------------------------
# Summary
# ----------------------------------------------------------------
print("-" * 50)
print(f"Done. {success_count}/{len(opportunities)} uploaded successfully.")

if failures:
    print(f"\n{len(failures)} FAILED:")
    for f_key in failures:
        print(f"  - {f_key}")
    print("\nYou can re-run this script safely - it uses upsert, so")
    print("successful entries will just be overwritten with the same data.")
else:
    print("All opportunities uploaded successfully!")
