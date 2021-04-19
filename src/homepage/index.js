module.exports = {
    register: (app) => require('./web.starter').init(app),
    // registerApi: (app) => require('./api.starter').init(app)
};