import React, { useState } from "react";
import axios from "axios";

const StarWarsTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch a random Star Wars character
  const addRecord = async () => {
    try {
      const randomId = Math.floor(Math.random() * 83) + 1;
      const response = await axios.get(`https://swapi.dev/api/people/${randomId}/`);
      
      const newUser = { id: randomId, name: response.data.name };
      setUsers([...users, newUser]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Delete a record from the table
  const deleteRecord = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <button onClick={addRecord}>Add Record</button>

      <table border="1" width="50%" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <button onClick={() => deleteRecord(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StarWarsTable;
