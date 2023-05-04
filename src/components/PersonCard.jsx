import React from "react";

const PersonCard = (props) => {
  return (
    <fieldset>
      <legend>PersonCard.jsx</legend>
      <h1>
        {props.lastName}, {props.firstName}
      </h1>
      <p> Age: {props.age}</p>
      <p> Hair Color: {props.hairColor}</p>
    </fieldset>
  );
};

export default PersonCard;
