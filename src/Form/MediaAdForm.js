import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const labelStyle = {
  fontWeight: "bold",
};

function MediaAdForm() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous step or the create ad page
  };

  const handleSubmit = () => {
    navigate("/submit-form"); // Navigate to SubmitForm component
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Media Ad Form</Typography>
        <form>
          <div>
            <label style={labelStyle}>Heading 01</label>
            <TextField fullWidth />
          </div>
          <div>
            <label style={labelStyle}>Heading 02</label>
            <TextField fullWidth />
          </div>
          <div>
            <label style={labelStyle}>Description 01</label>
            <TextField fullWidth />
          </div>
          <div className="flex-container">
            <div className="flex-item">
              <label style={labelStyle}>Landscape Marketing Image (1.9:1)</label>
              <TextField fullWidth />
            </div>
            <div className="flex-item">
              <label style={labelStyle}>Portrait Marketing Image (4:5)</label>
              <TextField fullWidth />
            </div>
            <div className="flex-item">
              <label style={labelStyle}>Square Marketing Image (1:1)</label>
              <TextField fullWidth />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Video URL</label>
            <TextField fullWidth />
          </div>
          <div className="flex-container">
            <div className="flex-item">
              <label style={labelStyle}>Business Name</label>
              <TextField fullWidth />
            </div>
            <div className="flex-item">
              <label style={labelStyle}>Button Label</label>
              <TextField fullWidth />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Website URL</label>
            <TextField fullWidth />
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default MediaAdForm;
