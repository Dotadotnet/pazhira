const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const Counter = require("./counter");
const baseSchema = require("./baseSchema.model");
const { translateToEnglish, generateSlug } = require("../utils/seoUtils");

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: Number,
      unique: true
    },
    title: {
      type: String,
      required: true
    },
    title_en: {
      type: String
    },
    description: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    campaignTitle: { type: String },
    campaignState: { type: String },
    url: {
      type: String
    },
    isSpecial: {
      typre: Boolean
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true
    },
    features: [
      {
        feature: { type: ObjectId, ref: "Feature", },
        value: { type: mongoose.Schema.Types.Mixed }
      }
    ],
    brand: {
      type: ObjectId,
      ref: "Brand",
      required: true
    },
    thumbnail:
    {
      url: { type: String },
      public_id: { type: String }
    },
    gallery: [
      {
        url: { type: String },
        public_id: { type: String }
      }
    ],
    variations: [
      {
        price: {
          type: Number,
          required: true,
          min: 0,
        },
        offer: {
          type: Number,
          default: 0,
          min: 0,
          max: 100
        },
        stock: {
          type: Number,
          min: 0
        },
        lowStockThreshold: {
          type: Number,
          min: 0
        },
        title: {
          type: String
        },
        warranty: {
          type: ObjectId,
          ref: "Warranty",
          required: false,
          default: null
        },
        insurance: {
          type: ObjectId,
          ref: "Insurance",
          required: false,
          default: null
        },
        color: {
          type: ObjectId,
          ref: "Color",
          required: false,
          default: null
        },
        features: [
          {
            feature: { type: ObjectId, ref: "Feature", },
            value: { type: mongoose.Schema.Types.Mixed }
          }
        ]
      }
    ],
    comments: [
      {
        type: ObjectId,
        ref: "Comment"
      }
    ],

    rating: {
      rate: { type: Number, required: true },
      count: { type: Number, required: true }
    },

    tags: [
      {
        type: ObjectId,
        ref: "Tag",
        required: [true, "تگ دسته بندی الزامی است"]
      }
    ],

    faqs: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true }
      }
    ],

    creator: {
      type: ObjectId,
      ref: "Admin"
    },
    ...baseSchema.obj
  },
  { timestamps: true }
);

productSchema.pre("save", async function (next) {
  try {
    if (!this.isNew || this.productId) return next();

    const counter = await Counter.findOneAndUpdate(
      { name: "productId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.productId = counter.seq;

    if (!this.title_en && this.title) {
      this.title_en = await translateToEnglish(this.title);
    }
    if (!this.url) {
      this.url = process.env.NEXT_PUBLIC_CLIENT_URL + "/" + this.productId + "/" + this.title_en.replaceAll(" ", "-");
    }

    next();
  } catch (error) {
    next(error);
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
