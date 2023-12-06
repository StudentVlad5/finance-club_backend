const { ValidationError, dataFilterObj } = require('../../helpers');
const { Events } = require('../../models');
let path = require('path');

const createEvent = async (req, res, next) => {
  // const newData = dataFilterObj(req.body);
  const {
    dateEn,
    timeEn,
    durationEn,
    locationEn,
    titleEn,
    descriptionEn,
    planEn,
    speakersEn,
    moderatorEn,
    packagesEn,
    imageEn,

    dateUa,
    timeUa,
    durationUa,
    locationUa,
    titleUa,
    descriptionUa,
    planUa,
    speakersUa,
    moderatorUa,
    packagesUa,
    imageUa,

    dateDe,
    timeDe,
    durationDe,
    locationDe,
    titleDe,
    descriptionDe,
    planDe,
    speakersDe,
    moderatorDe,
    packagesDe,
    imageDe,
  } = req.body;

  const newData = {
    en: {
      date: dateEn,
      time: timeEn,
      duration: durationEn,
      location: locationEn,
      title: titleEn,
      description: descriptionEn,
      plan: planEn,
      speakers: speakersEn,
      moderator: moderatorEn,
      packages: packagesEn,
      image: imageEn,
    },
    ua: {
      date: dateUa,
      time: timeUa,
      duration: durationUa,
      location: locationUa,
      title: titleUa,
      description: descriptionUa,
      plan: planUa,
      speakers: speakersUa,
      moderator: moderatorUa,
      packages: packagesUa,
      image: imageUa,
    },
    de: {
      date: dateDe,
      time: timeDe,
      duration: durationDe,
      location: locationDe,
      title: titleDe,
      description: descriptionDe,
      plan: planDe,
      speakers: speakersDe,
      moderator: moderatorDe,
      packages: packagesDe,
      image: imageDe,
    },
  };

  if (req.file?.path) {
    newData.imageEn = path.basename(req.file?.path);
    newData.imageUa = path.basename(req.file?.path);
    newData.imageDe = path.basename(req.file?.path);
  } else {
    newData.imageEn = path.basename('');
    newData.imageUa = path.basename('');
    newData.imageDe = path.basename('');
  }

  console.log('CREATE EVENT:', newData);

  try {
    const resCreate = await Events.create(newData);
    return res.status(201).json(resCreate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createEvent;
