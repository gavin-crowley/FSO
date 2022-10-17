const mongoose = require('mongoose');

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const url = `mongodb+srv://gavxro:${password}@cluster0.tlocmku.mongodb.net/phoneBook?retryWrites=true&w=majority`;

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  id: Number,
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personSchema);

if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    console.log('phonebook:')
    result.forEach((person) => {
      console.log(person.name, person.number);
    });
    mongoose.connection.close();
  });
} else if (process.argv.length === 5) {
  mongoose
    .connect(url)
    .then((result) => {
      console.log('connected');

      const person = new Person({
        id: 1,
        name: name,
        number: number,
      });

      return person.save();
    })
    .then(() => {
      console.log('person saved!');
      return mongoose.connection.close();
    })
    .catch((err) => console.log(err));
}
