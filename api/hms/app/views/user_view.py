from flask import jsonify

class UserView:
    @staticmethod
    def serialize_user(user):
        return {
            'id' : user.id,
            'last_name' : user.last_name,
            'first_name' : user.first_name,
            'middle_name' : user.middle_name,
            'user_id' : user.user_id,
            'email' : user.email,
            'status' : user.status,
        }
    
    @staticmethod
    def render_user(user):
        return jsonify(UserView.serialize_user(user))
    
    def render_users(users):
        result = []
        for user in users:
            user_dict = {
            'id' : user[0],
            'last_name' : user[1],
            'first_name' : user[2],
            'middle_name' : user[3],
            'user_id' : user[4],
            'email' : user[5],
            'status' : user[6],
            }
            result.append(user_dict)
        
        return{'users' : result}
