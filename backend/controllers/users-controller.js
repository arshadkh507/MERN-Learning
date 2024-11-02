const { v4: uuidv4 } = require("uuid");
const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");

let dummyUsers = [
  {
    id: "u1",
    name: "Arshad",
    email: "test@test.com",
    password: "test@123",
  },
];

const getUsers = (req, res, next) => {
  res.json({ users: dummyUsers });
};
const signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid input passed, please check your data", 422);
  }

  const { name, email, password } = req.body;

  const hasUser = dummyUsers.find((u) => u.email === email);

  if (hasUser) {
    throw new HttpError(
      "Could not create user, with this email user already exist.",
      422
    );
  }

  const createdUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };
  dummyUsers.push(createdUser);

  res.status(200).json({ user: createdUser });
};
const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = dummyUsers.find((user) => user.email === email);

  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError(
      "Could not identified user!, credential seem to be wrong",
      401
    );
  }

  res.json({ message: "Logged in!" });
};

module.exports = { getUsers, signup, login };
