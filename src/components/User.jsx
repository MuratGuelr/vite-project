import React from "react";
import PropTypes from "prop-types";

const User = ({ name, isLoggedIn, friends, age }) => {
  if (!isLoggedIn) {
    return <div>Lütfen giriş yapınız!</div>;
  }
  return (
    <>
      {isLoggedIn ? (
        <div>
          <p>{name}</p>
          <h2>Arkadaşlarım</h2>
          {friends.map((friend, index) => (
            <div key={index}>
              {index} - {friend.name}
            </div>
          ))}
        </div>
      ) : (
        <p>Lütfen kayıt olunuz!</p>
      )}
    </>
  );
};
User.prototypes = {
  name: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  friends: PropTypes.array.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

User.defaultProps = {
  isLoggedIn: false,
  name: "New User",
  age: 0,
};

export default User;
