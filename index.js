const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;


app.get('/customers', async (req, res) => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=10');
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
