const ApiError = require('../error/ApiError');

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async auth(req, res, next) {
        const { id } = req.query;
        if (!id) {
            return next(ApiError.badRequst('dont find id user'));
        }
        res.json(id);
    }
};

module.exports = new UserController();