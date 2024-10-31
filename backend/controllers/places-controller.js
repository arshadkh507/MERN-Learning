const { v4: uuidv4 } = require("uuid");
const HttpError = require("../models/http-error");

const dummyPlaces = [
  {
    id: "p1",
    title: "Islamia College Peshawar",
    description: "beautiful old university",
    location: {
      lat: 33.9996942,
      lng: 71.4760242,
    },
    address: "Grand Trunk Rd, Rahat Abad, Peshawar, Khyber Pakhtunkhwa",
    creator: "u1",
  },
];

const getPlaceById = (req, res, next) => {
  console.log("GET request in places");

  const { placeId } = req.params;

  const place = dummyPlaces.find(
    (currentPlace, index, placesArr) => currentPlace.id === placeId
  );
  // In synchronous mode we use throw new error
  // but In asynchronous mode we use next(error)
  if (!place) {
    throw new HttpError("Could not find a place for the provided id.", 404);
  }

  res.json(place);
};

const getPlaceByUserId = (req, res, next) => {
  const { userId } = req.params;

  const place = dummyPlaces.find(
    (currentPlace, index, placesArr) => currentPlace.creator === userId
  );

  if (!place) {
    return next(
      new HttpError("Could not find a place for the provided user id.", 404)
    );
  }
  res.json(place);
};

const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body;
  const createdPlace = {
    id: uuidv4(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };
  dummyPlaces.push(createdPlace);

  res.status(200).send({ place: createdPlace });
};

module.exports = { getPlaceById, getPlaceByUserId, createPlace };
