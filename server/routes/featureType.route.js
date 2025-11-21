

/* external import */
const express = require("express");

/* middleware imports */
const upload = require("../middleware/upload.middleware");

/* internal import */
const Controller = require("../controllers/featureType.controller");
const verify = require("../middleware/verify.middleware");
const authorize = require("../middleware/authorize.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */

// add new featureType
router.post(
  "/add",
  verify,
  authorize("superAdmin", "admin"),
  Controller.addFeatureType
);

// get all featureTypes
router.get("/get-all", Controller.getFeatureTypes);

// get a featureType
router.get("/get/:id", Controller.getFeatureType);

// update featureType
router.patch(
  "/update/:id",
  verify,
  authorize("superAdmin", "admin"),
  upload('featureType').single("logo"),
  Controller.updateFeatureType
);

// delete featureType
router.delete(
  "/delete/:id",
  verify,
  authorize("superAdmin", "admin"),
  Controller.deleteFeatureType
);

module.exports = router;
