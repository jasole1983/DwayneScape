from flask import Flask
from ..config import Config
from .routes import orders

app = Flask(__name__)
app.config.from_object(Config)
