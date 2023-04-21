require('dotenv').config();

const CONFIG = {
    // Error Messages
    ERROR_MESSAGES: {
        GenericInternalServerErrorMessage: {
          status: 0,
          message: "This internal server error is unfortunate and unexpected - 🤷🏼‍♂️ - Consult the logs to see what occurred.",
        },
      },
}

module.exports = CONFIG;
