/* external imports */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const baseSchema = require("./baseSchema.model");
const Counter = require("./counter");

const featureTypeSchema = new mongoose.Schema(
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
    creator: {
      type: ObjectId,
      ref: "Admin",
      required: [true, "شناسه نویسنده الزامی است"]
    },

    featureTypeId: {
      type: Number
    },

    ...baseSchema.obj
  },
  { timestamps: true }
);

featureTypeSchema.pre("save", async function (next) {
  try {
    if (this.isNew && (this.featureTypeId === undefined || this.featureTypeId === null)) {
      const counter = await Counter.findOneAndUpdate(
        { name: "featureTypeId" },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );
      this.featureTypeId = counter.seq;
    }
    next();
  } catch (error) {
    next(error);
  }
});

const featureType = mongoose.model("featureType", featureTypeSchema);

module.exports = featureType;

