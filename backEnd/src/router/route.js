const router = require("express").Router();
const {
  welcomeSever,
  getData,
  createData,
  createTable,
  describedata,
  tableShow,
  querySelect,
  selecttable,
  databasecreation,
  searchQuery,
} = require("../controller/control");
router.get("/", welcomeSever);
router.get("/api/getdata", getData);
router.get("/api/table/name", selecttable);
router.post("/api/create/data", createData);
router.post("/api/create/table", createTable);
router.get("/api/describe/data", describedata);
router.get("/api/table/data", tableShow);
router.post("/api/table/select", querySelect);
router.post("/api/dbsconnect", databasecreation);
router.post("/api/querySearch", searchQuery);

module.exports = router;
