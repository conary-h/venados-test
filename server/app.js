const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const app = express();

app.use('/', routes);

app.set('port', process.env.PORT || 7777);

const server = app.listen(7777, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});