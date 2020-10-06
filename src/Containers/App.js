import React, { useState } from "react";
import "./App.css";
import { render } from "@testing-library/react";
import Persons from "../Component/Persons/Persons";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "sa1", name: "Nawal", age: 26 },
      { id: "sasa1", name: "XYZ", age: 27 },
      { id: "sad1", name: "Shubhanshu", age: 21 },
    ],
    showPersons: false,
  });

  const switchNameHandler = (newName) => {
    // console.log("Was clicked");
    // DON'T DO THIS: personsState.persons[0].name = 'NBS';
    setPersonsState({
      persons: [
        { name: newName, age: 26 },
        { name: "XYZ", age: 27 },
        { name: "Shubhanshu", age: 21 },
      ],
    });
  };

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex((p) => {
      return p.id === id;
    });
    //console.log(id);
    const person = personsState.persons[personIndex];

    person.name = event.target.value;

    const personsIn = [...personsState.persons];
    const x = personsState.showPersons;
    personsIn[personIndex] = person;

    setPersonsState({
      persons: personsIn,
      showPersons: x,
    });
  };

  const togglePersonHandler = () => {
    var x = personsState.showPersons;
    const y = [...personsState.persons];
    setPersonsState({
      persons: y,
      showPersons: !x,
    });
  };

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1x solid blue",
    padding: "8px",
    curson: "pointer",
    ":hover": {
      backgroundColor: "lightgreen",
      color: "black",
    },
  };

  const deletePersonHandler = (personIndex) => {
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons: persons, showPersons: true });
  };

  let person = null;

  if (personsState.showPersons) {
    person = (
      <div>
        <Persons
          persons={personsState.persons}
          clicked={deletePersonHandler}
          // changed={nameChangedHandler}
        />
      </div>
    );
    style.backgroundColor = "red";
  }

  let classes = [];
  if (personsState.persons.length <= 2) {
    classes.push("red");
  }
  if (personsState.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className="App">
      <h1>Hi Nawal!</h1>
      <p className={classes.join(" ")}>React is working.</p>
      <button style={style} onClick={togglePersonHandler}>
        Toggle persons
      </button>
      {person}
    </div>
  );
};

export default App;
