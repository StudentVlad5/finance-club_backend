const express = require('express');
const { auth: ctrl } = require('../../controllers');
const {
  ctrlWrapper,
  authMiddleware,
  validation,
  validateId,
} = require('../../middleWares');
const { upload } = require('../../middleWares/uploadMiddleware');

const {
  userValidationSchema,
  userUpdateValidationSchema,
  userRegistationSchema,
} = require('../../models');

const router = express.Router();

router.post('/login', ctrlWrapper(ctrl.signin));
router.post(
  '/signup',
  validation(userRegistationSchema),
  ctrlWrapper(ctrl.signup)
);

router.post('/logout', ctrlWrapper(authMiddleware), ctrlWrapper(ctrl.logout));
router.post('/forgotPassword', ctrlWrapper(ctrl.forgotPassword));
router.post('/changePassword', ctrlWrapper(ctrl.changePassword));
// router.post(
//   '/events/:id',
//   ctrlWrapper(authMiddleware),
//   validateId,
//   ctrlWrapper(ctrl.addFavorite)
// );
// router.delete(
//   '/packages/:id',
//   ctrlWrapper(authMiddleware),
//   validateId,
//   ctrlWrapper(ctrl.deleteFavorite)
// );
// router.post(
//   '/catalog/:id',
//   ctrlWrapper(authMiddleware),
//   validateId,
//   ctrlWrapper(ctrl.getFavorites)
// );

router.post('/', ctrlWrapper(authMiddleware), ctrlWrapper(ctrl.current));

router.patch(
  '/user/:id',
  ctrlWrapper(authMiddleware),
  upload.single('avatar'),
  validation(userUpdateValidationSchema),
  ctrlWrapper(ctrl.update)
);

module.exports = routerAuth = router;
