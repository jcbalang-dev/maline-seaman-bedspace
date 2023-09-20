from flask_restful import Api
from app.controllers.user_controller import UserAuthController
from app.controllers.building_controller import GetAllBuildingController, GetBuildingIDController
from app.controllers.room_controller import GetAllRoomController, GetRoomIDController
from app.controllers.room_bedspace_controller import GetAllRoomBedSpaceController, GetRoomBedSpaceIDController

class Routes:
    def __init__(self, api):
        self.api = api

    def setup_routes(self):
        # routes list
        self.api.add_resource(UserAuthController, "/login")
        self.api.add_resource(GetAllBuildingController, "/buildings")
        self.api.add_resource(GetBuildingIDController, "/building/<string:building_id>")
        self.api.add_resource(GetAllRoomController, "/rooms")
        self.api.add_resource(GetRoomIDController, "/room/<string:room_id>")
        self.api.add_resource(GetAllRoomBedSpaceController, "/room_bedspaces")
        self.api.add_resource(GetRoomBedSpaceIDController, "/room_bedspace/<string:room_bedspace_id>")
