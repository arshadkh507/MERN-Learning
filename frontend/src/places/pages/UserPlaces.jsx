import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";
const dummyPlaces = [
  {
    id: "p1",
    title: "Islamia College University Peshawar",
    description: "One of the most famous sky scrapers in the world! ",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/92/47/2b/islamic-college-university.jpg",
    address: "Grand Trunk Rd, Rahat Abad, Peshawar, Khyber Pakhtunkhwa",
    location: {
      lat: 33.9996942,
      Ing: 71.4760242,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Board Bazar Peshawar",
    description: "One of the most famous sky scrapers in the world! ",
    imageUrl:
      "https://thumbs.dreamstime.com/b/islamia-college-peshawar-pakistan-educational-institution-located-city-khyber-pakhtunkhwa-province-50150158.jpg",
    address: "XFW9+WQR, Board Bazar Tehkal, Peshawar, Khyber Pakhtunkhwa",
    location: {
      lat: 33.997351,
      Ing: 71.4693933,
    },
    creator: "u2",
  },
];
const UserPlaces = () => {
  const userId = useParams().userId;

  const loadedPlace = dummyPlaces.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlace} />;
};

export default UserPlaces;
