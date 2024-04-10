const { createConnection } = require("mysql");

const connectDatabase = (port, username, password, databasename) => {
  const dbs = createConnection({
    host: "localhost",
    port: port,
    user: username,
    password: password,
    database: databasename,
  });

  dbs.connect((error) => {
    if (error) {
      console.error("dbs connection problem:", error);
      return error;
    }

    console.log(`dbs connected`);
  });
  return dbs;
};

module.exports = connectDatabase;
