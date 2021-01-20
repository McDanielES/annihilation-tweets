const express = require('express');
const path = require('path');
var cors = require('cors');
const app = express();
app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', createProxyMiddleware({ 
  target: 'http://localhost:3000/', //original url
  changeOrigin: true, 
  //secure: false,
  onProxyRes: function (proxyRes, req, res) {
     proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

app.listen(3000, function() {
  console.log("App has started.");
});