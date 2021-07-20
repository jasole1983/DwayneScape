from flask_migrate import current
from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, session, request, Response
from flask_login import login_required, current_user
import psycopg2
from app.models import Deck, db, Card
from app.forms import MakeDeck
from app.config import eng
from sqlalchemy.orm import sessionmaker


SessionFactory = sessionmaker(bind=eng)
session = SessionFactory()

deck_routes = Blueprint('decks', __name__)
card_routes = Blueprint('cards', __name__)

# @deck_routes.before_app_first_request
# def before_first_request():
#     with eng.connect as conn:
#         with conn.cursor() as curs:
#             curs.execute("""
#                         SELECT userId, title, category FROM decks
#                         """)
#             decks = curs.fetchall()
#             db.session.add_all(list(decks))
#             db.commit()

# eng.dispose()
# def get_all_decks():
#     with eng.connect as conn:
#         with conn.cursor() as curs:
#             curs.execute() 



# get a single deck by deckId
@deck_routes.route('/<int:id>')
@login_required
def getDecksById(id):
    deck = Deck.query.get(id)
    return deck.to_dict()


# def getOneDeck(id):


@deck_routes.route('/<int:id>', methods=['PUT', 'DELETE'])
@login_required
def changeOneDeck(id):
    if request.method == 'DELETE':
        deck = Deck.query.get(id)
        db.session.delete(deck)
        db.session.commit()
        return {'message': "Deck Deleted"}
    else:
        deck = Deck.query.get(id)
        for key, value in request.form:
            setattr(deck, key, value)
        db.session.commit()
        return {'message': "Deck Updated"}

@deck_routes.route('/create', methods=['POST'])
@login_required
def newDeck():
    form = MakeDeck()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit:
        print('current_user:  ', current_user)
        deck = Deck(
            title=form.data['title'], 
            category=form.data['category'], 
            userId=current_user.id
        )
        db.session.add(deck)
        db.session.commit()
        return {"deck": deck.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@deck_routes.route('/users/<int:userId>')
@login_required
def getDecksByUser(userId):
    decks = Deck.query.filter_by(userId=userId).all()
    return {'decks': [deck.to_dict() for deck in decks]}

# @deck_routes.route('/user<int:userId>/<int:id>', methods=['GET', 'POST', 'PUT', 'DELETE'])
# @login_required
# def getDeckByIdNUser(userId, id):
#     deck = Deck.query.get(id).filter_by(userId=userId).first()

@deck_routes.route('/')
def main():
    # if 'decks' in session:
    decks = Deck.query.all()
    print('--------> BACKEND', [deck.title for deck in decks])
    return {'decks': [deck.to_dict() for deck in decks]}

@card_routes.route('/deck/<int:id>')
def getCards(id):
    cards = Card.query.all().filter_by(deckId=id)
    print("OMG, HERE'S THE CARDS FOR THAT DECK!!!")
    return {'cards': cards.to_dict()}

