const express = require('express');
const cors = require('cors');
const path = require('path');
const connectToDB = require('./db');
const session = require('express-session')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')

// start express server
const app = express();
app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});

// connect to DB
connectToDB();

// add middleware
if(process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    })
  );
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ 
  secret: process.env.SECRET, 
  store: MongoStore.create(mongoose.connection), 
  resave: false, 
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production', },

}))
// This is used to create session. Secret helps to make our sessions more unique and less licly to be vulnerable

// add routes
app.use('/api', require('./routes/ads.routes.js'));
app.use('/api', require('./routes/users.routes.js'));
app.use('/auth', require('./routes/auths.routes.js'))


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/client/build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});