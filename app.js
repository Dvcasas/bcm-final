const express = require('express');
const app = express();
const port = 3001

const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars.engine({
    layoutsDir: `${__dirname}/views/layouts`
}));

app.use(express.static('public'));

// Root
app.get('/', (req, res) => {
    res.render('main', {layout: 'index'});
});

// Navigation Bar
app.get('/blockchain', (req, res) => {
    res.render('blockchain', {layout: 'index'});
});

app.get('/transactions', (req, res) => {
    res.render('transactions', {layout: 'index'});
});

app.get('/channels', (req, res) => {
    res.render('channels', {layout: 'index'});
});

app.get('/credit', (req, res) => {
    res.render('credit', {layout: 'index'});
});

// API Pages
app.get('/blockchaininformation', (req, res) => {
    res.render('blockchaininformation', {layout: 'index'});
});

app.get('/buildblockchain', (req, res) => {
    res.render('buildblockchain', {layout: 'index'});
});

app.get('/contractbycontractid', (req, res) => {
    res.render('contractbycontractid', {layout: 'index'});
});

app.get('/createcaliper', (req, res) => {
    res.render('createcaliper', {layout: 'index'});
});

app.get('/createnewbcuser', (req, res) => {
    res.render('createnewbcuser', {layout: 'index'});
});

app.get('/downloadccp', (req, res) => {
    res.render('downloadccp', {layout: 'index'});
});

app.get('/downloaduserwallet', (req, res) => {
    res.render('downloaduserwallet', {layout: 'index'});
});

app.get('/evaluatetransaction', (req, res) => {
    res.render('evaluatetransaction', {layout: 'index'});
});

app.get('/inserttransaction', (req, res) => {
    res.render('inserttransaction', {layout: 'index'});
});

app.get('/installcontract', (req, res) => {
    res.render('installcontract', {layout: 'index'});
});

app.get('/listblockparameters', (req, res) => {
    res.render('listblockparameters', {layout: 'index'});
});

app.get('/listchannels', (req, res) => {
    res.render('listchannels', {layout: 'index'});
});

app.get('/listinstalledcontracts', (req, res) => {
    res.render('listinstalledcontracts', {layout: 'index'});
});

app.get('/listusers', (req, res) => {
    res.render('listusers', {layout: 'index'});
});

app.get('/listusersbyorganization', (req, res) => {
    res.render('listusersbyorganization', {layout: 'index'});
});

app.get('/registerblockchain', (req, res) => {
    res.render('registerblockchain', {layout: 'index'});
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});