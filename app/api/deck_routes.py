from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import Deck, db, Card
from app.forms import MakeDeck, MakeCard
from app.config import eng
from sqlalchemy.orm import sessionmaker


SessionFactory = sessionmaker(bind=eng)
session = SessionFactory()

deck_routes = Blueprint('decks', __name__)
card_routes = Blueprint('cards', __name__)


@deck_routes.route('/<int:id>')
def getDeckById(id):
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
        # print('current_user:  ', current_user)
        deck = Deck(
            title=form.data['title'],
            category=form.data['category'],
            userId=current_user.id
        )
        db.session.add(deck)
        db.session.commit()
        return {"deck": deck.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@deck_routes.route('/users/<int:uId>')
def getDecksByUser(uId):
    '''
    get all decks owned by a single user
    '''
    result = db.session.query(Deck).filter(Deck.userId == (uId))
    return {'decks': [deck.to_dict() for deck in result]}


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
    cards = Card.query.filter(Card.deckId == deckId).all()
    for card in cards:
        db.session.delete(card)
    db.sessioin.commit()
    return


@card_routes.route('/deck/<int:deckId>')
def getCards(deckId):
    '''
    get all cards in a specific deck
    '''
    cards = Card.query.filter(Card.deckId == deckId).all()
    return {'cards': [card.to_dict() for card in cards]}


@card_routes.route("/deck/create/<int:deckId>", methods=['POST'])
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


@card_routes.route('/deck/many/<int:deckId>', methods=['POST'])
# @login_required
def newCards(deckId):
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

