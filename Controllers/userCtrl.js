const UserModel = require("../models/usersModel");
const bcrypt = require("bcrypt");

const login = async (request, response) => {
  let data = request.body;

  //   let {email,password} = data;
  try {
    let result = await UserModel.findOne({
      email: data.email,
    });
    if (result == null) {
      response.status(200).send({
        status: false,
        message: "wrong username",
      });
    } else {
      let isValid = await bcrypt.compare(data.password, result.password);
      if (isValid) {
        response.status(200).send({
          status: true,
          message: "login successfully",
        });
      } else {
        response.status(200).send({
          status: false,
          message: "wrong password",
        });
      }
    }
  } catch (error) {
    response.status(500).send({
      status: false,
      error,
    });
  }
};

const signUp = async (request, response) => {
  let data = request.body;
  try {
    let salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(data.password, salt);
    // create instance
    let newUser = new UserModel({
      fullName: data.full_name,
      email: data.email,
      mobile: data.mobile,
      password: newPassword,
    });
    // save method
    let result = await newUser.save();

    response.status(200).send({
      status: true,
      result,
    });
  } catch (error) {
    response.status(500).send({
      status: false,
      error,
    });
  }
};
module.exports = {
                   login,
                   signUp
};