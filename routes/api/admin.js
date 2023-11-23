const express = require('express');
const { events, users } = require('../../controllers');
const {
  userUpdateValidationSchema,
  eventsValidationSchema,
} = require('../../models');

const {
  ctrlWrapper,
  authMiddleware,
  validation,
  upload,
} = require('../../middleWares');

const router = express.Router();

router.get(
  '/events',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(events.getEvents)
);

router.post(
  '/events/create',
  ctrlWrapper(authMiddleware),

  upload.single('image'),
  validation(eventsValidationSchema),
  ctrlWrapper(events.createEvent)
);

router.get(
  '/events/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(events.getById)
);

router.delete(
  '/events/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(events.deleteEvent)
);

router.patch(
  '/events/:id',
  ctrlWrapper(authMiddleware),
  upload.single('image'),
  validation(eventsValidationSchema),
  ctrlWrapper(events.updateEvent)
);

router.get('/users', ctrlWrapper(authMiddleware), ctrlWrapper(users.getUsers));

router.post(
  '/users/create',
  ctrlWrapper(authMiddleware),
  upload.single('avatar'),
  ctrlWrapper(users.createUser)
);

router.get(
  '/users/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(users.getUserById)
);

router.delete(
  '/users/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(users.deleteUsers)
);

router.patch(
  '/users/:id',
  ctrlWrapper(authMiddleware),
  upload.single('avatar'),
  validation(userUpdateValidationSchema),
  ctrlWrapper(users.updateUser)
);

module.exports = routerAdmin = router;
