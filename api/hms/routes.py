from flask_restful import Api
from app.controllers.user_controller import GetAllUserController, GetUserIdController, UserAuthController
from app.controllers.guest_controller import GetAllGuestController, GetGuestIDController
from app.controllers.room_controller import GetAllRoomController, GetRoomIDController
from app.controllers.building_controller import GetAllBuildingController, GetBuildingIDController

class Routes:
    def __init__(self, api):
        self.api = api

    def setup_routes(self):
        # routes list
        self.api.add_resource(UserAuthController, "/login")
        self.api.add_resource(GetAllUserController, "/users")
        self.api.add_resource(GetUserIdController, "/user/<string:id>")
        self.api.add_resource(GetAllGuestController, "/guests")
        self.api.add_resource(GetGuestIDController, "/guest/<string:guest_id>")
        self.api.add_resource(GetAllRoomController, "/rooms")
        self.api.add_resource(GetRoomIDController, "/room/<string:room_id>")
        self.api.add_resource(GetAllBuildingController, "/buildings")
        self.api.add_resource(GetBuildingIDController, "/building/<string:building_id>")
