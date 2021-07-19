from flask import Blueprint, jsonify, session
from flask_login import login_required
from app.models import Deck, User, Card
from app.forms import make_deck_form

deck_routes = Blueprint('decks', __name__, url_prefix='/decks')

@deck_routes.route('/')
def main():
    # if 'decks' in session:
    decks = Deck.query.all()
    return {'decks': [deck.to_dict() for deck in decks]}

# get a single deck by deckId
@deck_routes.route('/<int:id>')
@login_required
def getDecksById(id):
    deck = Deck.query.get(id)
    return deck.to_dict()

@deck_routes.route('/<int:id>', methods=['POST', 'PUT', 'DELETE'])
@login_required
def changeOneDeck(id):
    deck = make_deck_form


@deck_routes.route('/users/<int:userId>')
@login_required
def getDecksByUser(userId):
    decks = Deck.query.filter_by(userId=userId).all()
    return {'decks': [deck.to_dict() for deck in decks]}

# @deck_routes.route('/user<int:userId>/<int:id>', methods=['GET', 'POST', 'PUT', 'DELETE'])
# @login_required
# def getDeckByIdNUser(userId, id):
#     deck = Deck.query.get(id).filter_by(userId=userId).first()
