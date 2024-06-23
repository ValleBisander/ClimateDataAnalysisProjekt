import os
import sys
current_path = os.path.abspath(os.path.dirname(__file__))
src_root = os.path.abspath(os.path.join(current_path, '..', '..'))
sys.path.insert(0, src_root)


def get_all_temperatureData():
    from database.models import TemperatureData
    return TemperatureData.query.all()

def get_

def create_temperature_data_country(data):
    from database.models import TemperatureData, db
    new_temp = TemperatureData(country=data["country"], date = data['dt'], average_temp = data['AverageTemperature'])
    db.session.add(new_temp)
    db.session.commit()
    