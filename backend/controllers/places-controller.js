const { v4: uuidv4 } = require("uuid");
const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const getCoordsForAddress = require("../utils/location");

let dummyPlaces = [
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

const getPlacesByUserId = (req, res, next) => {
  const { userId } = req.params;

  const places = dummyPlaces.filter(
    (currentPlace, index, placesArr) => currentPlace.creator === userId
  );

  if (!places || places.length === 0) {
    return next(
      new HttpError("Could not find a place for the provided user id.", 404)
    );
  }
  res.json(places);
};

const createPlace = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError("invalid inputs passed, please check your data", 422);
  }
  const { title, description, coordinates, address, creator } = req.body;

  const createdPlace = {
    id: uuidv4(),
    title,
    description,
    location: getCoordsForAddress(address),
    address,
    creator,
  };
  dummyPlaces.push(createdPlace);

  res.status(200).send({ place: createdPlace });
};

const updatePlace = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError("invalid inputs passed, please check your data", 422);
  }
  const { title, description } = req.body;
  const { placeId } = req.params;

  // Find the place object
  const placeIndex = dummyPlaces.findIndex((p) => p.id === placeId);
  if (placeIndex === -1) {
    return new HttpError("The place you are updating is not found!", 404);
  }

  // Copy the place to update its properties
  const updatedPlace = { ...dummyPlaces[placeIndex] };

  // Update the properties
  updatedPlace.title = title;
  updatedPlace.description = description;

  // Update the place in the array
  dummyPlaces[placeIndex] = updatedPlace;

  console.log(updatedPlace);

  res.status(200).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {
  const { placeId } = req.params;
  const place = dummyPlaces.filter((place) => place.id !== placeId);
  if (!place) {
    throw new HttpError("The place you are deleting is not found!. ", 404);
  }
  res.status(200).json({ message: "place deleted successfully!", data: place });
};

module.exports = {
  getPlaceById,
  getPlacesByUserId,
  createPlace,
  updatePlace,
  deletePlace,
};
