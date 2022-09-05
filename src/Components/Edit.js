import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { useParams, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

export const Edit = () => {
  const { users, setUsers } = useContext(UserContext);

  const { id } = useParams();
  //taking the user which need to be edited in currentUser
  let currentUser = users.find((e) => e.RollNo === id);

  //setting the values of form to olduser
  const [user, setUser] = useState({
    Name: currentUser.Name,
    Std: currentUser.Std,
    RollNo: currentUser.RollNo,
    TotalMarks: currentUser.TotalMarks
  });

  let navigate = useNavigate();

  return (
    <div className="container">
      <h1>Edit</h1>
      <form
        className="d-flex flex-column m-2 "
        onSubmit={async (e) => {
          e.preventDefault();
          //logic to update the currentuser
          const index = users.findIndex((user) => user.RollNo === id);
          var tempuserss = [...users];
          tempuserss[index] = user;
          setUsers(tempuserss);
          navigate("/profile/:id");
        }}
      >
        <FormControl>
          <TextField
            id="demo"
            focused
            color="primary"
            value={user.Name}
            onChange={(e) => {
              setUser({ ...user, Name: e.target.value });
            }}
            label="Name"
          />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <TextField
            id="demo"
            focused
            color="primary"
            value={user.Std}
            onChange={(e) => {
              setUser({ ...user, Std: e.target.value });
            }}
            label="Std"
          />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <TextField
            focused
            color="primary"
            id="demo"
            type="number"
            value={user.RollNo}
            onChange={(e) => {
              setUser({ ...user, RollNo: e.target.value });
            }}
            label="Roll NO"
          />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <TextField
            id="demo"
            focused
            color="primary"
            value={user.TotalMarks}
            onChange={(e) => {
              setUser({ ...user, TotalMarks: e.target.value });
            }}
            label="City"
          />
        </FormControl>
        <br />
        <div className="d-flex justify-content-center">
          <Button type="submit" variant="contained" color="primary">
            Edit
          </Button>
        </div>
      </form>
    </div>
  );
};

