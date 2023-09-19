from flask_restful import Resource, request
from app.models.bulding_model import BuildingModel
from app.views.building_view import BuildingView

building_model = BuildingModel()

class BuildingDetailController(Resource):
    def get(self):
        buildings = building_model.get_all_buildings()
        if buildings:
            return BuildingView.render_buildings(buildings)
        else:
            return {'error', 'Data not exists'}, 404

class BuildingController(Resource):
    def get(self):
        building = request.get_json()
        if building:
            return BuildingView.render_building(building)
        else:
            return {'error', 'Building not found'}, 404
