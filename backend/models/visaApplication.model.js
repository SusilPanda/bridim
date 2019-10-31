var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//The allowed SchemaTypes are: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array
var VisaApplicationSchema = new Schema(
    {
        passport_num: {type: String, required: true, max: 100},
        //email_id:{type: String, required: true, max: 100},
        name:{type: String, max: 100},
        //mobile_num: {typr:Number},
        visa_status:{type: String, required: true, max: 100}
    }
);

// Virtual for user's full name
VisaApplicationSchema
    .virtual('applicant_name')
    .get(function () {
        return this.name + ', ' + this.passport_num;
    });

// Virtual for user's URL
// We've also declared a virtual for the UserSchema named "url" that returns the absolute URL required to get a particular instance of the model
// we'll use the property in our templates whenever we need to get a link to a particular author.
VisaApplicationSchema
    .virtual('url')
    .get(function () {
        return '/users/passport_num/' + this._id;
    });

//Export model
module.exports = mongoose.model('VisaApplication', VisaApplicationSchema);