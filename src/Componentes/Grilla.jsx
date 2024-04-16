import Mycard from "./Mycard";
const Grilla = ({ products }) => {
  return (
    <div className="row">
      {Array.isArray(products) &&
        products.map((product) => (
          <Mycard product={product} key={product.id} />
        ))}
    </div>
  );
};
export default Grilla;
