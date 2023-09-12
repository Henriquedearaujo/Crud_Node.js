const { createPool } = require("mysql2");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "localhost",
  user: "HenriqueEstudos",
  password: "",
  database: "",
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