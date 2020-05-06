module.exports = (req, res, next) => {
    try {
        next();
    } catch (e) {
        res.status = e.status || 500;
        res.body = { error: e.message || "Internal server error" }
    }
}