import { useEffect, useState } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import { Products } from "../../types/server";

function Store() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  console.log(products);
  return (
    <>
      {/* <NavBar /> */}
      <div>
        <Container>
          <h1 className="text-right m-6">جدید ترین محصولات </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {products.map((result: Products) => (
              <Link key={result.id} to={`/product/${result.id}`}>
                <ProductItem {...result} />
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Store;
