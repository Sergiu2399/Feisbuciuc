const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PostRoutes = require('./routes/postRoutes');
const port = process.env.PORT || 80;
const uri =
  'mongodb+srv://feisbuciuc:Ieti2021@cluster0.v9jcc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(PostRoutes);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })

  .catch((err) => console.log(err.reason));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});