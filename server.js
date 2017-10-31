var express = require('express');
var app = express();

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.send('ohhh sheeeeyiiittt!');
});

app.listen(process.env.PORT || 8080, null);
console.log('server running on port 8080');
