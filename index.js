const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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
