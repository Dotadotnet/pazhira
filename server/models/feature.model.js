/* external imports */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const baseSchema = require("./baseSchema.model");
const Counter = require("./counter");

const featureSchema = new mongoose.Schema(
  {
    nameFa: {
      type: String,
      trim: true,
    },
    nameEn: {
      type: String,
      trim: true,
      unique: true
    },
    
    icon: {
      type: ObjectId,
      ref: "Icon",
      required: [true, "آیکون فیچر لازم است"]
    },
    type: {
      type: ObjectId,
      ref: "featureType",
      required: [true, "نوع فیچر لازم است"]
    },
    description: {
      type: String,
      required: [true, "لطفاً توضیحات فیچر را وارد کنید"],
      trim: true,
      maxLength: [500, "توضیحات شما باید حداکثر ۵۰۰ کاراکتر باشد"]
    },
    creator: {
      type: ObjectId,
      ref: "Admin",
      required: [true, "شناسه نویسنده الزامی است"]
    },
    data: mongoose.Schema.Types.Mixed,
    creator: {
      type: ObjectId,
      ref: "Admin",
      required: [true, "شناسه نویسنده الزامی است"]
    },

    featureId: {
      type: Number
    },

    ...baseSchema.obj
  },
  { timestamps: true }
);

featureSchema.pre("save", async function (next) {
  try {
    if (this.isNew && (this.featureId === undefined || this.featureId === null)) {
      const counter = await Counter.findOneAndUpdate(
        { name: "featureId" },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );
      this.featureId = counter.seq;
    }
    next();
  } catch (error) {
    next(error);
  }
});

const Feature = mongoose.model("Feature", featureSchema);

module.exports = Feature;

