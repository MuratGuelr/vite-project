import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import User from "./components/User";

function App() {
  const [name, setName] = useState("Murat");
  const friends = [
    {
      id: 1,
      name: "Murat",
    },
    {
      id: 2,
      name: "Ahmet",
    },
    {
      id: 3,
      name: "Tayfur",
    },
    {
      id: 4,
      name: "Kratos",
    },
  ];

  return (
    <>
      <h2>{`Hello my name is ${name}`}</h2>
      <Header />
      <Input setName={setName} />
      <User name={name} isLoggedIn={true} age={25} friends={friends} />
    </>
  );
}

export default App;
