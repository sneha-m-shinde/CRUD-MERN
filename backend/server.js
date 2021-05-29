const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const crudRoutes = express.Router();
const PORT = 4000;

let CRUD = require('./model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/crud', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

crudRoutes.route('/').get(function (req, res) {
    CRUD.find(function(err, crud) {
        if (err) {
            console.log(err);
        } else {
            res.json(crud);
        }
    });
});

crudRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    CRUD.findById(id, function (err, cruds) {
        res.json(cruds);
    });
});

crudRoutes.route('/update/:id').post(function (req, res) {
    CRUD.findById(req.params.id, function (err, cruds) {
        if (!cruds)
            res.status(404).send("data is not found");
        else
            cruds.name = req.body.name;
            cruds.description = req.body.description;
            cruds.contact = req.body.contact;
            cruds.email = req.body.email;
            cruds.logo = req.body.logo;
            cruds.state = req.body.state;
            cruds.city = req.body.city;
            cruds.completed = req.body.completed;

        cruds.save().then(cruds => {
            res.json('crud updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

crudRoutes.route('/add').post(function (req, res) {
    let cruds = new CRUD(req.body);
    cruds.save()
        .then(cruds => {
            res.status(200).json({ 'cruds': 'crud added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new crud failed');
        });
});

app.use('/crud', crudRoutes);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});