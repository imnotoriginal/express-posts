module.exports = (req, res, next) => {
    res.render('error', {
        errorMessage: "Page does not exist",
        errorStatus: 404
    })
}