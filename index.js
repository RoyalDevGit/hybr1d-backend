const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routers/auth');
const buyerRoutes = require('./routers/buyer');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/buyer', buyerRoutes);

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  else console.log('DB connected');
});

app.listen(port, (err) => {
  if (!err) {
    console.log(`Listening on port ${port}`);
  }
})
