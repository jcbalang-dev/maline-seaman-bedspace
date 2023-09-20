from flask_restful import Api
from app.controllers.user_controller import UserAuthController
from app.controllers.guest_controller import GetAllGuestController, GetGuestIDController
from app.controllers.room_bedspace_controller import GetAllRoomBedSpaceController, GetRoomBedSpaceIDController

class Routes:
    def __init__(self, api):
        self.api = api

    def setup_routes(self):
        # routes list
        self.api.add_resource(UserAuthController, "/login")
        self.api.add_resource(GetAllGuestController, "/guests")
        self.api.add_resource(GetGuestIDController, "/guest/<string:guest_id>")
        self.api.add_resource(GetAllRoomBedSpaceController, "/room_bedspaces")
        self.api.add_resource(GetRoomBedSpaceIDController, "/room_bedspace/<string:room_bedspace_id>")
