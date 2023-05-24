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
      <p>hola</p>
    </div>
  );
}

export default AppGroup;
