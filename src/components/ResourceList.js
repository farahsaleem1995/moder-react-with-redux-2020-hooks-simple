import React from "react";

import useResources from "../hooks/userResources";
import UsersList from "./UsersList";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      <UsersList />
      <div class="ui inverted segment">
        <div class="ui inverted relaxed divided list">
          {resources.map((r) => (
            <div class="item" key={r.id}>
              <div class="content">
                <div class="header">{resource}</div>
                {r.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceList;
