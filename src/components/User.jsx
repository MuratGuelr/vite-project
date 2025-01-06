import React from "react";

const User = ({ name, isLoggedIn }) => {
  return <>{isLoggedIn ? <div>{name}</div> : <p>Lütfen kayıt olunuz!</p>}</>;
};

export default User;
