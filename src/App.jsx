import React from "react";
import Navbar from "./Components/Navbars/Navbar";
import Footer from "./Components/Footer/Footer";
import Router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/global.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
