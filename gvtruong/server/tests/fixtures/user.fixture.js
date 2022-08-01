const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../../src/models/user.model');

const password = 'password1';
const salt = bcrypt.genSaltSync(8);
const hashedPassword = bcrypt.hashSync(password, salt);

const admin = {
  _id: mongoose.Types.ObjectId(),
  name: 'admin',
  email: 'admin@example.com',
  password: hashedPassword,
  role: 'admin',
  isEmailVerified: true,
};

const insertUsers = async (user) => {
  await User.create({ ...user, password: hashedPassword })
};

module.exports = {
  admin,
  insertUsers,
};
