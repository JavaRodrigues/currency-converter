const express = require('express');
require('dotenv').config(); // Carrega as variáveis do arquivo .env
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001; // Alinhado com a porta do frontend

// Middlewares
app.use(cors()); // Permite que o frontend acesse esta API
app.use(express.json()); // Permite que o servidor entenda JSON

// Rota de exemplo
app.get('/api/rates', (req, res) => {
  // No futuro, aqui você buscará as taxas de conversão de uma API externa
  res.json({
    message: "API de conversão funcionando!",
    rates: { USD: 1.0, BRL: 5.45, EUR: 0.92 }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});