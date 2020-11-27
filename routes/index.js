const router = require('express').Router();
const viewRoutes = require("./views");
const dbRoutes = require("./db");
const apiRoutes = require("./api");



router.use("/",viewRoutes);
router.use("/db",dbRoutes);
router.use("/api",apiRoutes);



module.exports = router;




