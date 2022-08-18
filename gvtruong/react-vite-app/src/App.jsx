import "./App.css";
import ButtonIncrement from "./components/ButtonIncrement";
import { useState } from "react";
import DisplayCount from "./components/DisplayCount";

function App() {
  const [user, setUser] = useState({
    name: "long",
    count: 10,
  });

  return (
    <div style={{ flexDirection: "column", display: "flex" }}>
      <ButtonIncrement increment={setUser} count={user.count} />
      <DisplayCount user={user} />
    </div>
  );
}

export default App;
