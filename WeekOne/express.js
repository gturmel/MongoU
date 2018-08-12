const express = require('express'),
    app = express(),
    engines = require('consolidate');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', `${__dirname}/templates`);

app.get('/', (req, res) => {
    res.render('hello-world', {'name': 'Templates'});
});

app.use((req, res) => {
    res.sendStatus(404)
});

const server = app.listen(3000, () => {
    const port = server.address().port;
    console.log('Express server listening on port %s', port);
});