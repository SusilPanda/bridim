var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
var path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');

require('dotenv').config({path: __dirname + '/.env'});

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());
//app.use(bodyParser.json());
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//app.use('/', indexRouter);
app.use('/users', usersRouter);


// Added earlier code
//Set up mongoose connection
//this code creates the default connection to the database and binds to the error event (so that errors will be printed to the console).
var mongoose = require('mongoose');
//const mongoLocalUrl =  process.env.MONGO_URL_LOCAL;
const mongoLocalUrl = 'mongodb://localhost:27017/user';
//console.log(mongoLocalUrl);
mongoose.connect(mongoLocalUrl, {
   /* auth: {
        //authdb: 'admin',
        user: 'susilpanda',
        password: 'website7'

    },*/
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var User  = require('./models/user.model.js');
var UserRequest  = require('./models/userRequest.model.js');
var VisaApplication  = require('./models/visaApplication.model.js');
var UserAppointment  = require('./models/userAppointment.model.js');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

//var port = process.env.PORT || 8081;        // set our port
// router.use(bodyParser.json());

var index = require('./routes/index');
var users = require('./routes/users');

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

mongoose.set('useFindAndModify', false);
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());

/*router.route('/app/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/bridim/index.html'))
});
*/
//app.use(express.static(path.join(__dirname, '../dist/bridim')));

app.use(express.static(path.join(__dirname,'../dist/bridim')));

app.use('/app/*',(req,res)=>{

    res.sendFile(path.join(__dirname,'../dist/bridim/index.html'))
});
//const botBuilder = require('claudia-bot-builder');

//module.exports = botBuilder(request => `Thanks for sending ${request.text}`);
//app.use('/', index);
/*
app.use('/users', users);

// We will also add next() to indicate to our application that it should continue to the other routes.
// This is important because our application would stop at this middleware without it.
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/

// error handler
app.use(function(err, req, res, next) {
  console.log("inside error req");
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  //res.status(err.status || 500);
  //res.render('error');
});

var data = {first_name : "john",
  last_name: "travolta",
  email_id : "john@gmail.com",
  password : "password",
  date_of_birth : "11-10-1980",
  is_admin : false};

// on routes that end in /users
// ----------------------------------------------------
router.route('/users')
// get all the users (accessed at GET http://localhost:8080/api/users)
    .get(function (req, res) {
      console.log("I got a get all Request");
      User.find(function (err, users) {
        if(err)
          res.send(err);
        res.json(users);
      })
    });

// more routes for our API will happen here
// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_id')

// get a specific user by id
    .get(function (req, res) {
      console.log("I got a user get Request");
      User.findById(req.params.user_id, function (err, user) {
        if(err)
          res.send(err);
        res.json(user);
      })
    })

    // update a user by its id (accessed at PUT http://localhost:8080/api/users/:user_id)
    .put(function (req, res) {
      console.log("Got a put request");
      console.log(req.body);
      //const update = updated = _.assign({ "updatedAt": new Date() }, req.body);
      User.update({_id:req.params.user_id}, req.body, function (err) {
        if (err) res.send(err);//return next(err);
        res.json({message : "User updated successfully"});
      });
      /*User.findByIdAndUpdate(req.params.user_id, req.body, function (err, user) {
          if (err) res.send(err);//return next(err);
          res.json(user);
      });*/
    })

    // delete a user by its id
    .delete(function (req, res) {
      console.log("Got a delete request");
      User.remove({_id : req.params.user_id}, function (err, user) {
        if (err)
          res.send(err);
        res.json({message: "User deleted successfully"})
      })
    });

router.route('/user/register')

// create a user (accessed at POST http://localhost:8080/api/user/register)
  .post(function (req, res) {
    console.log("I got a register Request");
    console.log(req.body);

    User.create(req.body, function (err, user) {
      if (err) {
        console.log(err);
        if (err.code == '11000') {
          res.json({ message: "user already registered" });
        } else {
          res.send(err);
        }
      } else {
        console.log(user);
        res.json({ message: "user created" });
      }


    });
  });
//Admin user authentication
router.route('/user/authenticate') 
  .post(function (req, res) {
    console.log("I got a admin user authetication Request");
    console.log(req.body);

    User.findOne(req.body, function (err, data) {
      if (err) {
        res.send(err);
      } 
      else {
        console.log(data);
        res.json(data);
      }
      
      
    });
});

// user enquiry request routes 
router.route('/userrequests')
// get all the users (accessed at GET http://localhost:8080/api/users)
    .get(function (req, res) {
      console.log("I got a get all Request");
      UserRequest.find(function (err, userrequests) {
        if(err)
          res.send(err);
        res.json(userrequests);
      })
    });
    //

router.route('/userRequest/:enq_id')
  .get(function (req, res) {
    console.log("I got a user request get Request");
    UserRequest.findById(req.params.enq_id, function (err, userRequest) {
      if (err)
        res.send(err);
      res.json(userRequest);
    })
  });
