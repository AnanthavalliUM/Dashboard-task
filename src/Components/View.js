import { UserContext } from "./UserContext";
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// View component
export const View = () => {
  const { users } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();
  let curUser = users.find((e) => e.RollNo === id);
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          RollNo: {`${curUser.RollNo}`}
        </Typography>
        <Typography variant="h5" component="div">
          Name: {`${curUser.Name}`}
        </Typography>
        <Typography variant="h5" component="div">
          Std: {`${curUser.Std}`}
        </Typography>
        <Typography variant="h5" component="div">
          TotalMarks: {`${curUser.TotalMarks}`}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  // displaying the user details
  return (
    <>
      <br />
      <div className="d-flex justify-content-center">
        <Box sx={{ maxWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </div>
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
    </>
  );
};