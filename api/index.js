const cors = require('micro-cors')();
const { send } = require('micro');
const { applyMiddleware } = require('micro-mw');
const { router, get, post } = require('microrouter');
const user = require('./actions/users');
const { authenticate } = require('./middlewares');


module.exports = cors(router(
    get('/ping', () => ({ pong: true })),

    post('/login', user.login),

    get('/user', applyMiddleware([authenticate], user.stuff)),


    get('/*', (req, res) => send(res, 404)),
    post('/*', (req, res) => send(res, 404)),
));