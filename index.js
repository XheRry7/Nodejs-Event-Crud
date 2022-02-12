

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

require('./startup/routes')(app);
require('./startup/db')();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));