const { send } = require('micro');
const dayjs = require('dayjs');
const { auth } = require('../libs/auth');

const extractUser = req => {
    if (!req.headers.authorization) {
        return false;
    }

    let payload = {};
    try {
        payload = auth.decode(req.headers.authorization);
    } catch (e) {
        return false;
    }

    if (dayjs().unix() > (payload.expires || 0)) {
        return false;
    }

    return payload.user;
}

const authguard = (req, res) => {
    const user = extractUser(req);
    if (!user) {
        return send(res, 401);
    }

    req.user = user;
}

const getUser = (req, res) => {
    const user = extractUser(req);
    req.user = user;
}


module.exports = {
    authguard,
    getUser
}