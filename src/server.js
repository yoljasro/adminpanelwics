const express = require('express');
const { default: AdminBro } = require('admin-bro');
const mongoose = require('mongoose');
const cors = require('cors');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');

const app = express();
const port = 5000;
//controllers 
const { createCompany, getAllCompanies } = require("./controllers/company.controller")
const {createClient , getAllClients} = require("./controllers/client.controller")
const {createMotto , getAllMotto} = require("./controllers/motto.controller")
const {createProjectLogo  , getAllProjectLogos} = require("./controllers/projectLogo.controller")
const {createCommand , getAllCommand} = require("./controllers/command.controller")
const {createForm , getAllForm} = require("./controllers/form.controller")
const {createNews , getAllNews} = require("./controllers/news.controller");
const { createRestaurant , getAllRestaurants } = require('./controllers/restaurants.controller');
const {createChefs , getAllChefs} = require("./controllers/chefs.controller")
const {createMembers , getAllMembers}= require("./controllers/members.controller")
const {createGid   , getAllGid} = require("./controllers/gid.controller")

app.use(cors());


const run = async () => {
  try {
    await mongoose.connect('mongodb+srv://saidaliyevjasur450:bmA6T2liVkf6BTFg@wics.z1i78bv.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }); 

    console.log('Connected to MongoDB database');

  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }



  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);

  app.use(admin.options.rootPath, router);
  app.use(express.json());
  app.use(express.json({ limit: '100mb' }));
  app.use(express.urlencoded({ limit: '100mb', extended: true }));

  app.use('/uploads', express.static('uploads'));

  app.get("/", (req, res) => {
    res.send("hello world. I'm JasurBek");
  });
  // form
  app.post("/form" , createForm)
  app.get("/form" , getAllForm)
  // companies
  app.post("/company", createCompany)
  app.get("/company", getAllCompanies)
  // clients
  app.post("/clients" , createClient)
  app.get("/clients" , getAllClients)

  // motto
  app.post("/motto" , createMotto)
  app.get("/motto" , getAllMotto)
  // projectLogos
  app.post("/projectlogos" , createProjectLogo)
  app.get("/projectlogos" , getAllProjectLogos)

  // news
  app.post("/news" , createNews)
  app.get("/news" , getAllNews)
  //restaurants
  app.post("/restaurants" , createRestaurant)
  app.get("/restaurants" , getAllRestaurants)
  // commands
  //chefs
  app.post("/chefs" , createChefs)
  app.get("/chefs" , getAllChefs)

  //members
  app.post("/members" , createMembers)
  app.get("/members" , getAllMembers)
  // app.post("/command " , createCommand)
  // app.get("/command" , getAllCommand)
  // gid
  app.post("/gid" , createGid)
  app.get("/gid", getAllGid)

  app.listen(port, () => console.log(
    `Example app listening at http://localhost:${port}`,
  ));
};


module.exports = run;
