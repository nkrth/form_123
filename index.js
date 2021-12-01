var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.get('/', function(req, res) {
    res.render('form')
    console.log(res.statusCode)
});

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.post('/', function(req, res) {
    res.type('html')
    let z = req.body
    console.log(z)
    res.send(
        `<b>Name</b>: ${z.firstname} ${z.lastname} <br/>
        <b>Gender</b>: ${z.gender} <br/>
        <b>Country</b>: ${z.country} <br/>
        <b>Address</b>: ${z.address} <br/>
        <b>Email</b>: ${z.email} <br/>
        <b>Password</b>: ${z.password}
        `
    );
});

app.listen(3000, () => console.log("Running"));