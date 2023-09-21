from flask import Flask
from flask_restful import Api
from dotenv import dotenv_values
from config import Config
from db import Database
from routes import Routes

# Initialize the Flask app
app = Flask(__name__)

# Disable JSON sorting alphabetically globally
app.json.sort_keys = False

# Load environment variables from .env
env = dotenv_values()

# server port
api_port = Config.API_PORT

# Database configuration
db = Database

# Initialize the Flask-RESTful API
api = Api(app)

# Setup routes
routes = Routes(api)
routes.setup_routes()

# Application run
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=api_port, debug=True)
