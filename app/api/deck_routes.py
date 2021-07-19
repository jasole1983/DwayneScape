from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import Deck, User, Card, db
from app.forms import MakeDeck

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
    if request.method == 'DELETE':
        deck = Deck.query.get(id)
        db.session.delete(deck)
        db.session.commit()
        return "Deck Deleted"
    form = MakeDeck()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if request.method == 'POST':
            deck = Deck(title=form.title, category=form.category, user=current_user)
            db.session.add(deck)
            db.session.commit()
            return "Deck Added"
        else:
            deck = Deck.query.get(id)
            for key, value in request.form:
                setattr(deck, key, value)
            db.session.commit()
            return "Deck Updated"


@deck_routes.route('/users/<int:userId>')
@login_required
def getDecksByUser(userId):
    decks = Deck.query.filter_by(userId=userId).all()
    return {'decks': [deck.to_dict() for deck in decks]}

# @deck_routes.route('/user<int:userId>/<int:id>', methods=['GET', 'POST', 'PUT', 'DELETE'])
# @login_required
# def getDeckByIdNUser(userId, id):
#     deck = Deck.query.get(id).filter_by(userId=userId).first()

