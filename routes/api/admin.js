const express = require('express');
const { events } = require('../../controllers');

const { ctrlWrapper, authMiddleware, upload } = require('../../middleWares');

const router = express.Router();

router.get('/', ctrlWrapper(authMiddleware), ctrlWrapper(events.getEvents));

router.post(
  '/create',
  ctrlWrapper(authMiddleware),
  upload.single('images'),
  ctrlWrapper(events.createEvent)
);

router.get('/:id', ctrlWrapper(authMiddleware), ctrlWrapper(events.getById));

router.delete(
  '/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(events.deleteEvent)
);

router.patch(
  '/:id',
  ctrlWrapper(authMiddleware),
  upload.single('images'),
  ctrlWrapper(events.updateEvent)
);

module.exports = routerAdmin = router;
