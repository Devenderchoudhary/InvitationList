import React, { useState } from "react";
import AddUser from "./Components/User/AddUser";
import UsersList from "./Components/User/UsersList";

function App() {
  const users = [
    {
      name: "Devender",
      age: 8801733751,
    },
  ];

  const [usersList, setUsersList] = useState(users);

  const addUserHandler = (user) => {
    console.log(user);
    setUsersList((prevList) => {
      return [user, ...prevList];
    });
    console.log(usersList);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
