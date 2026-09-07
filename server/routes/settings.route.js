const express = require("express");
/* middleware imports */
const upload = require("../middleware/upload.middleware");
const verify = require("../middleware/verify.middleware");
/* internal import */
const adminController = require("../controllers/admin.controller");
const authorize = require("../middleware/authorize.middleware");
const Controller = require("../controllers/settings.controller");
/* router level connection */
const router = express.Router();
/* router methods integration */


router.get(
  "/admin-get-all",
  verify,
  authorize("superAdmin"),
  Controller.getAll
);



router.patch(
  "/update/:id",
  verify,
  authorize("superAdmin"),
  Controller.update
);


router.get(
  "/get-all",
  Controller.getAllClient
);


module.exports = router;
