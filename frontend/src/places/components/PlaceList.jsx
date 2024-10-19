/* eslint-disable react/prop-types */
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";
const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places found. Maybe create one?</h2>
          <button className="border border-solid border-gray-600 p-1 rounded m-2">
            Share Place
          </button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list list-none mx-auto my-4 p-0 w-90 max-w-402">
      {props.items.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creatorId}
            coordinates={place.location}
          />
        );
      })}
    </ul>
  );
};

export default PlaceList;
