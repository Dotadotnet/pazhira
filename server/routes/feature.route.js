

/* external import */
const express = require("express");

/* middleware imports */
const upload = require("../middleware/upload.middleware");

/* internal import */
const Controller = require("../controllers/feature.controller");
const verify = require("../middleware/verify.middleware");
const authorize = require("../middleware/authorize.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */

// add new Feature
router.post(
  "/add",
  verify,
  authorize("superAdmin", "admin"),
  Controller.addFeature
);

// get all Features
router.get("/get-all", Controller.getFeatures);

// get a Feature
router.get("/get/:id", Controller.getFeature);

// update Feature
router.patch(
  "/update/:id",
  verify,
  authorize("superAdmin", "admin"),
  upload('Feature').single("logo"),
  Controller.updateFeature
);

// delete Feature
router.delete(
  "/delete/:id",
  verify,
  authorize("superAdmin", "admin"),
  Controller.deleteFeature
);

module.exports = router;
