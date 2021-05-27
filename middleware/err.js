const errorHandler = (err, req, res, next) => {
  let code;
  let name = err.name;
  let message;

  switch (name) {
    case "SN_NONEXIST":
      code = 409;
      message = "Serial Number Tidak Tersedia!";
      break;
    case "MONGOOSE_ERROR":
      code = 500;
      message = "Mongoose error!";
      break;
    case "LOGIN_FAIL":
      code = 401;
      message = "Ups. Email Or password not found!";
      break;
    case "MISSING_TOKEN":
      code = 401;
      message = "Missing access token!";
      break;
    case "INVALID_TOKEN":
      code = 401;
      message = "Invalid access token!";
      break;
    case "NOT_ENOUGH":
      code = 401;
      message = "yours Not enough";
      break;
    case "NOT_AVAILABLE":
      code = 404;
      message = "Data is not available!";
      break;
    case "FORBIDDEN":
      code = 403;
      message = "No access!";
      break;
    default:
      code = 500;
      message = "Internal server error!";
  }

  res.status(code).json({
    success: false,
    message: message,
    error: err,
    statusCode: code,
  });
};

module.exports = errorHandler;
