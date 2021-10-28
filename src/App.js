import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard.jsx";

function App() {
  var persons = [
    { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black" },
    { firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown" },
    { firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Brown" },
    { firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown" },
  ];

  return (
    <div className="App">
      {persons.map((person) => {
        return (
          <PersonCard
            firstName={person.firstName}
            lastName={person.lastName}
            age={person.age}
            hairColor={person.hairColor}
          />
        );
      })}
    </div>
  );
}

export default App;
