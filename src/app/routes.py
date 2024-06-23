# src/app/routes.py
import os
import sys
from flask import Blueprint, jsonify

current_path = os.path.abspath(os.path.dirname(__file__))
src_root = os.path.abspath(os.path.join(current_path, '..', '..'))
sys.path.insert(0, src_root)

from src.app.services import process_country_data

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return jsonify({"message": "Welcome to the Climate Data API!"})

@main.route('/country/<country_name>', methods=['GET'])
def get_country_data(country_name):
    data = process_country_data(country_name)
    return jsonify(data)