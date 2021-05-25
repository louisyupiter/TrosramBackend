const UserModel = require("../model/User");

class UserController {
  static async create(req, res, next) {
    try {
      const user = await UserModel.create({
        username: req.body.username,
        password: req.body.password
      });

      res.status(200).json({
        success: true,
        message: "Berhasil membuat User Admin",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const userValidated = await UserModel.findOne({
        username: req.body.username,
        password: req.body.password,
      });
      console.log(userValidated);
      if (userValidated) {
        res.status(200).json({
          success: true,
          message: "Username dan Password Cocok",
          data: userValidated,
        });
      } else {
        throw { name: `NOT_AVAILABLE` };
      }
    } catch (err) {
      next(err);
    }
  }

  static async findall(_, res, next) {
    try {
      const user = await UserModel.find();
      res
        .status(200)
        .json({ success: true, message: "success", data: user });
    } catch (error) {
      next(error);
    }
  }

}
module.exports = UserController;
