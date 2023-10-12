import { AppBar, Box, Button, Typography, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              APP LOGO
            </Typography>
            <Link to="/ ">
              <Button variant="contained" size="small">
                DASHBOARD
              </Button>
            </Link>
            <Link to="/create-ad">
              <Button variant="contained" size="small">
                CREATE ADS
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
