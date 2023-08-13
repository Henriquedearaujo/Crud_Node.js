const { createPool } = require("mysql2");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Israel01061985!",
  database: "heroku_12f1937794459fe",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, 
  idleTimeout: 60000, 
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
  
});

/** Connection pool creation - END */

module.exports = db;