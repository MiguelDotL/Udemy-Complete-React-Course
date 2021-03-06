var express = require('express'),
    app = express(); // Create app
const PORT = process.env.PORT || 3000, // Specify Express server port

app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});


app.use(express.static('public'));
app.listen(PORT, function() {
  console.log('Express Server is running on port ' + PORT);
});
