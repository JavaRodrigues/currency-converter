const axios = require('axios');

class CurrencyService {
  async fetchCurrencyRate(code) {
    // Mapeamento de códigos comuns para séries do BCB (exemplos)
    const codeMap = {
      USD: 1,  // Dólar americano
      EUR: 21619,  // Euro
      GBP: 21623,  // Libra esterlina
      JPY: 21620,  // Iene japonês
      // Adicione mais conforme necessário
    };

    const seriesCode = codeMap[code.toUpperCase()];
    if (!seriesCode) {
      throw new Error('Moeda não suportada');
    }

    const url = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${seriesCode}/dados/ultimos/1?formato=json`;
    const response = await axios.get(url);
    const data = response.data[0];  // Último valor

    return {
      code,
      value: parseFloat(data.valor),
      date: data.data,
    };
  }
}

module.exports = new CurrencyService();
// module.exports = CurrencyService;