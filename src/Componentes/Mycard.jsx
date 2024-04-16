import "../index.css";
const Mycard = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card mt-4">
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text"></p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item tarjeta">Status:{product.status}</li>
          <li className="list-group-item tarjeta">Especie:{product.species}</li>
          <li className="list-group-item tarjeta">Genero:{product.gender}</li>
        </ul>
      </div>
    </div>
  );
};
export default Mycard;
