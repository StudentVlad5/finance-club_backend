const {
  Users,
  userValidationSchema,
  userUpdateValidationSchema,
} = require("./users");
const { Packages, packagesValidationSchema } = require("./package");
const { Events, eventsValidationSchema } = require("./events");

module.exports = {
  Users,
  userValidationSchema,
  userUpdateValidationSchema,
  Packages, 
  packagesValidationSchema,
  Events,
  eventsValidationSchema
};
