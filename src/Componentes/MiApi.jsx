import React, { useState, useEffect } from "react";
import Grilla from "./Grilla";
import Buscador from "./Buscador";
import "bootstrap/dist/css/bootstrap.min.css";

const MiApi = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const obtenerInformacion = async () => {
    let data = await fetch("https://rickandmortyapi.com/api/character");
    let resultado = await data.json();
    setProducts(resultado.results);
    setFilteredProducts(resultado.results); // Inicialmente mostrar todos los productos

    // Ordenar los productos alfabéticamente por nombre
    const sortedProducts = resultado.results.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setProducts(sortedProducts);
    setFilteredProducts(sortedProducts); // Mostrar todos los productos inicialmente
  };

  useEffect(() => {
    obtenerInformacion();
  }, []);

  return (
    <div className="row">
      <Buscador products={products} setFilteredProducts={setFilteredProducts} />
      <Grilla products={filteredProducts} />
    </div>
  );
};

export default MiApi;
