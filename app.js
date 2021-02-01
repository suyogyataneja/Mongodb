
// refernece to mongodb db
let mongodb = require('mongodb');

//creating instance of mongodb client 
let mongodbClient = mongodb.MongoClient;

//connect the server --const is used to protect
const DB_URL = 'mongodb://127.0.0.1:27017';

// In real we dont host db server and backend server togerther 
// as there are lot of computations happening 

let db;
// connecting to server now
mongodbClient.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
} ,function(err, client)
{
    if(err){
        console.log('Error in mongodb connection '+err);
    }else{

        console.log('connection successful');
        db = client.db('carsdb'); // this is database 

        // this is the collection and we are inserting one element at a time
        db.collection('newcars').insertOne({maker:'BMW', model: 'x7'});
    }


});

