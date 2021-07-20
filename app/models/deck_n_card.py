from .db import db
from .user import User


class Deck(db.Model):
    __tablename__= 'decks'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(75), nullable=False)
    category = db.Column(db.Enum("EarlyLife", "Movies", "TV", "Wrestling", "Trivia", name="category"), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    user = db.relationship("User",
        backref=db.backref('decks', lazy=True))

    def to_dict(self):
        user = User.query.filter_by(id=self.userId).first()
        # if Card.query.filter_by(deckId=self.id).first():
        #     cards = Card.query.filter_by(deckId=self.id).all()
        return {
            'id': self.id,
            'title': self.title,
            'user': user.username,
            'category': self.category,
            # 'cards': cards or None,
        }


class Card(db.Model):
    __tablename__= 'cards'

    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(2000), nullable=False)
    answer = db.Column(db.String(2000), nullable=False)
    rating = db.Column(db.Integer, nullable=True)
    deckId = db.Column(db.Integer, db.ForeignKey('decks.id'))

    deck = db.relationship("Deck",
        backref=db.backref('cards', lazy=True))

    def to_dict(self):
        deck = Deck.query.filter_by(id=self.deckId).first()
        user = User.query.filter_by(id=deck.userId).first()
        return {
            'id': self.id,
            'question': self.question,
            'answer': self.answer,
            'rating': self.rating,
            'deck': deck.title,
            'user': user.username,
        }


# class Category(db.Model):
#     __tablename__= 'categories'

#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(75), nullable=False)

#     decks = db.relationship("Deck")