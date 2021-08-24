from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class MakeCard(FlaskForm):
    question = StringField('question', validators=[DataRequired()])
    answer = StringField('answer', validators=[DataRequired()])
    id = StringField('id', validators=[DataRequired()])