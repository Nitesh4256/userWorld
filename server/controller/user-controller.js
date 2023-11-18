const User = require("../models/User");
const bcrypt = require("bcrypt");
const Data = require("../models/data");
const usersData = require("../data/data.json");
const Item = require("../models/Item");
exports.signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      res.status(401).json({
        success: "false",
        message: "All Fields are required",
      });
    }

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(201).json({
        success: false,
        message: "User already Exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log("hashpassword", hashedPassword);
    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({
      success: true,
      message: "User signup SucceesFully",
    });
  } catch (error) {
    console.log("Error while signup the user ");
    console.log(error);
  }
};

exports.logIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please Provide all the details",
    });
  }

  const userExist = await User.findOne({ email });
  if (!userExist) {
    return res.status(201).json({
      success: false,
      message: "User does not exist",
    });
  }

  const comparePassword = await bcrypt.compare(password, userExist.password);

  if (!comparePassword) {
    return res.status(201).json({
      success: false,
      message: "cant login ",
    });
  }

  return res.status(201).json({
    success: true,
    message: "User Login Successfully",
  });
};

exports.getUsers = async (req, res) => {
  try {
    const pageNumber = parseInt(req.query.page) || 1; // Get the current page number from the query parameters
    const limit = 20; // Number of items per page

    let skip = (pageNumber - 1) * limit;
    // ascending order using ids
    const dat = await Data.find({});

    console.log("dat", dat);
    const user = await Data.find().sort({ id: 1 }).skip(skip).limit(limit);
    res.send({
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { first_name } = req.body;
    console.log("firstname", first_name);
    const user = await Data.find({});
    console.log("user", user);
    if (!user) {
      return res.status(200).json({
        success: false,
        message: "User does not exist",
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("error while geting user");
    console.log(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id, firstName, lastName, email, gender, available, domain } =
      req.body;

    const updateUser = await User.findOneAndUpdate(
      { id: id },
      {
        firstName,
        lastName,
        email,
        gender,
        available,
        domain,
      }
    );

    if (!updateUser) {
      return res.status(400).json({
        success: false,
        message: "cant update user",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User update successfully",
    });
  } catch (error) {
    console.log("error in updatteUser api");
    console.log(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    console.log("id", id);
    const updateUser = await Data.findOneAndDelete({ id: id });
    console.log("updateUser", updateUser);
    if (!updateUser) {
      return res.status(200).json({
        success: false,
        message: "cant delete",
      });
    }

    return res.status(200).json({
      success: true,
      message: "user deleted successfully",
    });
  } catch (error) {
    console.log("error while deleting user");
    console.log(error);
  }
};
