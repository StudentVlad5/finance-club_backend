const Joi = require('joi');
const mongoose = require('mongoose');
require('mongoose-type-email');
require('mongoose-type-url');

const eventsValidationSchema = Joi.object({
  date: Joi.date().required(),
  time: Joi.string().min(1).max(32).required(),
  duration: Joi.string().min(1).max(32).required(),
  location: Joi.string().min(1).max(132).required(),
  title: Joi.string().min(1).max(90).required(),
  description: Joi.string().min(1).max(9999).required(),
  plan: Joi.array().required(),
  speakers: Joi.array().required(),
  moderator: Joi.string().min(3).max(32).required(),
  packages: Joi.array().required(),
  image: Joi.string().min(1).max(90),
});

const EventsSchema = new mongoose.Schema(
  {
    en: {
      date: {
        type: Date,
        required: [true, 'Set date'],
      },
      time: {
        type: String,
        required: [true, 'Set time'],
      },
      duration: {
        type: String,
        required: [true, 'Set duration'],
      },
      location: {
        type: String,
        required: [true, 'Set location'],
      },
      title: {
        type: String,
        required: [true, 'Set title'],
      },
      description: {
        type: String,
        required: [true, 'Set description'],
      },
      plan: {
        type: Array,
        required: [true, 'Set plan'],
        default: [],
      },
      speakers: {
        type: Array,
        required: [true, 'Set speakers'],
        default: [],
      },
      moderator: {
        type: String,
        required: [true, 'Set moderator'],
      },
      packages: {
        type: Array,
        required: [true, 'Set packages'],
      },
      image: {
        type: String,
        default: '',
      },
    },
    ua: {
      date: {
        type: Date,
        required: [true, 'Set date'],
      },
      time: {
        type: String,
        required: [true, 'Set time'],
      },
      duration: {
        type: String,
        required: [true, 'Set duration'],
      },
      location: {
        type: String,
        required: [true, 'Set location'],
      },
      title: {
        type: String,
        required: [true, 'Set title'],
      },
      description: {
        type: String,
        required: [true, 'Set description'],
      },
      plan: {
        type: Array,
        required: [true, 'Set plan'],
        default: [],
      },
      speakers: {
        type: Array,
        required: [true, 'Set speakers'],
        default: [],
      },
      moderator: {
        type: String,
        required: [true, 'Set moderator'],
      },
      packages: {
        type: Array,
        required: [true, 'Set packages'],
      },
      image: {
        type: String,
        default: '',
      },
    },
    de: {
      date: {
        type: Date,
        required: [true, 'Set date'],
      },
      time: {
        type: String,
        required: [true, 'Set time'],
      },
      duration: {
        type: String,
        required: [true, 'Set duration'],
      },
      location: {
        type: String,
        required: [true, 'Set location'],
      },
      title: {
        type: String,
        required: [true, 'Set title'],
      },
      description: {
        type: String,
        required: [true, 'Set description'],
      },
      plan: {
        type: Array,
        required: [true, 'Set plan'],
        default: [],
      },
      speakers: {
        type: Array,
        required: [true, 'Set speakers'],
        default: [],
      },
      moderator: {
        type: String,
        required: [true, 'Set moderator'],
      },
      packages: {
        type: Array,
        required: [true, 'Set packages'],
      },
      image: {
        type: String,
        default: '',
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Events = mongoose.model('events', EventsSchema);

module.exports = { Events, eventsValidationSchema };
