var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// html path
app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'index.html'));
});




app.listen(PORT, function() {
console.log('App listening on PORT:'  + PORT);
});