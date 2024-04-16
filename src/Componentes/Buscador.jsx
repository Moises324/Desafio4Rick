import React, { useState } from "react";
import "../index.css";

const Buscador = ({ products, setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [sortBy, setSortBy] = useState("asc");

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredProducts.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
      // Ordenar los productos alfabéticamente
      const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortBy === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      setFilteredProducts(sortedProducts);
    }
  };
  return (
    <div>
      <input
        className="Size"
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} className="boton">
        Buscar
      </button>

      {noResults && <p className="text">No existe este personaje.</p>}
    </div>
  );
};

export default Buscador;
