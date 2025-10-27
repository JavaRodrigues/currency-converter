const authService = require('../services/authService');

class AuthController {
  async register(req, res) {
    try {
      const { username, password } = req.body;
      const user = await authService.register(username, password);
      res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const token = await authService.login(username, password);
      res.json({ token });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}

module.exports = new AuthController();
// module.exports = AuthController;