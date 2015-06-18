module.exports = function () {
    return {
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
};