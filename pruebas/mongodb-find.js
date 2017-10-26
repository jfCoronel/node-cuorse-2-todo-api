const {MongoClient, ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if (err){
    console.log('No se ha podido conectar con el Servidor MongoDB');
    return;
  } 
  console.log('Conectado con el servidor de MongoBD');

  // db.collection('Todos').find({_id: new ObjectID('59f1aaec7d108518f79e210a')}).toArray().then( (docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('No puede obtener las tareas', err);
  // });  

  // db.collection('Todos').find().count().then( (n) => {
  //   console.log(`Nº de tareas: ${n}`);
  // }, (err) => {
  //   console.log('No puede obtener las tareas', err);
  // });  

  db.collection('Users').find({name: 'Juan F. Coronel'}).toArray().then( (docs) => {
    console.log('Users:');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    console.log('No se puede obtener los usuarios', err);
  });  

  //db.close();
});