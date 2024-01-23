from flask_restful import Resource, request
from app.models.guest_model import Guest
from app.models.guest_model import GuestModel
from app.views.guest_view import GuestView

guest_model = GuestModel()

class GetAllGuestController(Resource):
    def get(self):
        guests = guest_model.get_all_guest()
        if guests:
            return GuestView.render_guests(guests)
        else:
            return {'error': 'Data not exists'}, 404

class GetGuestIDController(Resource):
    def get(self, guest_id):        
        guest = guest_model.get_guest(guest_id)
        if guest:
            return GuestView.render_guest(guest)
        else:
            return {'error': 'Guest not found'}, 404
class AddGuestController(Resource):
    def post(self):
        new_guest_data = request.get_json()
        attribute_mapping = {
            'last_name': 'last_name',
            'first_name': 'first_name',
            'middle_name': 'middle_name',
            'suffix': 'suffix',
            'passport_id': 'passport_id',
            'drivers_license_id': 'drivers_license_id',
            'umid_id': 'umid_id',
            'sss_id': 'sss_id',
            'prc_id': 'prc_id',
            'status': 'status',
            'added_by': 'added_by',
            'added_date': 'added_date',
            'updated_by': 'updated_by',
            'updated_date': 'updated_date',
        }
        new_guest = Guest(id=None, **{attribute_mapping[key]: new_guest_data.get(key) for key in attribute_mapping})

        last_inserted_id = guest_model.add_guest(new_guest)

        return {'message': 'Guest added successfully', 'guest_id': last_inserted_id}, 201