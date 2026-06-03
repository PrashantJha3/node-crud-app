const User = require("../models/user.model");

class UserRepository {
  async create(userData) {
    return User.create(userData);
  }

  async findAll() {
    return User.find();
  }

  async findById(id) {
    return User.findById(id);
  }

  async update(id, payload) {
    return User.findByIdAndUpdate(
      id,
      payload,
      {
        new: true,
      }
    );
  }

  async delete(id) {
    return User.findByIdAndDelete(id);
  }
}

module.exports = new UserRepository();