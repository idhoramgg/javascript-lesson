require('dotenv').config()

const MongoClient = require('mongodb').MongoClient

const url = process.env.MONGODB_URL
const database = process.env.MONGODB_DATABASE


MongoClient.connect(url, (err, client) => {
  if(err) throw err

  var db = client.db(database);

  db.collection('Siswa').find().toArray((err, result) => {
    if(err) throw err
    console.log(result);
    client.close()
    
  })

  db.collection('Siswa').insert({
    username: "Geo",
    email: "testemail@gmail.com",
    country: "Indonesia"
  });
})