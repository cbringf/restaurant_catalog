const users = require('./users/users.service.js');
const restaurant = require('./restaurant/restaurant.service.js');
const file = require('./file/file.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(restaurant);
  app.configure(file);
};
