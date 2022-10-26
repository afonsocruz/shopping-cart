import React, { useState, useEffect } from "react";
import { Products } from "../../services/products";
import { ProductsType } from "../../types/products";
import styles from "./ProductList.module.scss";

const ProductList: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    Products.getProducts()
      .then((data) => {
        setLoading(true);
        setProducts(data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles["content-page"]}>
      {!loading && (
        <div className={styles.products}>
          {products.map((item, index) => (
            <div className={styles["product-card"]}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <span>R${item.price}</span>
              <img src={item.image} alt={item.title} width={150} height={150} />
              <button>add to cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
