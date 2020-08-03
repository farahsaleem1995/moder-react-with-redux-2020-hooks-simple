import React, { useState } from "react";

import ResourceList from "./ResourceList";

const App = () => {
  const [resource, setResource] = useState("");
  return (
    <div className="ui container">
      <div className="ui segment" style={{ marginTop: "1rem" }}>
        <button className="ui button teal" onClick={() => setResource("posts")}>
          Posts
        </button>
        <button className="ui button pink" onClick={() => setResource("todos")}>
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
