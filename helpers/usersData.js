const userMainField = [
  '_id',
  'name',
  'surname',
  'email',
  'password',
  'location',
  'phone',
  'birthday',
  'avatar',
  'packages',
  'company',
  'position',
  'status',
  'role',
  // 'authToken',
];

const userFullField = [
  '_id',
  'name',
  'surname',
  'email',
  'password',
  'location',
  'phone',
  'birthday',
  'avatar',
  'packages',
  'company',
  'position',
  'status',
  'role',
];

const userFieldReceivedFromFront = [
  'name',
  'surname',
  'email',
  'password',
  'phone',
  'birthday',
  'avatar',
  'password',
  'company',
  'position',
  'packages',
  'status',
  'role',
];

const requiredSignUpFields = [
  'name',
  'surname',
  'email',
  'phone',
  'company',
  'position',
  'packages',
  'status',
  'role',
];

module.exports = {
  userMainField,
  userFullField,
  userFieldReceivedFromFront,
  requiredSignUpFields,
};
