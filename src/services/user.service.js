const userRepository = require(
  "../repositories/user.repository"
);

class UserService {
  async createUser(data) {
    return userRepository.create(data);
  }

  async getUsers() {
    return userRepository.findAll();
  }

  async getUser(id) {
    const user =
      await userRepository.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async updateUser(id, payload) {
    const user =
      await userRepository.update(
        id,
        payload
      );

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async deleteUser(id) {
    const user =
      await userRepository.delete(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}

module.exports = new UserService();