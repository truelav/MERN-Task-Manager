import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import "./Header.modules.css";

export default function HeaderComponent() {
  return (
    <div className="">
      <Container maxWidth="lg">
        <div className="">
          <Link className="" to="/">
            Truelav's Blog
          </Link>
          <div className="">
            <Link className="" to="/login">
              <Button variant="contained">Login</Button>
            </Link>
            <Link className="" to="/register">
              <Button variant="outlined">Register</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
