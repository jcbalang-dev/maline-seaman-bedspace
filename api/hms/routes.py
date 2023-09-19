from flask_restful import Api
from app.controllers.user_controller import UserAuthController
from app.controllers.guest_controller import GetAllGuestController, GetGuestIDController

class Routes:
    def __init__(self, api):
        self.api = api

    def setup_routes(self):
        # routes list
        self.api.add_resource(UserAuthController, "/login")
        self.api.add_resource(GetAllGuestController, "/guests")
        self.api.add_resource(GetGuestIDController, "/guest/<string:guest_id>")