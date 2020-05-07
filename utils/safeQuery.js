const _async = async (next, query) => {
    try {
        return await query();
    } catch (e) {
        next(e);
    }
}

const _sync = (next, query) => {
    try {
        return query();
    } catch (e) {
        next(e);
    }
}

module.exports = { async: _async, sync: _sync }