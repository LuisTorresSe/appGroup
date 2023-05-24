import { useState } from "react";
import "./App.css";

function AppGroup() {
  const [members, setMembers] = useState([]);

  const handleSubmit = () => {
    setMembers();
  };
  return (
    <div>
      <h2>Obtener lista de usuarios del grupo de facebook</h2>
      <button onSubmit={handleSubmit}>Obtener lista de usuarios</button>
      {members.map((member) => (
        <p key={member}>{member}</p>
      ))}
      <div>
        <p>ejemplos - example </p>
        <p>Luis Torres</p>
        <p>12323412</p>
      </div>
      <div>
        <p>Aca ira la lista de usuarios que se consulte con la api</p>
      </div>
    </div>
  );
}

export default AppGroup;
