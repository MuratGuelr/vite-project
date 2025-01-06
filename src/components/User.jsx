import React from "react";

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

export default User;
