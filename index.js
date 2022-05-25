const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('The car whisperer is whispering successfully');
});

app.listen(port, () => {
  console.log(`The car whisperer is whispering on port ${port}`);
});
