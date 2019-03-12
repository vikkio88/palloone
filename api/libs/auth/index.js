const jwt = require('jwt-simple');
const dayjs = require('dayjs');

const SECRET = 'ciao';
const TTL = 3600;
const auth = {
    check({ username, password }) {
        return !(username == 'admin' && password == 'password');
    },
    encode(user) {
        return jwt.encode({ user, expires: dayjs().unix() + TTL }, SECRET);
    },
    decode(token) {
        token = token.replace('Bearer ', '');
        return jwt.decode(token, SECRET);
    }

}
module.exports = {
    auth
}