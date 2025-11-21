
/* internal import */
const Service = require("../services/feature.service");

/* add new Feature */
exports.addFeature = async (req, res, next) => {
  try {
    await Service.addFeature(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* get all Features */
exports.getFeatures = async (req, res, next) => {
  try {
    await Service.getFeatures(req,res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* get a Feature */
exports.getFeature = async (req, res, next) => {
  try {
    await Service.getFeature(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* update Feature */
exports.updateFeature = async (req, res, next) => {
  try {
    await Service.updateFeature(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* delete Feature */
exports.deleteFeature = async (req, res, next) => {
  try {
    await Service.deleteFeature(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};
