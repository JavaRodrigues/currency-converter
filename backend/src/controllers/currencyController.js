const currencyService = require('../services/currencyService');

class CurrencyController {
  async getCurrencyRate(req, res) {
    try {
      const { code } = req.params;
      const rate = await currencyService.fetchCurrencyRate(code);
      res.json(rate);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar cotação' });
    }
  }
}

module.exports = new CurrencyController();
// module.exports = CurrencyController;