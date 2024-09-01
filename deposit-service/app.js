const express = require('express');
const bodyParser = require('body-parser');
const depositsRouter = require('./routes/deposits');

const app = express();

app.use(bodyParser.json());

app.use('/deposits', depositsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Deposit service running on port ${PORT}`);
});

module.exports = app;