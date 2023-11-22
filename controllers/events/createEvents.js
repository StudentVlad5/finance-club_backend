const { ValidationError, dataFilterObj } = require('../../helpers');
const { Events } = require('../../models');
let path = require('path');

const createEvent = async (req, res, next) => {
  const newData = dataFilterObj(req.body);
  req.file?.path
    ? (newData.image = path.basename(req.file?.path))
    : (newData.image = path.basename(''));

  console.log('CREATE EVENT:', newData);

  try {
    const resCreate = await Events.create(newData);
    return res.status(201).json(resCreate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createEvent;
