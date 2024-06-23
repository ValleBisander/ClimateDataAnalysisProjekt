import os
import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import TemperatureData

current_path = os.path.abspath(os.path.dirname(__file__))
src_root = os.path.abspath(os.path.join(current_path, '..', '..'))
sys.path.insert(0, src_root)

from src.data.load_data import load_csv

def import_data(csv_file):
    # Create an engine connected to database
    engine = create_engine('postgresql://postgres:valle123@localhost:1234/mydatabase')
    Session = sessionmaker(bind=engine)
    session = Session()

    # Read CSV data using the load_csv function
    data = load_csv(csv_file, "processed")

    # Process in chunks
    chunk_size = 500 
    for start in range(0, len(data), chunk_size):
        end = min(start + chunk_size, len(data))
        chunk = data.iloc[start:end]
        records = [
            TemperatureData(
                country=row['Country'],
                date=row['dt'],
                average_temp=row['AverageTemperature']
            )
            for _, row in chunk.iterrows()
        ]
        session.bulk_save_objects(records)
        session.commit()

    session.close()

if __name__ == "__main__":
    import_data('GlobalLandTemperaturesByCountry.csv')
