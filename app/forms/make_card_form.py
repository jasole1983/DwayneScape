from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class MakeCardForm(FlaskForm):
    question = StringField('question', validators=[DataRequired()])
    answer = StringField('answer', validators=[DataRequired()])
    deckId = StringField('deckId', validators=[DataRequired()])