const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const morgan = require("morgan");
const getConnection = require("./db/helpers/getConnection");
const constants = require("./utils/constants");
const middlewares = require("./middlewares");

// getConnection(constants.DB_URL);
const app = express();
const port = constants.PORT_NUMBER;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(constants.RRDMS_URL_ROOT_PATH, routes);
/* Below functions should always be placed at last */
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(port, () => console.log(`server is listening on port ${port}!`));
