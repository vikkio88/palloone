const { send } = require('micro');
const dayjs = require('dayjs');
const { auth } = require('../libs/auth');

const authenticate = (req, res) => {
    if (!req.headers.authorization) {
        return send(res, 401);
    }
    let payload = {};
    try {
        payload = auth.decode(req.headers.authorization);
    } catch (e) {
        return send(res, 401);
    }
    console.log(payload);

    if (dayjs().unix() > (payload.expires || 0)) {
        return send(res, 401);
    }

    req.user = payload.user;
}


module.exports = {
    authenticate
}