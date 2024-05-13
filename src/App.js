import { useState } from "react";
import Navbar from "./components/navbar";
import InputField from "./components/inputField";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [degree, setDegree] = useState("");
  const [usersList, setUsersList] = useState([]);

  function handleNameChange(value) {
    setName(value);
  }
  function handleAgeChange(value) {
    setAge(value);
  }
  function handleDegreeChange(value) {
    setDegree(value);
  }

  function removeUser(id) {
    const filteredUsers = usersList.filter((user) => user.id !== id);
    setUsersList(filteredUsers);
  }

  // Add the user
  function addUser(event) {
    event.preventDefault();

    if (name && age && degree) {
      const newUser = {
        id: Date.now(),
        name: name,
        age: age,
        degree: degree,
      };
      const newUsersList = [...usersList, newUser];
      setUsersList(newUsersList);
      setName("");
      setAge("");
      setDegree("");
    } else {
      alert("All fields are required");
    }
  }
  return (
    <div>
      <Navbar />
      <div className="form-container">
        <form onSubmit={(event) => addUser(event)} className="form">
          <InputField
            value={name}
            label="Name"
            id="name"
            onValueChange={handleNameChange}
          />
          <InputField
            value={age}
            label="Age"
            id="age"
            onValueChange={handleAgeChange}
          />
          <InputField
            value={degree}
            label="Degree"
            id="degree"
            onValueChange={handleDegreeChange}
          />
          <button className="button">Submit</button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Degree</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.degree}</td>
                <td>
                  <button
                    style={{
                      all: "unset",
                      backgroundColor: "red",
                      color: "white",
                      padding: "6px 10px",
                      borderRadius: "6px",
                    }}
                    onClick={() => removeUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
