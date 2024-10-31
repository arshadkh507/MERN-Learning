const express = require("express");

const router = express.Router();
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

router.get("/:placeId", (req, res, next) => {
  console.log("GET request in places");

  const { placeId } = req.params;

  const place = dummyPlaces.find(
    (currentPlace, index, placesArr) => currentPlace.id === placeId
  );

  if (!place) {
    // In synchronous mode we use throw new error
    // but In asynchronous mode we use next(error)
    const error = new Error("Could not find a place for the provided id.");
    error.code = 404;
    throw error;
  }

  res.json(place);
});

router.get("/user/:userId", (req, res, next) => {
  const { userId } = req.params;

  const place = dummyPlaces.find(
    (currentPlace, index, placesArr) => currentPlace.creator === userId
  );

  if (!place) {
    const error = new Error("Could not find a place for the provided user id.");
    error.code = 404;
    return next(error);
  }
  res.json(place);
});

module.exports = router;
