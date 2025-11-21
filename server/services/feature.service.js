

/* internal import */
const Feature = require("../models/feature.model");
const Product = require("../models/product.model");
const User = require("../models/user.model");
const remove = require("../utils/remove.util");

/* add new feature */
exports.addFeature = async (req, res) => {
  try {
    const { nameFa, nameEn } = req.body;

    const nameEnExite = await Feature.findOne({ nameEn: nameEn })

    if (nameEnExite) {
      return res.status(500).json({
        acknowledgement: false,
        message: "Server Error",
        description: "این شناسه قبلا اضافه شده است",
      });
    }

    const data = req.body;

    data["creator"] = req.admin._id;

    try {
      data["data"] = JSON.parse(data.data);
    } catch (error) {
      if (data.data || data.data == 0) {
        data["data"] = data.data
      } else {
        data["data"] = null
      }
    }


    const feature = new Feature(data);

    const result = await feature.save();

    return res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "ویژگی با موفقیت ایجاد شد"
    });
  } catch (error) {
    console.error("Error in add Feature :", error);
    return res.status(500).json({
      acknowledgement: false,
      message: "Internal Server Error",
      description: error.message || "مشکلی در ایجاد ویژگی پیش آمد",
    });
  }
};
;

/* get all features */
exports.getFeatures = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;

    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 10;
    const skip = (pageNum - 1) * limitNum;

    const query = {};
    if (search) {
      query.title = { $regex: search, $options: "i" }; // سرچ بر اساس عنوان
    }

    const Features = await Feature.find(query)
      .skip(skip)
      .limit(limitNum)
      .sort({ createdAt: -1 })
      .populate("icon").populate("type");

    const total = await Feature.countDocuments(query);

    return res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "ویژگی ها با موفقیت دریافت شدند",
      data: Features,
      total,

    });
  } catch (error) {
    console.error("Error in get features :", error);
    return res.status(500).json({
      acknowledgement: false,
      message: "خطا در دریافت ویژگی ها",
      description: error.message || error.toString()
    });
  }
};

/* get a feature */
exports.getFeature = async (req, res) => {
  const feature = await Feature.findOne({ featureId: req.params.id });
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "feature fetched successfully",
    data: feature,
  });
};

/* update feature */
exports.updateFeature = async (req, res) => {
  const { nameFa, nameEn } = req.body;
  const data = req.body;

  data["creator"] = req.admin._id;

  try {
    data["data"] = JSON.parse(data.data);
  } catch (error) {
    if (data.data || data.data == 0) {
      data["data"] = data.data
    } else {
      data["data"] = null
    }
  }


  const feature = await Feature.findOneAndUpdate({ featureId: req.params.id }, data);

  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "ویژگی با موفقیت تغییر یافت",
  });
};

/* delete feature */
exports.deleteFeature = async (req, res) => {
  const feature = await Feature.findByIdAndDelete(req.params.id);
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "feature deleted successfully",
  });
};
