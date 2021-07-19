from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Deck

deck_routes = Blueprint('decks', __name__)

@deck_routes.route('/')
@login_required
def decks():
    decks = Deck.query.all()
    return {'decks': [deck.to_dict() for deck in decks]}

# get a single deck by deckId
@deck_routes.route('/<int:id>')
@login_required
def decks(id):
    deck = Deck.query.get(id)
    return deck.to_dict()

@deck_routes.route('/users/<int:id>')
