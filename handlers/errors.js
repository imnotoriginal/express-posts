module.exports = (err, req, res, next) => {
    console.log("Error occured:", err);
    const errorMessage = err.message || "Internal server error",
        errorStatus = err.status || 500;

    res.status(errorStatus);
    if (req.accepts('html')) {
        res.render('error', { errorMessage, errorStatus });
        return;
    }

    if (req.accepts('json')) {
        res.send({ error: errorMessage, status: errorStatus });
        return;
    }

    res.type('txt').send(errorMessage);
}