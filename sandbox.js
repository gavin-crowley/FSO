// const arto = {
//     name: 'Arto Hellas',
//     age: 35,
//     education: 'PhD',
//     greet: function() {
//       console.log('hello, my name is ' + this.name)
//     },
//     doAddition: function(a, b) {
//         console.log(a+b);
//     }
//   }

//   arto.doAddition(1, 4)        // 5 is printed

//   const referenceToAddition = arto.doAddition
//   referenceToAddition(10, 15)

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Ia',
    number: '39-23-6423122',
  },
];

const body = 'Ia';

// persons.forEach(person => JSON.stringify(person.name).includes(JSON.stringify(body.name)))

// console.log(persons)
const res = persons.forEach((person) => {
  if (JSON.stringify(person.name).includes(JSON.stringify(body))) {
    console.log('match');
  }
});

console.log(res);

// persons.forEach((person) => {
//   console.log(JSON.stringify(person.name))
// });

// persons.map(person => console.log(person.name))



if (!(body.name && body.number)) {
  return response.status(400).json({
    error: 'name or number is missing',
  });
}


persons.forEach(person => {
  if (JSON.stringify(person.name).includes(JSON.stringify(body.name))) {
    return response.status(409).json({
      error: 'name must be unique',
    }); 
  }
})

const person = {
  name: body.name,
  number: body.number,
  id: Math.floor(Math.random() * 10000),
};

persons = persons.concat(person);

response.json(person);