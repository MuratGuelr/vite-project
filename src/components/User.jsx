import React from "react";
import PropTypes from "prop-types";

const User = ({ name, isLoggedIn, friends }) => {
  return (
    <>
      {isLoggedIn ? (
        <div>
          <p>{name}</p>
          <h2>Arkadaşlarım</h2>
          {friends.map((friend) => (
            <div key={friend.id}>
              {friend.id} - {friend.name}
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
};

export default User;
