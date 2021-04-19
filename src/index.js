const app = require('./app');
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port ` + port);
}).on('error', e => {
    console.log('Server failed to start with error:', e);
});
