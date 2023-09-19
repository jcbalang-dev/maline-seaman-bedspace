from flask import jsonify

class GuestView:
    @staticmethod
    def serialize_guest(guest):
        return {
            'id' : guest.id , 
            'last_name' : guest.last_name , 
            'first_name' : guest.first_name , 
            'middle_name' : guest.middle_name , 
            'suffix' : guest.suffix , 
            'passport_id' : guest.passport_id , 
            'drivers_license_id' : guest.drivers_license_id , 
            'umid_id' : guest.umid_id , 
            'sss_id' : guest.sss_id , 
            'prc_id' : guest.prc_id , 
            'status' : guest.status 
        }
    
    @staticmethod
    def render_guest(guest):
        return jsonify(GuestView.serialize_guest(guest))
    
    def render_guests(guests):
        result = []
        for guest in guests:
            guest_dict = {
                'id' : guest.id , 
                'last_name' : guest.last_name , 
                'first_name' : guest.first_name , 
                'middle_name' : guest.middle_name , 
                'suffix' : guest.suffix , 
                'passport_id' : guest.passport_id , 
                'drivers_license_id' : guest.drivers_license_id , 
                'umid_id' : guest.umid_id , 
                'sss_id' : guest.sss_id , 
                'prc_id' : guest.prc_id , 
                'status' : guest.status 
            }
            result.append(guest_dict)
        
        return{'guests' : result}
