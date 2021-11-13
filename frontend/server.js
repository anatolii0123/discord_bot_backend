const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/build'));
app.get('/*', function(req,res){
res.sendFile(path.join(__dirname, 'build', 'index.html'))
});
// Start the app by listening on the default Heroku port
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`app is listening to ${port}`);
});