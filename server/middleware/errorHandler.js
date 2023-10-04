const errorHandler = (err, req, res, next) => {
  let status = 500;
  let message = "Internal Server Error" 

  switch (err.name) {
    case "SequelizeValidationError":
      status = 400;
      message = err.errors[0].message
      // message = {
      //   errors: err.errors.map(el => el.message)
      // };
      break;

    case "SequelizeUniqueConstraintError":
      status = 400;
      message = err.errors[0].message
      // message = {
      //   errors: err.errors.map(el => el.message)
      // };
      break;
    
    case "InvalidLogin":
      status = 401;
      message = "Invalid email/password";
      break;

    case "Unauthenticated":
    case "JsonWebTokenError":
      status = 401;
      message = "Invalid Token";
      break;  
      
    case "UserNotFoundError":
      status = 404;
      message = "User not found"
      break;

    case "NotFoundError":
      status = 404;
      message = "Data not found"
      break;

    case "EmailRequired":
      status = 400;
      message = "Email is required";
      break;

    case "PasswordRequired":
      status = 400;
      message = "Password is required";
      break;

    case "Forbidden":
      status = 403;
      message = "You aren't allow to access this point"
      break;

    default:
      break;

  }
  res.status(status).json({ message });
};

module.exports = errorHandler;