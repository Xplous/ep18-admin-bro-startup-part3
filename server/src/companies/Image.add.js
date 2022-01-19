/* eslint-disable */

const mongoose = require('mongoose');
const express = require("express");
const app = express();
const ImageSchema = new mongoose.Schema({
  profilePhotoLocation: {
    type: String,
  },
  Date: {
    type: String,
  },

});

const ImageAdd = mongoose.model("imageadds", ImageSchema);

module.exports = { ImageSchema, ImageAdd};
