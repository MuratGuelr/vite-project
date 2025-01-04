import { useState } from "react";

const Input = ({ setName }) => {
  const [isLogged, setIsLogged] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleLogged = () => {
    isLogged === true ? setIsLogged(false) : setIsLogged(true);
  };

  return (
    <div>
      {isLogged && (
        <>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" onChange={(e) => handleChange(e)} />
        </>
      )}
      <button onClick={handleLogged}>
        {isLogged ? "You Logged" : "Pls logged in"}
      </button>
    </div>
  );
};

export default Input;
