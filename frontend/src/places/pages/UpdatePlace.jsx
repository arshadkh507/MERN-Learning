import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";
import "./PlaceForm.css";
import { useForm } from "../../shared/hooks/form-hook";
import { useEffect, useState } from "react";
import Card from "../../shared/components/UIElements/Card";
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
const UpdatePlace = () => {
  const { placeId } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const identifiedPlace = dummyPlaces.find((place) => place.id === placeId);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        valid: false,
      },
      description: {
        value: "",
        valid: false,
      },
    },
    true
  );

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            valid: true,
          },
          description: {
            value: identifiedPlace.description,
            valid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  } else {
    console.log(identifiedPlace);
  }

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    formState.inputs.title.value && (
      <form
        className="place-form list-none my-0 mx-auto p-4 w-90 max-w-402 rounded-md bg-white"
        onSubmit={placeUpdateSubmitHandler}
      >
        <Input
          id="title"
          element="input"
          type="text"
          lable="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter valid title."
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValid={formState.inputs.title.isValid}
        />
        <Input
          id="description"
          element="textarea"
          lable="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter valid description (atleast 5 characters long)."
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Update Place
        </Button>
      </form>
    )
  );
};

export default UpdatePlace;
