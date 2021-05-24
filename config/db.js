const mongoose = require('mongoose');

module.exports = () => {
  var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost:27017/demoosram';

  mongoose.connect(
    uristring,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, res) {
      if (err) {
        console.log("ERROR connecting to: " + uristring + ". " + err);
      } else {
        console.log("Succeeded connected: " + uristring);
      }
    }
  );
};
