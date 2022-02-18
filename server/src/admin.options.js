const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const AdminCompany = require('./companies/company.admin');
const ImageAdd = require('./companies/Image.admin');
const Gallery = require('./companies/gallery.admin')
/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [AdminCompany, ImageAdd, Gallery],
  
};

module.exports = options;