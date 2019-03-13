// Initializes the `restaurant` service on path `/restaurant`
const createService = require('feathers-nedb');
const createModel = require('../../models/restaurant.model');
const hooks = require('./restaurant.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/restaurant', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('restaurant');

  service.hooks(hooks);
};
