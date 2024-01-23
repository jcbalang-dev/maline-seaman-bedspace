from flask_restful import Api
from app.controllers.user_controller import GetAllUserController, GetUserIdController, UserAuthController
from app.controllers.guest_controller import GetAllGuestController, GetGuestIDController, AddGuestController
from app.controllers.room_bedspace_controller import GetAllRoomBedSpaceController, GetRoomBedSpaceIDController
from app.controllers.room_controller import GetAllRoomController, GetRoomIDController
from app.controllers.building_controller import GetAllBuildingController, GetBuildingIDController
from app.controllers.room_rate_controller import GetAllRoomRateController, GetRoomRateIDController
from app.controllers.book_controller import GetAllBookController, GetBookIDController

class Routes:
    def __init__(self, api):
        self.api = api

    def setup_routes(self):
        routes = [
            (UserAuthController, "/login"),
            (GetAllUserController, "/users"),
            (GetUserIdController, "/user/<string:id>"),
            (GetAllGuestController, "/guests"),
            (GetGuestIDController, "/guest/<string:guest_id>"),
            (AddGuestController, "/add_guest"),
            (GetAllRoomBedSpaceController, "/room_bedspaces"),
            (GetRoomBedSpaceIDController, "/room_bedspace/<string:room_bedspace_id>"),
            (GetAllRoomController, "/rooms"),
            (GetRoomIDController, "/room/<string:room_id>"),
            (GetAllBuildingController, "/buildings"),
            (GetBuildingIDController, "/building/<string:building_id>"),
            (GetAllRoomRateController, "/room_rates"),
            (GetRoomRateIDController, "/room_rate/<string:room_rate_id>"),
            (GetAllBookController, "/books"),
            (GetBookIDController, "/book/<string:book_id>")
        ]
        
        for resource, route_path in routes:
            self.api.add_resource(resource, route_path)
