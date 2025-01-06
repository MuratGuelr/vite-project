import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import User from "./components/User";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <h2>{`Hello my name is ${name}`}</h2>
      <Header />
      <Input setName={setName} />
      <User name={Murat} isLoggedIn={false} />
    </>
  );
}

export default App;
