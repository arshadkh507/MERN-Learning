import Avatar from "../../shared/components/UIElements/Avatar";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
import "./UserItem.css";
import Card from "../../shared/components/UIElements/Card";
const UserItem = (props) => {
  return (
    <>
      <li className="user-item m-4 ">
        <Card className="user-item__content p-0">
          <Link
            to={`/${props.id}/places`}
            className="flex items-center w-full h-full no-underline p-4 text-white bg-gray-800 active:bg-yellow-400 hover:bg-yellow-400"
          >
            <div className="user-item__image w-16 h-16 mr-4">
              <Avatar image={props.image} alt={props.name} />
            </div>
            <div className="user-item__info">
              <h2 className="text-base m-0 mb-2 font-normal text-amber-500 ">
                {props.name}
              </h2>
              <h3 className="m-0">
                {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
              </h3>
            </div>
          </Link>
        </Card>
      </li>
    </>
  );
};

export default UserItem;
