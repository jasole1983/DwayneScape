from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import Deck


def deck_exists(form, field):
    title = field.data
    deck = Deck.query.filter(Deck.title == title).first()
    if deck:
        raise ValidationError('Deck title is already in use.')


class MakeDeck(FlaskForm):
    title = StringField('title', validators=[DataRequired(), deck_exists])
    category = StringField('category', validators=[DataRequired()])
    tags = StringField('tags')
