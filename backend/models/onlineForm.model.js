var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//The allowed SchemaTypes are: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array
var OnlineApplicationFormSchema = new Schema(
    {
        first_name:{type: String, required: true, max: 100},
        last_name:{type: String, max: 100},
        dob: {type: Date},
        passport_number: {type: String,  max: 100},
        passport_doi : {type: Date },
        passport_doe : {type: Date  },
        email_id:{type: String,  max: 100},       
        mobile_num: {typr:Number},

        sec_year: {type: Date},
        sec_percentage:{type: Number,  max: 100},
        highersec_year: {type: Date},
        highersec_percentage:{type: Number, max: 100},
        graduation_year : {type: Date},
        graduation_percentage:{type: Number, max: 100},
        masters_year : {type: Date},
        masters_percentage:{type: Number, max: 100},
        exp_startdate: {type: Date},
        exp_enddate: {type: Date},
        ielts : {type: String, max : 10},
        ielts_band:{type: String, max: 10},

        passport_copy: {type: String, max : 100},
        sec_marksheet: {type: String, max : 100},
        highersec_marksheet: {type: String, max : 100},
        graduation_marksheet: {type: String, max : 100},
        masters_marksheet: {data: Buffer},
        ielts_cert: {type: String, max : 100}, // {data: Buffer},
        

        status:{type: String, required: false, max: 100},

        //visa_desc:{type: String, required: true, max: 100},
        //visa_status:{type: String, required: true, max: 100},
        //file_name:{type: String, max: 100}
    }
);

// Virtual for user's full name
OnlineApplicationFormSchema
    .virtual('applicant_name')
    .get(function () {
        return this.first_name + ', ' + this.passport_num;
    });

// Virtual for user's URL
// We've also declared a virtual for the UserSchema named "url" that returns the absolute URL required to get a particular instance of the model
// we'll use the property in our templates whenever we need to get a link to a particular author.
OnlineApplicationFormSchema
    .virtual('url')
    .get(function () {
        return '/users/passport_num/' + this._id;
    });

//Export model
module.exports = mongoose.model('onlineApplicationForm', OnlineApplicationFormSchema);