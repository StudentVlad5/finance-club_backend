const Joi = require('joi');
const mongoose = require('mongoose');
require('mongoose-type-email');
require('mongoose-type-url');

const eventsValidationSchema = Joi.object({
  dateEn: Joi.date().required(),
  timeEn: Joi.string().min(1).max(32).required(),
  durationEn: Joi.string().min(1).max(32).required(),
  locationEn: Joi.string().min(1).max(132).required(),
  titleEn: Joi.string().min(1).max(90).required(),
  descriptionEn: Joi.string().min(1).max(9999).required(),
  planEn: Joi.array(),
  speakersEn: Joi.array().required(),
  moderatorEn: Joi.string(),
  packagesEn: Joi.array().required(),
  imageEn: Joi.string().uri(),

  dateUa: Joi.date().required(),
  timeUa: Joi.string().min(1).max(32).required(),
  durationUa: Joi.string().min(1).max(32).required(),
  locationUa: Joi.string().min(1).max(132).required(),
  titleUa: Joi.string().min(1).max(90).required(),
  descriptionUa: Joi.string().min(1).max(9999).required(),
  planUa: Joi.array(),
  speakersUa: Joi.array().required(),
  moderatorUa: Joi.string(),
  packagesUa: Joi.array().required(),
  imageUa: Joi.string().uri(),

  dateDe: Joi.date().required(),
  timeDe: Joi.string().min(1).max(32).required(),
  durationDe: Joi.string().min(1).max(32).required(),
  locationDe: Joi.string().min(1).max(132).required(),
  titleDe: Joi.string().min(1).max(90).required(),
  descriptionDe: Joi.string().min(1).max(9999).required(),
  planDe: Joi.array(),
  speakersDe: Joi.array().required(),
  moderatorDe: Joi.string(),
  packagesDe: Joi.array().required(),
  imageDe: Joi.string().uri(),
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
        default: [],
      },
      speakers: {
        type: Array,
        required: [true, 'Set speakers'],
        default: [],
      },
      moderator: {
        type: String,
      },
      packages: {
        type: Array,
        required: [true, 'Set packages'],
        default: [],
      },
      image: {
        type: mongoose.SchemaTypes.Url,
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
        default: [],
      },
      speakers: {
        type: Array,
        required: [true, 'Set speakers'],
        default: [],
      },
      moderator: {
        type: String,
      },
      packages: {
        type: Array,
        required: [true, 'Set packages'],
        default: [],
      },
      image: {
        type: mongoose.SchemaTypes.Url,
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
        default: [],
      },
      speakers: {
        type: Array,
        required: [true, 'Set speakers'],
        default: [],
      },
      moderator: {
        type: String,
      },
      packages: {
        type: Array,
        required: [true, 'Set packages'],
        default: [],
      },
      image: {
        type: mongoose.SchemaTypes.Url,
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
