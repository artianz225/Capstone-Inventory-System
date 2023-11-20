import Registered from '../models/RegisterAccounts.js';
import bcrypt from 'bcrypt';
import  jwt  from 'jsonwebtoken';
import config from '../utils/config.js';

async function login({ username, password }) {
  const user = await Registered.findOne({ username });

  if (!user) {
    throw new Error('Invalid username or password');
  }

  const passwordCorrect = await bcrypt.compare(password, user.passwordHash);

  if (!passwordCorrect) {
    throw new Error('Invalid username or password');
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  const token = jwt.sign(userForToken, config.SECRET, { expiresIn: '1h' });

  return {
    token,
    employeeId: user.employeeId,
    username: user.username,
    name: user.name,
    contact: user.contact,
    email: user.email,
    position: user.position,
    photoInfo: {
      url: user.photoInfo.url,
      filename: user.photoInfo.filename,
    },
  };
}

export default {
  login
}