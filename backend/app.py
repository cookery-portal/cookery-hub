# app.py

from flask import Flask
from flask_cors import CORS
import os
from config import MONGO_URI
from db import mongo, init_db
from routes.recipes import recipes_bp

if not MONGO_URI:
    raise ValueError("MONGO_URI is not set in config.py")

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = MONGO_URI

init_db(app)
app.register_blueprint(recipes_bp)

@app.route('/')
def home():
    return "Hello welcome to Cookery Portal"

if __name__ == '__main__':
    app.run(debug=os.environ.get("FLASK_DEBUG", "True") == "True")