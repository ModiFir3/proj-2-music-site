const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const sequelize = require('./config/connection');
const routes = require('./controllers');
const helpers = require('./utils/helpers');


const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers })

<<<<<<< HEAD
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


=======
>>>>>>> 3d18934b5084d084bb6a462a5ec38abff7a4c641
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

<<<<<<< HEAD
=======

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
    app.use(cors());
    app.use(cookieParser());


//turn on routes
>>>>>>> 3d18934b5084d084bb6a462a5ec38abff7a4c641
app.use(routes);


// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`APP INITIALIZED ON PORT ${PORT}!`)
    })
});   
