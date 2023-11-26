const userMainField = [
  '_id',
  'name',
  'surname',
  'email',
  // 'password',
  'phone',
  'company',
  'position',
  'birthday',
  'avatar',
  'authToken',
  'packages',
  'role',
  'status',
  'events'
];

const userFullField = [
  '_id',
  'name',
  'surname',
  'email',
  // 'password',
  'location',
  'phone',
  'company',
  'position',
  'birthday',
  'avatar',
  'authToken',
  'packages',
  'role',
  'status',
  'events'
];

const userFieldReceivedFromFront = [
  'userName',
  'surname',
  'email',
  'location',
  'phone',
  'birthday',
  'avatar',
  'password',
  'address',
  'delivery',
  'id',
];

const requiredSignUpFields = [
  "name", 
  "surname", 
  "email", 
  "phone", 
  "company", 
  "position", 
  "packages"
];

module.exports = {
  userMainField,
  userFullField,
  userFieldReceivedFromFront,
  requiredSignUpFields,
};
