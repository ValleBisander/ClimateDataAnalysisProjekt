import os
import sys
import pandas as pd
import matplotlib.pyplot as plt

# Set up the system path for imports
current_path = os.path.abspath(os.path.dirname(__file__))
src_root = os.path.abspath(os.path.join(current_path, '..', '..'))
sys.path.insert(0, src_root)

from src.database.models import TemperatureData


def process_country_data(country_name):  

    temp_data = TemperatureData.query.filter_by(country = country_name).all()
        
    # Convert data to pandas DataFrame
    df = pd.DataFrame([d.to_dict() for d in temp_data])

    df['date'] = pd.to_datetime(df['date'])
    df['year'] = df['date'].dt.year

    # Calculate the average temperature for each year
    avg_temp_per_year = df.groupby('year')['average_temp'].mean().reset_index()

    # Perform calculations or create a histogram
    histogram = df['average_temp'].plot(kind='hist').get_figure()
    
    # Save histogram to static folder
    histogram_path = os.path.join('static', f"{country_name}_histogram.png")
    histogram.savefig(histogram_path)
    plt.close(histogram)  # Close the figure after saving to free up memory

    # Return the processed data, average temperature per year, and histogram path
    return {
        "data": df.to_dict(orient='records'),
        "average_temp_per_year": avg_temp_per_year.to_dict(orient='records'),
        "histogram_path": histogram_path
    }
