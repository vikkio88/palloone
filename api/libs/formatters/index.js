const response = (payload, meta = {}) => {
    return {
        meta,
        payload
    }
}
module.exports = {
    response
}