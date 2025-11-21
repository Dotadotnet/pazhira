

/* internal import */
const FeatureType = require("../models/featureType.model");
const Product = require("../models/product.model");
const User = require("../models/user.model");
const remove = require("../utils/remove.util");

/* add new feature type */
exports.addFeatureType = async (req, res) => {
  try {
    const { nameFa, nameEn } = req.body;


    const nameEnExite = await FeatureType.findOne({ nameEn: nameEn })

    if (nameEnExite) {
      return res.status(500).json({
        acknowledgement: false,
        message: "Server Error",
        description: "این شناسه قبلا اضافه شده است",
      });
    }

    const featureType = new FeatureType({
      nameFa: nameFa,
      nameEn: nameEn,
      creator: req.admin._id,
    });

    const result = await featureType.save();

    return res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "نوع ویژگی با موفقیت ایجاد شد",
      data: result,
    });
  } catch (error) {
    console.error("Error in add Feature Type:", error);
    return res.status(500).json({
      acknowledgement: false,
      message: "Internal Server Error",
      description: error.message || "مشکلی در ایجاد نوع ویژگی پیش آمد",
    });
  }
};
;

/* get all feature types */
exports.getFeatureTypes = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;

    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 10;
    const skip = (pageNum - 1) * limitNum;

    const query = {};
    if (search) {
      query.title = { $regex: search, $options: "i" }; // سرچ بر اساس عنوان
    }

    const featureTypes = await FeatureType.find(query)
      .skip(skip)
      .limit(limitNum)
      .sort({ createdAt: -1 })
      .populate({
        path: "creator",
        select: "name avatar"
      });

    const total = await FeatureType.countDocuments(query);

    return res.status(200).json({
      acknowledgement: true,
      message: "Ok",
      description: "نوع ویژگی ها با موفقیت دریافت شدند",
      data: featureTypes,
      total,

    });
  } catch (error) {
    console.error("Error in get feature types:", error);
    return res.status(500).json({
      acknowledgement: false,
      message: "خطا در دریافت نوع ویژگی ها",
      description: error.message || error.toString()
    });
  }
};

/* get a feature type */
exports.getFeatureType = async (req, res) => {
  const featureType = await FeatureType.findById(req.params.id);
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "feature type fetched successfully",
    data: featureType,
  });
};

/* update feature type */
exports.updateFeatureType = async (req, res) => {
  let updatedFeatureType = req.body;
  await FeatureType.findByIdAndUpdate(req.params.id, updatedFeatureType);
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "feature type updated successfully",
  });
};

/* delete feature type */
exports.deleteFeatureType = async (req, res) => {
  const featureType = await FeatureType.findByIdAndDelete(req.params.id);
  res.status(200).json({
    acknowledgement: true,
    message: "Ok",
    description: "feature type deleted successfully",
  });
};
