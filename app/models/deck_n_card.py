from typing import Sequence
from .db import db
from .user import User





class Deck(db.Model):
    __tablename__ = 'decks'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(75), nullable=False)
    category = db.Column(db.Enum("Early-Life", "Movies", "TV",
                         "Wrestling", "Trivia", name="category"), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = db.relationship("User",
                           backref=db.backref('decks', lazy=True))

    def to_dict(self):
        user = User.query.filter_by(id=self.userId).first()
        print('user:  ', user)
        card_count = self.get_card_count()
        # cards = self.get_my_cards()
        return {
            'id': self.id,
            'title': self.title,
            'category': self.category,
            'userId': self.userId,
            'userName': user.username,
            'card_count': card_count,
            'studying': False,
            # 'cards': cards,
        }

    def get_card_count(self):
        count = len(Card.query.filter(Card.deckId == self.id).all())
        return count

    def get_my_cards(self):
        cards_in_this_deck = []
        if self.get_card_count() == 0:
            return cards_in_this_deck
        else:
            for i in range(self.get_card_count()):
                card = Card.query.filter(Card.deckId == self.id).first()
                cards_in_this_deck.append(card)
            return cards_in_this_deck

class Card(db.Model):
    __tablename__ = 'cards'

    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(2000), nullable=False)
    answer = db.Column(db.String(2000), nullable=False)
    rating = db.Column(db.Integer, nullable=True)
    deckId = db.Column(db.Integer, db.ForeignKey('decks.id'))
    # deckNum = db.Column(db.Integer)

    deck = db.relationship("Deck",
                           backref=db.backref('cards', lazy=True))

    # def getRegNum(self):
        # return f'{self.deckId}.{self.deckNum}'

    def to_dict(self):
        return {
            'id': self.id,
            'question': self.question,
            'answer': self.answer,
            'deckId': self.deckId,
            # 'regNum': self.getRegNum()
        }


# class Category(db.Model):
#     __tablename__= 'categories'

#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(75), nullable=False)

#     decks = db.relationship("Deck")
