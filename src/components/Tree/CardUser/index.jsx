import React from 'react';

const CardUser = ({ user: { id, name, email, password, ava } }) => {
  return (
    <article>
      <h3>
        ({id}) {name}
      </h3>
      <h4>
        {email} ({password})
      </h4>
      <img src={ava} alt="ava" width={200} />
    </article>
  );
};

export default CardUser;
