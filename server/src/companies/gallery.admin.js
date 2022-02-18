/* eslint-disable indent */
const AdminBro = require('admin-bro');
const { Gallery } = require('./gallery.add');

const {
  after: passwordAfterHook,
  before: passwordBeforeHook,
} = require('../actions/password.hook');

const {
  after: uploadAfterHook,
  before: uploadBeforeHook,
} = require('../actions/gallery-image.hook');


/** @type {AdminBro.ResourceOptions} */
const options = {
  properties: {
    profilePhotoLocation: {
      isVisible: true,
    },
    Date: {
      isVisible: true,
    },
    uploadImage: {
      components: {
        edit: AdminBro.bundle('./components/upload-image.edit.tsx'),
        list: AdminBro.bundle('./components/upload-image.list.tsx'),
      },
    },
  },
  actions: {
    new: {
      after: async (response, request, context) => {
        const modifiedResponse = await passwordAfterHook(response, request, context);
        return uploadAfterHook(modifiedResponse, request, context);
      },
      before: async (request, context) => {
        const modifiedRequest = await passwordBeforeHook(request, context);
        return uploadBeforeHook(modifiedRequest, context);
      },
    },
    edit: {
        isVisible: false,
      },
    },
  };

module.exports = {
  options,
  resource: Gallery,
};
