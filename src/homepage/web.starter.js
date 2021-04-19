const init = (app) => {
    app.get('/', homepageController);
};

const homepageController = (req, res) => {
    res.render('homepage/homepage', { title: 'Welcome' });
};

module.exports = { init };