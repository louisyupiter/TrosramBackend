const mongoose = require('mongoose');

module.exports = () => {

    var uristring =
    process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb+srv://Sayangmamah:Sayangmamah@cluster0.ma8no.mongodb.net/demoosram'
    ;


    mongoose.connect(uristring,{ useNewUrlParser: true, useUnifiedTopology: true }, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected  ');
      }
    });


};
