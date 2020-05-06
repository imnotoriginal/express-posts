module.exports = (err, req, res, next) => {
    res.status(404);
    console.log("Error: ", err);

    if (req.accepts('html')) {
        res.render('error', {
            errorMessage: "Internal server error",
            errorStatus: 404
        });
        return;
    }

    if (req.accepts('json')) {
        res.send({ error: 'Internal server error' });
        return;
    }

    res.type('txt').send('Internal server error');
}