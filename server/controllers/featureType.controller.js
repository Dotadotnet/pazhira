
/* internal import */
const Service = require("../services/featureType.service");

/* add new FeatureType */
exports.addFeatureType = async (req, res, next) => {
  try {
    await Service.addFeatureType(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* get all FeatureTypes */
exports.getFeatureTypes = async (req, res, next) => {
  try {
    await Service.getFeatureTypes(req,res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* get a FeatureType */
exports.getFeatureType = async (req, res, next) => {
  try {
    await Service.getFeatureType(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* update FeatureType */
exports.updateFeatureType = async (req, res, next) => {
  try {
    await Service.updateFeatureType(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* delete FeatureType */
exports.deleteFeatureType = async (req, res, next) => {
  try {
    await Service.deleteFeatureType(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};
