const { ValidationError } = require("../../helpers");
const { Events } = require("../../models");


const createEvent = async (req, res, next) => {
  try {
    const fullData = { ...req.body };
    console.log("fullData", fullData);
    const _id = fullData.basket._id;
    const resCreate = await Events.create(fullData);
    return res.status(201).json(resCreate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createEvent;
