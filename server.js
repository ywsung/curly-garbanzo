'use strict';

const express = require('express');

// 상수
const PORT = 8080;
const HOST = '0.0.0.0';

// 앱
const app = express();
app.get('/', (req, res) => {
  res.send('Hello 인증서비스개발팀 node server v1.0');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
