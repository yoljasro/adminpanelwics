const mongoose = require('mongoose');

const ProjectLogoSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  nameuz:{
    type: String,
  },
  nameru:{
    type: String
  },
  nameeng: {
    type: String
  },
  siteLink:{
    type: String
  },
  certificate:{
    type: String
  }
});

const ProjectLogo = mongoose.model('ProjectLogo', ProjectLogoSchema);

module.exports = { ProjectLogoSchema, ProjectLogo };