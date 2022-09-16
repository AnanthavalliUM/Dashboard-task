import { UserContext } from "./UserContext";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

export const AddStudent = () => {
  //accessing the global state by useContext
  const { user, users, setUser, setUsers } = useContext(UserContext);

  let navigate = useNavigate(); //to navigate to home page

  return (
    <div className="container">
      <h1>Add Student</h1>
      <form
        className="d-flex flex-column m-4 "
        onSubmit={async (e) => {
          e.preventDefault();
          setUsers([...users, user]);
          setUser({
            Name: "",
            Std: "",
            RollNo: "",
            TotalMarks: ""
          });
          navigate("/");
        }}
      >
        <FormControl>
          <TextField
            required
            focused
            color="primary"
            id="demo"
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
            required
            focused
            color="primary"
            id="demo"
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
            required
            focused
            color="primary"
            id="demo"
            type="number"
            value={user.RollNo}
            onChange={(e) => {
              setUser({ ...user, RollNo: e.target.value });
            }}
            label="RollNo"
          />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <TextField
            required
            focused
            color="primary"
            id="demo"
            value={user.TotalMarks}
            onChange={(e) => {
              setUser({ ...user, TotalMarks: e.target.value });
            }}
            label="TotalMarks"
          />
        </FormControl>
        <br />
        <div className="d-flex justify-content-center">
          <Button type="submit" variant="contained" color="primary">
            ADD
          </Button>
        </div>
      </form>
    </div>
  );
};