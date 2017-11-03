
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('No se ha podido conectar con el Servidor MongoDB');
    return;
  }
  console.log('Conectado con el servidor de MongoBD');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Comer el almuerzo'}).then( (result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'Comer el almuerzo' }).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  //   console.log(result);
  // });

  //db.collection('Users').deleteMany({name: 'Juan F.'});

  // db.collection('Users').findOneAndDelete(
  //   {_id: new ObjectID('59fc933d106afb03c1c0d44c')}).then((result) => {
  //     console.log(JSON.stringify(result,undefined,2));
  //   });

  //db.close();
});