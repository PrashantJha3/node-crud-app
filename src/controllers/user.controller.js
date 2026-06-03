const userService = require(
  "../services/user.service"
);

class UserController {
  async create(req, res, next) {
    try {
      const user =
        await userService.createUser(
          req.body
        );

      res.status(201).json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const users =
        await userService.getUsers();

      res.json({
        success: true,
        data: users,
      });
    } catch (error) {
      next(error);
    }
  }

  async getOne(req, res, next) {
    try {
      const user =
        await userService.getUser(
          req.params.id
        );

      res.json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const user =
        await userService.updateUser(
          req.params.id,
          req.body
        );

      res.json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await userService.deleteUser(
        req.params.id
      );

      res.json({
        success: true,
        message: "User deleted",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();