/* eslint-disable react/prop-types */
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceItem.css";
const PlaceItem = (props) => {
  return (
    <li className="place-item my-4 mx-0">
      <Card className="place-item__content p-0">
        <div className="place-item__image w-full h-125 md:h-80 mr-6">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-cover md:h-80"
          />
        </div>
        <div className="place-item__info text-center p-4">
          <h2 className="m-0 mb-2">{props.title}</h2>
          <h3 className="m-0 mb-2">{props.address}</h3>
          <p className="m-0 mb-2">{props.description}</p>
        </div>
        <div className="place-item__actions p-4 text-center ">
          <Button inverse>View on Map </Button>
          <Button to={`places/${props.id}`}>Edit </Button>
          <Button danger>Delete </Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;

{
  /* <button className="border border-solid border-gray-600 p-1 rounded m-2">
            View on Map
          </button>
          <button className="border border-solid border-gray-600 p-1 rounded m-2">
            Edit
          </button>
          <button className="border border-solid border-gray-600 p-1 rounded m-2">
            Delete
          </button> */
}