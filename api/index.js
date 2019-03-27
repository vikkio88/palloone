const cors = require('micro-cors')();
const { send } = require('micro');
const { applyMiddleware } = require('micro-mw');
const { router, get, post } = require('microrouter');

const { users, players, teams } = require('./actions')
const { authguard, getUser } = require('./middlewares');


module.exports = cors(router(
    get('/ping', () => ({ pong: true })),

    post('/login', users.login),

    get('/user', applyMiddleware([authguard], users.stuff)),
    
    get('/stuff', applyMiddleware([getUser], users.stuff)),


    // Game
    // Players
    get('/players', players.filter),
    get('/players/:id', players.getById),
    // Teams
    get('/teams', teams.filter),
    get('/teams/:id', teams.getById),

    get('/*', (req, res) => send(res, 404)),
    post('/*', (req, res) => send(res, 404)),
));