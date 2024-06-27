# src/app/routes.py
import os
import sys
from flask import Blueprint, jsonify, send_from_directory

current_path = os.path.abspath(os.path.dirname(__file__))
project_root = os.path.abspath(os.path.join(current_path, '..', '..'))
sys.path.insert(0, project_root)

from src.app.services import average_temp_per_year, get_list_of_temperature_data_countries

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return jsonify({"message": "Welcome to the Climate Data API!"})

@main.route('/averageTempPerYear/<country_name>', methods=['GET'])
def get_country_data(country_name):
    data = average_temp_per_year(country_name)
    return data

@main.route('/countriesList')
def get_countries_list():
    countries = get_list_of_temperature_data_countries()
    return jsonify(countries)

@main.route('/static/<path:static_name>', methods=['GET'])
def get_static_data(static_name):
    static_dir = os.path.join(project_root, 'static')
    return send_from_directory(static_dir, static_name)
