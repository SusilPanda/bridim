var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//The allowed SchemaTypes are: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array
var UserAppointmentSchema = new Schema(
    {
        name: {type: String, required: true, max: 100},
        
        email: {type: String, required: true, max: 100},
        //password:{type: String, required: true, max: 100},
        mobileNumber: {typr:Number},        
        //date_of_birth: {type: Date},
        subject: {type: String, required: true, max: 100},
        message: {type: String, required: true, max: 1000}
    }
);

// Virtual for user's full name
UserAppointmentSchema
    .virtual('fname')
    .get(function () {
        return this.name + ', ';
    });

// Virtual for user's URL
// We've also declared a virtual for the UserSchema named "url" that returns the absolute URL required to get a particular instance of the model
// we'll use the property in our templates whenever we need to get a link to a particular author.
UserAppointmentSchema
    .virtual('url')
    .get(function () {
        return '/users/userappointment/' + this._id;
    });

//Export model
module.exports = mongoose.model('UserAppointment', UserAppointmentSchema);