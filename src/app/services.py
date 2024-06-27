# src/app/services.py
import os
import sys
import pandas as pd
import plotly.express as px
import plotly.io as pio

current_path = os.path.abspath(os.path.dirname(__file__))
src_root = os.path.abspath(os.path.join(current_path, '..', '..'))
sys.path.insert(0, src_root)

from src.database.models import TemperatureData

def average_temp_per_year(country_name):
    # Query the database for the specified country
    data = TemperatureData.query.filter_by(country=country_name).all()
    
    # Convert data to pandas DataFrame
    df = pd.DataFrame([d.to_dict() for d in data])
    
    # Ensure 'date' is a datetime type and extract the year
    df['date'] = pd.to_datetime(df['date'])
    df['year'] = df['date'].dt.year
    
    avg_temp_per_year = df.groupby('year')['average_temp'].mean().reset_index()

    fig = px.line(avg_temp_per_year, x='year', y='average_temp', title=f'Average Temperature in {country_name} Over Time')
    
    graphJSON = pio.to_json(fig, pretty=True)
    
    return {
        "graphJSON": graphJSON
    }

def get_list_of_temperature_data_countries():
    countries = TemperatureData.query.with_entities(TemperatureData.country).distinct().all()
    return [country[0] for country in countries]
