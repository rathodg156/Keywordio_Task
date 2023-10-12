import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function CreateAd() {
  const navigate = useNavigate();
  const [isTextAd, setIsTextAd] = useState(false);
  const [isMediaAd, setIsMediaAd] = useState(false);

  const handleCardClick = (isAdSelected) => {
    if (isAdSelected === "text") {
      setIsTextAd(!isTextAd);
    } else if (isAdSelected === "media") {
      setIsMediaAd(!isMediaAd);
    }
  };
  
  const handleNextClick = () => {
    if (isTextAd && isMediaAd) {
      navigate("/fill-media-ad");
    } else if (isTextAd) {
      navigate("/fill-text-ad");
    } else if (isMediaAd) {
      navigate("/fill-media-ad");
    } else {
      alert("Please select an ad type.");
    }
  };
  

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}>
      <Typography variant="h4" style={{ textAlign: "left" }}>Create Ad</Typography>
      <div style={{ display: "flex" }}>
        <Card
          style={{ width: 250, height: 250, cursor: 'pointer', margin: '10px' }}
          onClick={() => handleCardClick("text")}
        >
          <CardContent>
            <Typography variant="h6">Text Ad</Typography>
            <Box display="flex" alignItems="center">
              <Checkbox
                checked={isTextAd}
                readOnly
              />
              <span>Fill Text Ad</span>
            </Box>
          </CardContent>
        </Card>
        <Card
          style={{ width: 250, height: 250, cursor: 'pointer', margin: '10px' }}
          onClick={() => handleCardClick("media")}
        >
          <CardContent>
            <Typography variant="h6">Media Ad</Typography>
            <Box display="flex" alignItems="center">
              <Checkbox
                checked={isMediaAd}
                readOnly
              />
              <span>Fill Media Ad</span>
            </Box>
          </CardContent>
        </Card>
      </div>
      <Button variant="contained" color="primary" onClick={handleNextClick} style={{ alignSelf: "flex-end", marginLeft: "10px" }}>
        Next
      </Button>
    </div>
  );
}

export default CreateAd;
