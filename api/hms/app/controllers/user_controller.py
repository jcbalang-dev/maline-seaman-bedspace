from flask_restful import Resource, request
from app.models.user_model import UserModel
from app.views.user_view import UserView

user_model = UserModel()

class UserDetailController(Resource):
    def get(self):
        users = user_model.get_all_users()
        if users:
            return UserView.render_users(users)
        else:
            return {'error', 'Data not exists'}, 404
        
class UserAuthController(Resource):
    def get(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        user = user_model.get_user(username, password)
        if user:
            return UserView.render_user(user)
        else:
            return {'error', 'User not found'}, 404