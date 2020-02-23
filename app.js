const express         = require('express'),
    bodyParser      = require('body-parser'),
    http            = require('http'),
    path            = require('path');

let app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.set('port', 6900);

/*app.use(cookieParser());

app.use(session({
  secret: 'nC0@#1pM/-0qA1+é',
  name: 'Skatos',
  resave: true,
  saveUninitialized: true
}));

app.use(function(request, response, next){
  response.locals.session = request.session;
  app.locals.login = request.session.login;
  next()
});*/


let exphbs = require('express-handlebars');
app.set('view engine', 'handlebars'); //nom de l'extension des fichiers
let handlebars  = require('./helpers/handlebars.js')(exphbs); //emplacement des helpers
app.engine('handlebars', handlebars.engine);
app.use(express.static(path.join(__dirname + '/public')));
handlebars = require('handlebars'),
layouts = require('handlebars-layouts');
handlebars.registerHelper(layouts(handlebars));

require('./router/router')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Server Node.js is listening for requests on port ' + app.get('port'))
});

/*
app.locals.getYear = function (date) {
  if (date)
    return date.split("-")[0];
  return "NAN"
};*/