router.route('/userRequest/save') 
  .post(function (req, res) {
    console.log("I got a user Enq Request");
    console.log(req.body);

    UserRequest.create(req.body, function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "user enq created" });
      //sendEmail(JSON.stringify(req.body));
      sendEmail(JSON.stringify(req.body), 'true');
    });
  });
// User book an appointment mapping
router.route('/userappointment/:booking_id')
  .get(function (req, res) {
    console.log("I got a user request get Request");
    UserAppointment.findById(req.params.booking_id, function (err, userAppontment) {
      if (err)
        res.send(err);
      res.json(userAppontment);
    })
  });
router.route('/userappointment')
  .get(function (req, res) {
    console.log("I got a user request get All Request");
    UserAppointment.find(function (err, userAppontment) {
      if (err)
        res.send(err);
      res.json(userAppontment);
    })
  });
router.route('/userappointment/save') 
  .post(function (req, res) {
    console.log("I got a user booking appointment Request");
    console.log(req.body);

    UserAppointment.create(req.body, function (err) {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.json({ message: "user appointment created" });
      sendEmail(JSON.stringify(req.body), 'false' );

    });
  });

router.route('/uservisastatus/:passportnum')
  .get(function (req, res) {
    console.log("got a visa get request");
    VisaApplication.findOne({passport_num: req.params.passportnum}, function (err, visaApplication) {
      if (err)
        res.send(err);
      res.json(visaApplication);
    })
  })
  .delete(function(req, res) {
    console.log("got a user visa application delete Request");
    console.log(req.params.passport_num);
    
    VisaApplication.deleteOne({passport_num: req.params.passportnum}, function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "user visa application deleted" });

    });
  });
router.route('/uservisastatus')
  .get(function (req, res) {
    console.log("got a visa getAll request");
    VisaApplication.find(function (err, visaApplication) {
      if (err)
        res.send(err);
      res.json(visaApplication);
    })
  })
  // method to Save Or Update the visa status record
  .post(function (req, res) {
    console.log("got a user visa application create/update Request");
    console.log(req.body);

    var query = { 'passport_num': req.body.passport_num };
    console.log(query);
    VisaApplication.findOneAndUpdate(query, req.body, { upsert: true }, function (err, doc) {
      if (err) {
        console.log(err);
        return res.send(500, { error: err });
      } else {
        res.json({ message: "user visa application created/updated" });
      }
      //return res.send('Succesfully saved.');
    });
    /*VisaApplication.create(req.body, function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "user visa application created" });

    });*/
  })
  .put(function(req, res) {
    console.log("got a user visa application update Request");
    console.log(req.body);
    
    VisaApplication.findOneAndUpdate({passport_num: req.body.passport_num}, req.body, function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "user visa application updated" });

    });
  });

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// Email setup
var nodemailer = require('nodemailer');
//var ejs = require('ejs');
var transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_SENDER_USER,
    pass: process.env.EMAIL_SENDER_PASS
  }
});

var mailOptions = {
  from: process.env.EMAIL_SENDER,
  subject: 'User Enq',
  text: 'That was easy!'
};

function format() {
  var args = arguments;
  if (args.length <= 1) { 
      return args;
  }
  var result = args[0];
  for (var i = 1; i < args.length; i++) {
      result = result.replace(new RegExp("\\{" + (i - 1) + "\\}", "g"), args[i]);
  }
  return result;
}

function nl2br (str, is_xhtml) {
  var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '$2');
} 

function sendEmail(content, isEnq) {
  console.log(content);
  var userEn = JSON.parse(content);
  console.log(userEn.name);
  var textM;
  //var textMsg = ejs.render('Name : , <%= name %> , Mobile Number : <%= mobileNumber %>', content);
  if (isEnq == 'true') {
    textM = format("First Name : {0}, \nLast Name : {1}, \nEmailId : {2}, \nMobile Number : {3}, \nDOB : {4}, \nQualification : {5}, \nApplied For : {6}, \nPreferred Country : {7}, \nEng Lang Certificate : {8}", 
    userEn.first_name ,  userEn.last_name, userEn.email_id, userEn.mobile_num, userEn.date_of_birth, userEn.qualification, 
    userEn.applyingFor, userEn.prefCountry, userEn.engLangCertificates );
    var sub = 'User Enquiry';
  } else {
    textM = format("Name : {0}, \nEmail : {1}, \nMobile Number : {2}, \nSubject : {3}, \nMessage : {4}", userEn.name ,  userEn.email,
    userEn.mobileNumber, userEn.subject, userEn.message );
    var sub = 'User booked an appointment';
  }
 

  var textMsg = nl2br(textM);
  //console.log(JSON.stringify(userEn.name));
  transporter.sendMail({
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_RECV_TEST,
    subject: sub,
    //html: '<h1>User Booked An Appointment!</h1><p>User <b>details </b> below : </p>',
    text: textMsg
  }, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};


module.exports = app;
var http = require('http');
var port = process.env.PORT;
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
app.listen(8080, function () {
  console.log('Listening on port 8080!');
});
///server.listen(port);
//server.on('error', onError);
//server.on('listening', onListening);
