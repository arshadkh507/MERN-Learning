/* eslint-disable react/prop-types */
import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="text-center flex justify-center items-center">
        <Card>
          <h2>No Users Found!</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list list-none mx-auto my-0 p-0 flex justify-center flex-wrap">
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
