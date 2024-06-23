# src/app/setup_database.py
import os
import sys

current_path = os.path.abspath(os.path.dirname(__file__))
src_root = os.path.abspath(os.path.join(current_path, '..', '..'))
sys.path.insert(0, src_root)

from app import create_app, db 


app = create_app()
with app.app_context():
    db.create_all()

