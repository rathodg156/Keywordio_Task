import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const modalStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "green", 
  color: "white",
  padding: "20px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function SubmitForm() {
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({});
  const [open, setOpen] = useState(true);

  useEffect(() => {
    // Automatically close the modal and redirect to the create ad page after 0.6 seconds
    const timeout = setTimeout(() => {
      setOpen(false);
      navigate("/create-ad");
    }, 600);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <Modal open={open}>
      <div style={modalStyle}>
        <Typography variant="h5">Submitted</Typography>
      </div>
    </Modal>
  );
}

export default SubmitForm;
