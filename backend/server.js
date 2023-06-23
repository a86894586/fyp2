const express = require('express');
const app = express();
const PORT = 8080;

// 處理 POST 請求的 JSON 解析
app.use(express.json());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

// 處理 GET 請求的路由
app.get('/api/menu', (req, res) => {
  // 處理獲取菜單資料的邏輯，例如從資料庫或其他資料來源獲取資料
  const menu = ['Pizza', 'Burger', 'Sushi'];
  res.json(menu);
});

// 處理 POST 請求的路由
app.post('/api/orders', (req, res) => {
  // 處理新增訂單的邏輯，例如將訂單資料儲存到資料庫或其他資料儲存方式
  const order = req.body;
  // 在這裡可以處理訂單儲存後的邏輯，例如回傳成功訊息或其他操作
  res.json({ message: '訂單已新增', order });
});

// 啟動伺服器
app.listen(8080, () => {
  console.log(`伺服器已啟動，監聽在 http://localhost:${PORT}`);
});
