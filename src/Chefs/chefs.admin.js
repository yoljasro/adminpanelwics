const AdminBro = require('admin-bro');
const { Chefs } = require('./chefs.entity');

const {
  after: passwordAfterHook,
  before: passwordBeforeHook,
} = require('./actions/password.hook');

const {
  after: uploadAfterHook,
  before: uploadBeforeHook,
} = require('./actions/upload-image.hook');

/** @type {AdminBro.ResourceOptions} */
const options = {
  properties: {
    image: {
      components: {
        edit: AdminBro.bundle('./components/upload-image.edit.tsx'),
        list: AdminBro.bundle('./components/upload-image.list.tsx'),
      },
    },
    certificate: {
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
      after: async (response, request, context) => {
        const modifiedResponse = await passwordAfterHook(response, request, context);
        return uploadAfterHook(modifiedResponse, request, context);
      },
      before: async (request, context) => {
        const modifiedRequest = await passwordBeforeHook(request, context);
        return uploadBeforeHook(modifiedRequest, context);
      },
    },
    show: {
      isVisible: false,
    },
  },
  navigation: {
    icon: 'Manufacture',
  },
};

module.exports = {
  options,
  resource: Chefs,
};
