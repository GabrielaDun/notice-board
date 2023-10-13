const mongoose = require('mongoose');


const connectToDB = () => {

  // connect to DB
  mongoose.connect(`mongodb+srv://gabriela9889:${process.env.DB_PASS}@cluster1.f8rpjqw.mongodb.net/notice-board?retryWrites=true&w=majority`, { useNewUrlParser: true });  
  const db = mongoose.connection;

  // on success
  db.once('open', () => {
    console.log('Connected to the database');
  });

  // on error
  db.on('error', (err) => console.log('Error ' + err));
}

module.exports = connectToDB;