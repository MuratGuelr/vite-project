import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import User from "./components/User";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const [name, setName] = useState("Murat");
  const [friends, setFriends] = useState([
    {
      name: "Murat",
    },
    {
      name: "Ahmet",
    },
    {
      name: "Tayfur",
    },
    {
      name: "Kratos",
    },
  ]);

  return (
    <>
      <Form />
      <h2>{`Hello my name is ${name}`}</h2>
      <Counter />
      <Header />
      <Input setName={setName} />
      <User name={name} isLoggedIn={true} age={25} friends={friends} />
      <button onClick={() => setFriends([...friends, { name: "Ayşe" }])}>
        Add a Friend
      </button>
    </>
  );
}

export default App;
