let express = require('express');
let router = express.Router();


router.get('/person', (req, res) => {

    const MongoClient = require('mongodb').MongoClient;
    // replace the uri string with your connection string.
    const uri = "mongodb://abucalicut:4HSe6Vzh1ILMbwZp@cluster0-shard-00-00.4qual.mongodb.net:27017,cluster0-shard-00-01.4qual.mongodb.net:27017,cluster0-shard-00-02.4qual.mongodb.net:27017/Abu?ssl=true&replicaSet=atlas-h595kw-shard-0&authSource=admin&retryWrites=true&w=majority";
   let result;
    MongoClient.connect(uri, { useUnifiedTopology: true }, function (err, client) {
        
        if (err) {
            result=err;
        } else {
            //result=
            //console.log('DB Connected...');
        }

        var db = client.db("Abu");
        db.collection("sahithyolsav").find({}).sort({Score:-1}).toArray(function (err, result) {
            result=result;
            client.close();
            res.send(result);
        })
    });

    
})


module.exports = router;
