const express = require('express');
const mongoose = require('mongoose');
const score = require('./routes/myRoutes');
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.use(score);


app.use((req, res) => {
  res.send("It's not a valid url", 404);
});

mongoose.connect('mongodb://127.0.0.1:27017/result', {
  useNewUrlParser: true,
}).then(app.listen(port, () => {
  console.log(`server starting on ${port}`);
})).catch(() => console.log('please start your Server'));
