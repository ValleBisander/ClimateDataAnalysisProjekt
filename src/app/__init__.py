# src/app/__init__.py

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy() 

def create_app():

    app = Flask(__name__, static_folder='static')
    CORS(app)
    
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:valle123@localhost:1234/mydatabase'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    from .routes import main
    
    app.register_blueprint(main, url_prefix ='/')
  

    return app
