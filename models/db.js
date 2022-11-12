require('dotenv').config();
const uri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@cluster0.bxhrdmu.mongodb.net/?retryWrites=true&w=majority`
const { MongoClient, ServerApiVersion } = require('mongodb');

const connParams= { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 };
MongoClient.connect(uri,connParams)
.then( () => {
    console.log('Connected to database ')
})
.catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
})

