var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var owners = [
    {
        id: 1,
        name: "Adam",
        pets: [
            {
                id: 1,
                name: "Vera",
                type: "Dog"
            },
            {
                id: 2,
                name: "Felix",
                type: "Cat"
            }
        ]
    },
    {
        id: 2,
        name: "Kamilah",
        pets: [
            {
                id: 1,
                name: "Doug",
                type: "Dog"
            }
        ]
    }
];


// GET /api/owners
app.get('/api/owners', function (req, res, nextFn) {
  res.send(owners)
})

// GET /api/owners/:id
app.get('/api/owners/:id', function (req, res, nextFn) {
  ownerId = req.params.id
  requestedOwner = owners.find(x => x.id == ownerId)
  res.send(requestedOwner)
})

// POST /api/owners
app.post('/api/owners', function (req, res, nextFn) {
  var newOwner = {
    id: owners.length + 1,
    ... req.body
  }
  owners.push(newOwner)
  res.send(owners)
})

// PUT /api/owners/:id
app.put('/api/owners/:id', function (req, res, nextFn) {
  ownerId = req.params.id
  requestedOwner = owners.find(x => x.id == ownerId)
  Object.assign(requestedOwner,req.body)
  res.send(owners)
})

// DELETE /api/owners/:id
app.delete('/api/owners/:id', function (req, res, nextFn) {
  ownerId = req.params.id
  requestedOwner = owners.find(x => x.id == ownerId)
  owners.pop(requestedOwner)
  res.send(owners)
})

// GET /api/owners/:id/pets
app.get('/api/owners/:id/pets', function (req, res, nextFn) {
  ownerId = req.params.id
  requestedOwner = owners.find(x => x.id == ownerId)
  res.send(requestedOwner.pets)
})

// GET /api/owners/:id/pets/:petId
app.get('/api/owners/:id/pets/:petId', function (req, res, nextFn) {
  ownerId = req.params.id
  requestedOwner = owners.find(x => x.id == ownerId)
  petId = req.params.petId
  requestedPet = requestedOwner.pets.find(x => x.id == petId)
  res.send(requestedPet)
})

// POST /api/owners/:id/pets
app.post('/api/owners/:id/pets', function (req, res, nextFn) {
  ownerId = req.params.id
  requestedOwner = owners.find(x => x.id == ownerId)
  var newPet = {
    id: requestedOwner.pets.length + 1,
    ...req.body
  }
  requestedOwner.pets.push(newPet)
  res.send(requestedOwner)
})

// PUT /api/owners/:id/pets/:petId
app.put('/api/owners/:id/pets/:petId', function (req, res, nextFn) {
  ownerId = req.params.id
  requestedOwner = owners.find(x => x.id == ownerId)
  petId = req.params.petId
  requestedPet = requestedOwner.pets.find(x => x.id == petId)
  Object.assign(requestedPet, req.body)
  res.send(requestedOwner)
})

// DELETE /api/owners/:id/pets/:petId
app.delete('/api/owners/:id/pets/:petId', function (req, res, nextFn) {
  ownerId = req.params.id
  requestedOwner = owners.find(x => x.id == ownerId)
  petId = req.params.petId
  requestedPet = requestedOwner.pets.find(x => x.id == petId)
  requestedOwner.pets.pop(requestedPet)
  res.send(requestedOwner)
})

app.listen(3000, function(){
    console.log('Pets API is now listening on port 3000...');
})