# src/app/models.py
import os
import sys
from sqlalchemy import Index

current_path = os.path.abspath(os.path.dirname(__file__))
src_root = os.path.abspath(os.path.join(current_path, '..', '..'))
sys.path.insert(0, src_root)

from src.app import db

class TemperatureData(db.Model):
    country = db.Column(db.String(255), primary_key=True)
    date = db.Column(db.Date, primary_key=True)
    average_temp = db.Column(db.Float, nullable=True)

    __table_args__ = (
        Index('idx_temperature_date_country', 'date', 'country'),
    )

    def __repr__(self):
        return f'<TemperatureData {self.country} {self.date}>'

    def to_dict(self):
        return {
            "country": self.country,
            "date": self.date.isoformat(),
            "average_temp": self.average_temp
        }
