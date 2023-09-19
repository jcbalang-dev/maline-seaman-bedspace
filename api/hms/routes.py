from flask_restful import Api
from app.controllers.user_controller import UserAuthController
from app.controllers.building_controller import BuildingDetailController

class Routes:
    def __init__(self, api):
        self.api = api

    def setup_routes(self):
        # routes list
        self.api.add_resource(UserAuthController, "/login")
        self.api.add_resource(BuildingDetailController, "/buildings")
