var express = require('express'),
    port = 3000, // Specify Express server port
    app = express(); // Create app

app.use(express.static('public'));
app.listen(port, function() {
  console.log('Express Server is running on port ' + port);
});
