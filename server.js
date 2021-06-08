// ! Dependencies
const app = require("./app.js");

// ! Configurtion
require("dotenv").config();
const PORT = process.env.PORT;
const LOGGING_ENV = "DEVELOPMENT"

// ! Listen
app.listen(PORT, () => {
    console.log(`[${LOGGING_ENV}] Listening on port ${PORT}`);
})
