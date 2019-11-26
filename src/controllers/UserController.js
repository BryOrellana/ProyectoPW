var User = require('../models/user');
var debug = require('debug')('ProyectoPW:user_controller');

// Search one user in database
module.exports.getOne = (req, res, next) => {
    debug("Search User", req.params);
    User.findOne({
            carnet: req.params.carnet
        }, "-password -login_count")
        .then((foundUser) => {
            debug("Found User", foundUser);
            if (foundUser)
                return res.status(200).json(foundUser);
            else
                return res.status(400).json(null)
        })
        .catch(err => {
            next(err);
        });
}

//Search all users in database
module.exports.getAll = (req, res, next) => {
    var perPage = Number(req.query.size) || 10,
        page = req.query.page > 0 ? req.query.page : 0;

    var sortProperty = req.query.sortby || "createdAt",
        sort = req.query.sort || "desc";

    debug("Usert List", {
        size: perPage,
        page,
        sortby: sortProperty,
        sort
    });

    User.find({}, "-password -login_count")
        .limit(perPage)
        .skip(perPage * page)
        .sort({
            [sortProperty]: sort
        })
        .then((users) => {
            debug("Found users", users);
            return res.status(200).json(users)
        }).catch(err => {
            next(err);
        });

}

// Create new User

module.exports.register = (req, res, next) => {
    debug("New User", {
        body: req.body
    });
    User.findOne({
            carnet: req.body.carnet
        }, "-password -login_count")
        .then((foundUser) => {
            if (foundUser) {
                debug("Usuario duplicado");
                throw new Error(`Usuario duplicado ${req.body.carnet}`);
            } else {
                let newUser = new User({
                    carnet: req.body.carnet,
                    password: req.body.password,
                    rol: req.body.rol /*TODO: Modificar, hacer hash del password*/
                });
                return newUser.save();
            }
        }).then(user => {
            return res
                .header('Location', '/users/' + user.carnet)
                .status(201)
                .json({
                    carnet: user.carnet
                });
        }).catch(err => {
            next(err);
        });
}


// Update user 

module.exports.update = (req, res, next) => {
    debug("Update user", {
        carnet: req.params.carnet,
        ...req.body
    });

    let update = {
        ...req.body
    };

    User.findOneAndUpdate({
            carnet: req.params.carnet
        }, update, {
            new: true
        })
        .then((updated) => {
            if (updated)
                return res.status(200).json(updated);
            else
                return res.status(400).json(null);
        }).catch(err => {
            next(err);
        });
}

module.exports.delete = (req, res, next) => {

    debug("Delete user", {
        carnet: req.params.carnet,
    });

    User.findOneAndDelete({carnet: req.params.carnet})
    .then((data) =>{
        if (data) res.status(200).json(data);
        else res.status(404).send();
    }).catch( err => {
        next(err);
    })
}