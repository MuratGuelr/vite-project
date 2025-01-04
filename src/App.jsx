import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <h2>{`Hello my name is ${name}`}</h2>
      <Header />
      <Input setName={setName} />
    </>
  );
}

export default App;
