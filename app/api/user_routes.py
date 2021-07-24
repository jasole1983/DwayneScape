from flask import Blueprint, jsonify, request
from flask_login import login_required, logout_user, current_user
from app.models import User, db
from app.config import eng


user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def removeUser(id):
    user = User.query.get(id)
    if user == current_user:
        db.session.delete(user)
        db.session.commit()
        logout_user()
        return {'message': 'User Removed'}

# @user_routes.route('/<int:id>', methods=['PUT'])
# @login_required
# def updateUser(id):
#     user = User.query.get(id)
#     for key, value in request.form:
#         setattr(user, key, value)
#     db.session.commit()
#     return {'message': 'User Updated'}

