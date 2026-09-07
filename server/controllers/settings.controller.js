const Service = require("../services/settings.service");

// init session
exports.getAll = async (req, res, next) => {
  try {
    const configs = await Service.getAll(req, res);
    res.status(200).json({
      acknowledgement: true,
      message: "Successfully",
      description: "تنظیمات  دریافت شد",
      data: configs
    });
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};


exports.update = async (req, res, next) => {
  try {
    const configs = await Service.update(req, res);
    res.status(200).json({
      acknowledgement: true,
      message: "Successfully",
      description: "تنظیمات  دریافت شد",
      data: configs
    });
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};


exports.getAllClient = async (req, res, next) => {
  try {
    const settings = await Service.getAll(req, res);
    const configs = {};
    settings.forEach(setting => {
      configs[setting.key] = setting.value
    });
    res.status(200).json({
      acknowledgement: true,
      message: "Successfully",
      description: "تنظیمات  دریافت شد",
      data: configs
    });
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};