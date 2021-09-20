const { findUserService } = require('../services/users');

const login = async (req, res) => {
  try {
    const { username = '', password = '' } = req.body;
    const { status, message} = await findUserService(username, password);
    
    return res.status(status).json({ message });
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
}

module.exports = { login };
