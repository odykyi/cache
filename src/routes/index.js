const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const EntityController = require('../controllers/entity.controller');
const EntityModel = require('../models/entity.model')(mongoose);
mongoose.connect('mongodb://localhost:27017/usersdb');

module.exports = async (app) => {
  const entity = new EntityModel({
    key: 'Bill',
    value: 122,
  });

  const createdEntity = await entity.save();
  console.log('createdEntity', createdEntity);

  app.get('/entities/:key', EntityController.find);
  app.get('/entities', EntityController.findAll);


  // });
  //
  //
  // app.post('/register', user.register);
  // app.post('/login', user.login);
  //
  // app.post('/contacts/list', verifyToken,
  //   contactsController.createList);
  //
  // app.get('/contacts/listByNumber', verifyToken,
  //   contactsController.findAllByNumber);
  //
  // app.get('/contacts/listByName', verifyToken,
  //   contactsController.findAllByName);
  //
  // // app.post('/contacts', verifyToken, contactsController.create);
  // // Отримання списку імен по номеру
  // // Отримання списку номерів з іменами по імені
  //
  // app.use((req, res) => {
  //   res
  //     .status(404)
  //     .send('Sorry can\'t find that!');
  // });
  //
  // app.get('*', (req, res) => res
  //   .status(200)
  //   .send({
  //     message: 'Welcome to the beginning of nothingness.',
  //   }));
};

