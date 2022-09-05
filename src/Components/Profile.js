import { UserContext } from "./UserContext";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Table } from "react-bootstrap";

//profile component
export const Profile = () => {
  const { users, setUsers } = useContext(UserContext);
  const navigate = useNavigate();
  //deleting the user by maping the empid
  const delHandler = (user, id) => {
    setUsers(users.filter((user) => user.RollNo !== id));
  };

  //displaying  table of users profile
  return (
    <div className="profile">
      <h1 className="head">Welcome to Profile</h1>
      {/* bootstap component Table */}
      <Table striped hover variant="dark" responsive>
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Std</th>
            <th scope="col">RollNo</th>
            <th scope="col">TotalMarks</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* maping the users profile */}
          {users.map((e, i) => (
            <tr key={i} className="text-center">
              <th scope="row">{i + 1}</th>
              <td>{e.Name}</td>
              <td>{e.Std}</td>
              <td>{e.RollNo}</td>
              <td>{e.TotalMarks}</td>
              <td>
                {/*create a link to buttons */}
                <Link to={`/edit/${e.RollNo}`}>
                  <IconButton color="warning" aria-label="Edit">
                    <EditIcon />
                  </IconButton>
                </Link>
                <IconButton
                  color="error"
                  aria-label="delete"
                  onClick={() => {
                    delHandler(e, e.RollNo);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};