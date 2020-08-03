import React from "react";
import useResources from "../hooks/userResources";

const UsersList = () => {
  const users = useResources("users");

  return (
    <div class="ui inverted segment">
      <div class="ui inverted relaxed divided list">
        {users.map((user) => (
          <div class="item" key={user.id}>
            <div class="content">
              <div class="header">{user.name}</div>
              {user.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
