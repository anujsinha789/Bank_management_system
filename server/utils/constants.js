/**
 * @author Anuj Sinha
 * This is the constants file where all the necessary constants are writen
 * @exports all the necessary constants
 */

/**
 * @constant {Number} PORT conatins the default PORT for this API
 * @author Anuj Sinha
 */
const PORT_NUMBER = 4000;

/**
 * @constant {string} ROOT_PATH contains the default root path of our API endpoints.
 * @author Anuj Sinha
 */
const RRDMS_URL_ROOT_PATH = "";

/**
 * @constant {string} DB_URL contains the database URL.
 * @author Anuj Sinha
 */
const DB_URL = "mongodb://localhost:27017/manage_my_bucks_db";

/**
 * corresponds to the different mail schedular settings.
 * @author Anuj Sinha
 */
const DEFAULT = "DEFAULT";
const WEEKLY = "WEEKLY";
const MONTHLY = "MONTHLY";
const YEARLY = "YEARlY";

module.exports = {
  RRDMS_URL_ROOT_PATH,
  DB_URL,
  PORT_NUMBER,
  DEFAULT,
  WEEKLY,
  MONTHLY,
  YEARLY,
};
