const mongoose = require('mongoose');

module.exports = () => {
  var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://osram:5ojlJzchT4o8Tf90@osramdb-shard-00-00.wjuh4.mongodb.net:27017,osramdb-shard-00-01.wjuh4.mongodb.net:27017,osramdb-shard-00-02.wjuh4.mongodb.net:27017/waranty?ssl=true&replicaSet=atlas-1491g9-shard-0&authSource=admin&retryWrites=true&w=majority'

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
