from flask import jsonify

class BuildingView:
    @staticmethod
    def serialize_building(building):
        return {
            'id': building.id,
            'code': building.code,
            'tag': building.tag,
            'slug': building.slug,
            'name': building.name,
            'address': building.address,
            'description': building.description,
            'added_by': building.added_by,
            'added_date': building.added_date.strftime("%Y-%m-%d %H:%M:%S"),
            'updated_by': building.updated_by,
            'updated_date': building.updated_date.strftime("%Y-%m-%d %H:%M:%S"),
        }

    @staticmethod
    def render_building(building):
        return jsonify(BuildingView.serialize_building(building))

    def render_buildings(buildings):
        result = []
        for building in buildings:
            building_dict = {
                'id': building[0],
                'code': building[1],
                'tag': building[2],
                'slug': building[3],
                'name': building[4],
                'address': building[5],
                'description': building[6],
                'added_by': building[7],
                'added_date': building[8].strftime("%Y-%m-%d %H:%M:%S"),
                'updated_by': building[9],
                'updated_date': building[10].strftime("%Y-%m-%d %H:%M:%S"),
            }
            result.append(building_dict)

        return {'buildings': result}
