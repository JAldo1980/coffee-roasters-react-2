import React from "react";
import Container from "./components/Container";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Container>
        <Nav />
        <Home />
      </Container>
    </Router>
  );
}

export default App;
