/* eslint-disable */

const mongoose = require('mongoose');
const express = require("express");
const app = express();
const GallerySchema = new mongoose.Schema({
  profilePhotoLocation: {
    type: String,
  },
  Date: {
    type: String,
  },

});

const Gallery = mongoose.model("gallery", GallerySchema);

module.exports = { GallerySchema, Gallery};
