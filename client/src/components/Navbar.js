import React from "react";
import { AppBar, Box, Typography, Toolbar, Button } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const userDetails = useSelector((state) => state.auth.userData);

  const login = useSelector((state) => state.auth.login);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between", gap: "20px" }}>
          <Typography variant="h6" component="div">
            UserWorld
          </Typography>
          <Typography>
            {" "}
            {login ? (
              <Link to="/">
                <Button color="inherit" variant="button">
                  Team
                </Button>
                <Button color="inherit" variant="button">
                  {userDetails.firstName}{" "}
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button color="inherit" variant="button">
                    Login{" "}
                  </Button>
                </Link>

                <Link to="/signup">
                  <Button color="inherit" variant="button">
                    SignUp{" "}
                  </Button>
                </Link>
              </>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
