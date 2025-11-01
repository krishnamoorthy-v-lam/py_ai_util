from fastapi import FastAPI
from datetime import datetime

app = FastAPI(title="Doctor Availability API")


@app.get("/get_available_doctor")
def get_available_doctor():
    """
    Get available doctor based on current time.
    Returns 'damon' if current hour is odd, otherwise returns 'cathrin'.
    """
    current_hour = datetime.now().hour
    
    if current_hour % 2 == 1:  # Odd hour
        return {"doctor_name": "damon"}
    else:  # Even hour
        return {"doctor_name": "cathrin"}

