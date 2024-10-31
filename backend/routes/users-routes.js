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

router.get("/:userId", (req, res, next) => {
  console.log("recieve get in user routes");
  const { userId } = req.params;

  const data = dummyPlaces.find(
    (currentPlace, index, placesArr) => currentPlace.creator === userId
  );

  res.json(data);
});

module.exports = router;
