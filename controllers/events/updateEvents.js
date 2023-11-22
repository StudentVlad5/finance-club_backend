const { ValidationError, dataFilterObj } = require('../../helpers');
const { Events } = require('../../models');
let path = require('path');

const updateEvent = async (req, res, next) => {
  const { id } = req.params;
  const updatedData = dataFilterObj(req.body);

  if (req.file?.path) {
    updatedData.image = path.basename(req.file?.path);
  }
  if (!updatedData.plan) {
    updatedData.plan = [];
  }
  if (!updatedData.speakers) {
    updatedData.speakers = [];
  }
  if (!updatedData.packages) {
    updatedData.packages = [];
  }

  console.log('UPDATE EVENT', updatedData);

  try {
    const resUpdate = await Events.findByIdAndUpdate({ _id: id }, updatedData, {
      new: true,
    });
    const newResponse = dataFilterObj(resUpdate);
    return res.status(201).json(newResponse._doc);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateEvent;
