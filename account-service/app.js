const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const accountRoutes = require('./src/routes/accounts');

const app = express();

app.use(cors()); // 모든 도메인에서의 요청 허용
app.use(bodyParser.json());
app.use(express.json());
app.use('/accounts', accountRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));