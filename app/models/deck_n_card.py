from typing import Sequence

from sqlalchemy.orm import backref
from .db import db
from .user import User





class Deck(db.Model):
    __tablename__ = 'decks'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(75), nullable=False)
    category = db.Column(db.String(30), nullable=False)
    studying = db.Column(db.Boolean, default=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = db.relationship("User",
                           backref=db.backref('decks', lazy=True))

    def to_dict(self):
        card_count = self.get_card_count()
        cardids = self.get_my_cards()
        return {
            'id': self.id,
            'title': self.title,
            'category': self.category,
            'userId': self.userId,
            'card_count': card_count,
            'studying': self.studying,
            'cardids': cardids,
        }

    def get_card_count(self):
        count = len(Card.query.filter(Card.deckId == self.id).all())
        return count

    def get_my_cards(self):
        if self.get_card_count() == 0:
            return []
        else:
            return [card.id for card in Card.query.filter(Card.deckId == self.id).all()]
            

class Card(db.Model):
    __tablename__ = 'cards'

    id = db.Column(db.String(10), primary_key=True)
    question = db.Column(db.String(2000), nullable=False)
    answer = db.Column(db.String(2000), nullable=False)
    rating = db.Column(db.Integer, nullable=True)
    deckId = db.Column(db.Integer, db.ForeignKey('decks.id'))
    # deckNum = db.Column(db.Integer)
    deck = db.relationship("Deck",
                           backref=db.backref('cards', lazy=True))

    def to_dict(self):
        return {
            'id': self.id,
            'question': self.question,
            'answer': self.answer,
            'deckId': self.deckId,
        }


# class Category(db.Model):
#     __tablename__= 'categories'

#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(75), nullable=False)

#     decks = db.relationship("Deck")
