/* eslint-disable*/


const express = require('express');
const { default: AdminBro } = require('admin-bro');
const mongoose = require('mongoose');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');
const { ImageAdd } = require('./companies/Image.add')


const app = express();
const port = 3001;
mongoose.set('useFindAndModify', false);
const run = async () => {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.wax8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
   {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=> console.log('MongoDb connected'))
  .catch(error => console.log(error));
  
  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);
  app.use(admin.options.rootPath, router);
  app.use('/uploads', express.static('uploads'));
  app.get("/date", function(req, res){     
    ImageAdd.find({}, function(err, users){
  
        if(err) return console.log(err);
        arr=[]
        for(let item of users) {
          arr.push(item)
        }
        let arr_3 = arr.reduce((result, item) => {
          return result.includes(item) ? result : [... result, item];
      }, []);
        res.send(arr_3)
    });
  });
  
  app.listen(port, () => console.log(
    `Example app listening at http://localhost:${port}`,
  ));
  
};


module.exports = run;
