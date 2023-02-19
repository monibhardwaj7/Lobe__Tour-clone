import React from "react";

import "./app.scss";

import { Navbar, Content, Download, Footer } from "./container";

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
