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
        new_guest = Guest(
            id=None,
            last_name=new_guest_data.get('last_name'),
            first_name=new_guest_data.get('first_name'),
            middle_name=new_guest_data.get('middle_name'),
            suffix=new_guest_data.get('suffix'),
            passport_id=new_guest_data.get('passport_id'),
            drivers_license_id=new_guest_data.get('drivers_license_id'),
            umid_id=new_guest_data.get('umid_id'),
            sss_id=new_guest_data.get('sss_id'),
            prc_id=new_guest_data.get('prc_id'),
            status=new_guest_data.get('status'),
            added_by=new_guest_data.get('added_by'),
            added_date=new_guest_data.get('added_date'),
            updated_by=new_guest_data.get('updated_by'),
            updated_date=new_guest_data.get('updated_date'),
        )
        last_inserted_id = guest_model.add_guest(new_guest)
        return {'message': 'Guest added successfully', 'guest_id': last_inserted_id}, 201
