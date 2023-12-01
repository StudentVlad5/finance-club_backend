const { ValidationError, dataFilterObj } = require('../../helpers');
const { Packages } = require('../../models');
let path = require('path');

const updatePackage = async (req, res, next) => {
  const { id } = req.params;
  const updatedData = dataFilterObj(req.body);

  if (!updatedData.features) {
    updatedData.features = [];
  }

  console.log('UPDATE features', updatedData);

  try {
    const resUpdate = await Packages.findByIdAndUpdate({ _id: id }, updatedData, {
      new: true,
    });
    const newResponse = dataFilterObj(resUpdate);
    return res.status(201).json(newResponse._doc);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updatePackage;
