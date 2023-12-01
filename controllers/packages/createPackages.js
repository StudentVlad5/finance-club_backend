const { ValidationError, dataFilterObj } = require("../../helpers");
const { Packages } = require("../../models");


const createPackages = async (req, res, next) => {
  const newData = dataFilterObj(req.body);
  console.log('CREATE Package:', newData);

  try {
    const resCreate = await Packages.create(newData);
    return res.status(201).json(resCreate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createPackages;
