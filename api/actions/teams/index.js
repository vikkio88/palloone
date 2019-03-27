const { response } = require('../../libs/formatters');

const getById = async (req, res) => {
    const id = parseInt(req.params.id);
    return response({id});
};

const filter = async (req, res) => {
    return response([], {
        count: 0,
        page: 1
    });
};


module.exports = {
    getById,
    filter
};
