const Joi = require("joi");
const mongoose = require("mongoose");
require("mongoose-type-email");
require("mongoose-type-url");

const packagesValidationSchema = Joi.object({
  title: Joi.string().min(3).max(32).required(),
  price: Joi.string().min(3).max(32).required(),
  content: Joi.string().min(1).max(999).required(),
});

const packagesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Set title of the package"],
    },
    price: {
      type: String,
      required: [true, "Set price of the package"],
    },
    content: {
      type: String,
      required: [true, "Set content of the the package"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Packages = mongoose.model("packages", packagesSchema);

module.exports = { Packages, packagesValidationSchema };
