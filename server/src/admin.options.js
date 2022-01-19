const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const AdminCompany = require('./companies/company.admin');
const ImageAdd = require('./companies/Image.admin');
/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [AdminCompany, ImageAdd],
};

module.exports = options;
