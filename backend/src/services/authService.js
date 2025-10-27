const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = [];  // Em memória; use DB em produção

class AuthService {
  async register(username, password) {
    const existingUser = users.find(u => u.username === username);
    if (existingUser) throw new Error('Usuário já existe');

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    return { username };
  }

  async login(username, password) {
    const user = users.find(u => u.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Credenciais inválidas');
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    return token;
  }
}

module.exports = new AuthService();