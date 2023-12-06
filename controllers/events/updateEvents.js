const { ValidationError, dataFilterObj } = require('../../helpers');
const { Events } = require('../../models');
let path = require('path');

const updateEvent = async (req, res, next) => {
  const { id } = req.params;
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

  // const updatedData = dataFilterObj(req.body);
  const updatedData = {
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
    updatedData.imageEn = path.basename(req.file?.path);
    updatedData.imageUa = path.basename(req.file?.path);
    updatedData.imageDe = path.basename(req.file?.path);
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
