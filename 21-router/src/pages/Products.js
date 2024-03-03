import { Link } from "react-router-dom";

const Products = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

function ProductsPage() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {Products.map((p) => (
          <li key={p.id}>
            <Link to={p.id}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
