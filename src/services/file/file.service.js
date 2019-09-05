// Initializes the `file` service on path `/file`
const hooks = require('./file.hooks');

const createService = require('feathers-blob');
const fs = require('fs-blob-store');
const multer = require('multer');

const multipartMiddleware = multer();
const blobStorage = fs(`${__dirname}/../../../uploads`);

module.exports = function () {
  const app = this;

  const options = {
    Model: blobStorage
  };

  // Initialize our service with any options it requires
  app.use(
    '/file',
    multipartMiddleware.single('uri'),
    (req, res, next) => {
      req.feathers.file = req.file;
      next();
    },
    createService(options)
  );

  // Get our initialized service so that we can register hooks
  const service = app.service('file');

  service.hooks(hooks);
};
