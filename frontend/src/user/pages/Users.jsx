import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Arshad Khan",
      image:
        "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
