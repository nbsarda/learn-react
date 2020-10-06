import React from "react";
//import "./Person.css";
import styled from "styled-components";

const StyleDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  media (min-width: 500px): {
    width: "450px";
  }
`;
const Person = (props) => {
  return (
    //<div className="Person" style={style}>
    <StyleDiv>
      <p onClick={props.click}>
        My name is {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </StyleDiv>
  );
};

export default Person;
