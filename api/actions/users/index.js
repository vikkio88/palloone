const { send, json } = require('micro');
const { auth } = require('../../libs/auth');

const login = async (req, res) => {
    const body = await json(req);
    if (auth.check(body)) {
        return send(res, 401);
    }

    return { token: auth.encode({ username: body.username }) };
}

const stuff = (req, res) => {
    return send(res, 200, { user: req.user });
}


module.exports = {
    login,
    stuff
};