require('dotenv').config();

const CONFIG = {

    // DB URL
    DB_HOST : process.env.DB_HOST,
    DB_USERNAME : process.env.DB_USERNAME,
    DB_PASSWORD : process.env.DB_PASSWORD,
    DB_NAME : process.env.DB_NAME,
    
    // Error Messages
    ERROR_MESSAGES: {
        GenericInternalServerErrorMessage: {
          status: 0,
          message: "This internal server error is unfortunate and unexpected - 🤷🏼‍♂️ - Consult the logs to see what occurred.",
        },
      },
}

module.exports = CONFIG;
