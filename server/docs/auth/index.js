const login = require("./login");
const signup = require("./signup");
const checkToken = require("./check-token");
const forgotPassword = require("./forgotPassword");
const refreshToken = require("./refresh-token");

module.exports = {
  "/auth/login": {
    ...login,
  },
  "/auth/signup": {
    ...signup,
  },
  "/auth/refresh-token": {
    ...refreshToken,
  },
  "/auth/forgot-password": {
    ...forgotPassword,
  },
  "/auth/check-token": {
    ...checkToken,
  },
};
