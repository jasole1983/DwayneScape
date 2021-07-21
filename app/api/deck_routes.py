from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, session, request
# from flask_login import login_required, current_user
from app.models import Deck, db, Card
from app.forms import MakeDeck, MakeCard
from app.config import eng
from sqlalchemy.orm import sessionmaker


SessionFactory = sessionmaker(bind=eng)
session = SessionFactory()

deck_routes = Blueprint('decks', __name__)
card_routes = Blueprint('cards', __name__)


@deck_routes.route('/<int:id>')
def getDecksById(id):
    '''
    get a specific deck by its ID number
    '''
    deck = Deck.query.get(id)
    return deck.to_dict()


# def getOneDeck(id):


@deck_routes.route('/<int:id>', methods=['PUT', 'DELETE'])
# @login_required
def changeOneDeck(id):
    '''
    delete or update/edit a deck
    '''
    if request.method == 'DELETE':
        deleteDeck(id)
        deck = Deck.query.get(id)
        db.session.delete(deck)
        db.session.commit()
        return {'message': "Deck Deleted"}
    else:
        deck = Deck.query.get(id)
        for key, value in request.form:
            setattr(deck, key, value)
        db.session.commit()
        return {'deck': deck.to_dict()}


@deck_routes.route('/create', methods=['POST'])
# @login_required
def newDeck():
    '''
    create a new deck
    '''
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
def getDecksByUser(userId):
    '''
    get all decks owned by a single user
    '''
    decks = Deck.query.filter_by(userId=userId).all()
    return {'decks': [deck.to_dict() for deck in decks]}


@deck_routes.route('/')
def main():
    '''
    get all available decks -> will have to adjust if we ever need to scale up
    '''
    decks = Deck.query.all()
    return {'decks': [deck.to_dict() for deck in decks]}


@card_routes.route('/deck/<int:deckId>', methods=['DELETE'])
# @login_required
def deleteDeck(deckId):
    '''
    delete all cards in a deck
    '''
    cards = Card.query.filter_by(deckId=deckId).all()
    for card in cards:
        db.session.delete(card)
    db.sessioin.commit()
    return


@card_routes.route('/deck/<int:deckId>')
def getCards(deckId):
    '''
    get all cards in a specific deck
    '''
    cards = Card.query.all().filter_by(deckId=deckId)
    return {'cards': [card.to_dict() for card in cards]}


@card_routes.route('/deck/create/<int:deckId>', methods=['POST'])
# @login_required
def newCard(deckId):
    '''
    creates a single new card that is associated with a specific deck
    '''
    form = MakeCard()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit:
        card = Card(
            question=form.data["question"],
            answer=form.data["answer"],
            deckId=deckId
        )
        db.session.add(card)
        db.session.commit()
        return {"card": card.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@card_routes.route('/<int:cardId>', methods=['GET', 'PUT', 'DELETE'])
# @login_required
def changeOneCard(cardId):
    '''
    select, edit, or delete a specific card by its ID
    '''
    card = Card.query.get(cardId)
    if request.method == 'DELETE':
        db.session.delete(card)
        db.session.commit()
        return {'message': 'card deleted'}
    elif request.method == 'GET':
        return {'card': card.to_dict()}
    else:
        form = MakeCard()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit:
            for key, value in request.form:
                setattr(card, key, value)
            db.session.commit()
            return {'card': card.to_dict()}


# @deck_routes.route('/countup/<int:deckId>', methods=['GET'])
# @login_required
# def addOneCard(deckId):
#     deck = Deck.query.get(deckId)
#     deck.count += 1
#     return {'deck': deck.to_dict()}


# @deck_routes.route('/countdown/<int:deckId>', methods=['GET'])
# @login_required
# def subOneCard(deckId):
#     deck = Deck.query.get(deckId)
#     deck.count -= 1
#     return {'deck': deck.to_dict()}
