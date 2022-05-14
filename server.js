const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const cors = require('cors');
var cookieParser = require('cookie-parser');
const routes = require('./controllers');
const sequelize = require('./config/connection');
// const helpers = require('./utils/helpers')


const app = express();
const PORT = process.env.PORT || 3001;
//might need to add helpers to create
const hbs = exphbs.create({});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
    .use(cors())
    .use(cookieParser());

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//turn on routes
app.use(routes);

//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});
