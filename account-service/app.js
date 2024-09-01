const express = require('express');
const bodyParser = require('body-parser');
const accountRoutes = require('./src/routes/accounts');
const db = require('./src/config/database');  // 데이터베이스 설정 파일 임포트
const cors = require('cors');

const app = express();

app.use(cors()); // 모든 도메인에서의 요청 허용

app.use(bodyParser.json());

// 라우트 설정
app.use('/accounts', accountRoutes);


// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 1398;

async function startServer() {
  try {
    // 데이터베이스 연결 테스트
    const connection = await db.getConnection();
    console.log('Successfully connected to the database.');
    connection.release();

    // 서버 시작
    app.listen(PORT, () => {
      console.log(`Account service running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
    process.exit(1);
  }
}

startServer();
