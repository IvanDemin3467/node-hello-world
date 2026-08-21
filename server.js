const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Главная страница
app.get('/', (req, res) => {
  res.send('Hello world! Node.js');
});

// Эндпоинт для проверки здоровья Kubernetes (liveness/readiness probe)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
