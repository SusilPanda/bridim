var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//The allowed SchemaTypes are: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array
var UserRequestSchema = new Schema(
    {
        first_name: {type: String, required: true, max: 100},
        last_name: {type: String, required: true, max: 100},
        email_id:{type: String, required: true, max: 100},
        //password:{type: String, required: true, max: 100},
        mobile_num: {typr:Number},        
        date_of_birth: {type: Date},
        qualification:{type: String, required: true, max: 100},
        applyingFor:{type: String, required: true, max: 100},
        prefCountry:{type: String, required: true, max: 100},
        engLangCertificates:{type: String, required: true, max: 100},
        status:{type: String, required: true, max: 100}
    }
);

// Virtual for user's full name
UserRequestSchema
    .virtual('name')
    .get(function () {
        return this.last_name + ', ' + this.first_name;
    });

// Virtual for user's URL
// We've also declared a virtual for the UserSchema named "url" that returns the absolute URL required to get a particular instance of the model
// we'll use the property in our templates whenever we need to get a link to a particular author.
UserRequestSchema
    .virtual('url')
    .get(function () {
        return '/users/userrequest/' + this._id;
    });

//Export model
module.exports = mongoose.model('UserRequest', UserRequestSchema);