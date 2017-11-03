const {MongoClient, ObjectID}  = require('mongodb');
// Para arrancar Mongo ir al directorio bin y ejecutar:
// ./mongod --dbpath ../mongo-data

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if (err){
    console.log('No se ha podido conectar con el Servidor MongoDB');
    return;
  } 
  console.log('Conectado con el servidor de MongoBD');
  
  // db.collection('Todos').insertOne({
  //   text: 'Algo que hacer',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('No pude insertar la tarea', err);
  //   }

  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Juan F. Coronel',
  //   age: 48,
  //   location: 'Sevilla'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('No pude insertar el usuario', err);
  //   }

  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.close();
});