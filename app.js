const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
const cookieParser = require('cookie-parser');


// Our app.
const app = express();

// Our routes 
const welcomeRouter = require('./routes/welcome.js')
const cluckRouter = require('./routes/clucks.js');

app.use('/', welcomeRouter);
app.use('/clucks', cluckRouter);


app.use(cookieParser());

//  Middleware 
function getUsernameMiddleware(request, response, next) {
    response.locals.username = request.cookies.username;
    next();
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(logger("dev"));

// Views and view engine
app.set('view engine', 'ejs');
app.set('views', 'views');


const PORT = 3000;
const ADDRESS = 'localhost';

app.listen(PORT, ADDRESS, () => {
    console.log(`The server is working at ${ADDRESS}:${PORT}`);
});