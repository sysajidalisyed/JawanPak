import React from "react";
import "./style.css";
import { useState } from "react";
const App = () => {
  const userList = [
    {
      id: 1,
      name: "Sajid",
      username: "ssa",
    },
    {
      id: 2,
      name: "Hammad",
      username: "hmd",
    },
  ];
  const initUser = { id: null, name: "", username: "" };
  const [users, setUsers] = useState(userList);
  const [user, setUser] = useState(initUser);

  const deleteUserfromArr = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const DeleteAll = () => {
    setUsers([]);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!user.name || !user.username) return;

          addUser(user);
          setUser(initUser);
        }}
      >
        <label>Name</label>
        <input
          className="u-full-width"
          type="text"
          value={user.name}
          name="name"
          onChange={handleInputChange}
        />
        <label>Username</label>
        <input
          className="u-full-width"
          type="text"
          value={user.username}
          name="username"
          onChange={handleInputChange}
        />
        <button className="button-primary" type="submit">
          Add user
        </button>
      </form>

      <button onClick={DeleteAll}>Delete All</button>
      <table>
        <caption>A summary of TODO for CRUD Operation</caption>
        <thead>
          <tr>
            <th scope="col">Certification</th>
            <th scope="col">Tuition</th>
            <th scope="col">Top Courses</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>
                    <button onClick={() => deleteUserfromArr(user.id)}>
                      Delete
                    </button>
                    <button>Edit</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>No users found</td>
            </tr>
          )}
        </tbody>
        {/* <tfoot>
          <tr>
            <th>Total Courses</th>
            <td colspan="4">
              <i>What are you waiting for? Get Started now for free</i>
            </td>
          </tr>
        </tfoot> */}
      </table>
    </div>
  );
};

export default App;
