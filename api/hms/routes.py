from flask_restful import Api
from app.controllers.user_controller import UserAuthController
from app.controllers.building_controller import GetAllBuildingController, GetBuildingIDController

class Routes:
    def __init__(self, api):
        self.api = api

    def setup_routes(self):
        # routes list
        self.api.add_resource(UserAuthController, "/login")
        self.api.add_resource(GetAllBuildingController, "/buildings")
        self.api.add_resource(GetBuildingIDController, "/building/<string:building_id>")
