import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import Container from "@mui/material/Container";

import { Home, FullPost, Registration, AddPost, Login } from "./pages";

import HeaderComponent from "./components/HeaderComponent";

import "./styles/App.css";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <HeaderComponent />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
