const { log } = require("console");
const connectDatabase = require("../models/dbs");
let tableQuery = "userInfo1";
let query = "";
module.exports.welcomeSever = (req, res) => {
  res.status(200).json({ message: "from sserver" });
};

module.exports.querySelect = (req, res) => {
  let search = req.body.search;
  try {
    tableQuery = search;
    res.status(201).json({ message: search });
  } catch (e) {
    console.error(e);
  }
};
module.exports.selecttable = (req, res) => {
  res.status(200).json({ message: tableQuery });
};

module.exports.describedata = (req, res) => {
  try {
    let query = `DESCRIBE ${tableQuery};`;
    dbs.query(query, (err, result, fields) => {
      if (err) return err;
      return res.status(200).send(result);
    });
  } catch (e) {
    console.error("errrrrrorrrrrr____________________01", e);
  }
};
module.exports.tableShow = (req, res) => {
  try {
    let query = "SHOW TABLES;";
    dbs.query(query, (err, result, fields) => {
      if (err) return err;
      return res.status(200).send(result);
    });
  } catch (e) {
    console.error("errrrrrorrrrrr____________________", e);
  }
};

module.exports.getData = (req, res) => {
  try {
    let query = `SELECT * FROM ${tableQuery} ;`;
    dbs.query(query, (err, result, fields) => {
      if (err) return err;
      return res.status(200).send(result);
    });
  } catch (e) {
    console.error("errrrrrorrrrrr____________________01", e);
  }
};

module.exports.createTable = (req, res) => {
  const { syntax, table, data } = req.body;
  let loop = "id INT PRIMARY KEY ";
  for (let i = 0; i < data.length; i++) {
    loop += "," + data[i];
  }
  let querys = `${syntax} ${table} (${loop});`;
  try {
    dbs.query(querys, (err, result, fields) => {
      if (err) return err;
      return console.log(`created`), res.status(201).json({ message: "ok" });
    });
  } catch (e) {
    console.error("errrrrrorrrrrr____________________01", e);
  }
};
const mysql = require("mysql");

module.exports.createData = (req, res) => {
  try {
    const data = req.body;
    const keys = Object.keys(data).join(", ");
    const values = Object.values(data).map((val) => mysql.escape(val));

    const query = `INSERT INTO  ${tableQuery} (${keys}) VALUES (${values.join(
      ", "
    )});`;
    log(query);

    dbs.query(query, (error, results) => {
      if (error) {
        return console.error(error);
      } else {
        return res.status(201).json({ message: "created" });
      }
    });
  } catch (e) {
    console.error(e);
  }
};
let dbs;
module.exports.databasecreation = (req, res) => {
  const { port, username, password, databasename } = req.body;
  dbs = connectDatabase(port, username, password, databasename);
  res.status(200).send(dbs);
};

module.exports.searchQuery = (req, res) => {
   const { searchq } = req.body;
  try {
    query = searchq;
    dbs.query(`${query}`, (error, result, field) => {
      if (error) return error;
      return res.status(200).send(result);
    });
  } catch (e) {
    console.error(e);
  }
};
