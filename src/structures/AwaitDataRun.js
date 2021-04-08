module.exports = class DataModule {
    constructor(opts)
    {
        if (typeof opts !== 'object') return new TypeError("'OPTS' Must be an object. Got " + typeof opts);
    }
}