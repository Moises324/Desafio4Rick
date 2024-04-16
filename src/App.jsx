import React from "react";
import MiApi from "./Componentes/MiApi";
import Footer from "./Componentes/Footer";
import "./index.css";
const App = () => {
  return (
    <div className="bckg">
      <h1 className="header">LA RICKYPEDIA</h1>
      <div className="container bckg">
        <MiApi />
      </div>
      <Footer />
    </div>
  );
};

export default App;
