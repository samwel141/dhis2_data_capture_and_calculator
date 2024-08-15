
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

const username = 'developer';
const password = 'Developer@123';

app.get('/api/data-elements', async (req, res) => {
  try {
    const response = await axios.get('https://training.dhis2.udsm.ac.tz/api/dataElements.json', {
      params: {
        fields: 'id,name,formName,valueType,domainType',
        filter: 'domainType:eq:AGGREGATE'
      },
      auth: {
        username: username,
        password: password
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
