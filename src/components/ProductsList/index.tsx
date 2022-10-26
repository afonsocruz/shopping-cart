import React, { useState, useEffect } from 'react';
import { getProducts, GetProductsResponse } from '../../services/products';

const ProductList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<GetProductsResponse[]>([]);

  async function getData() {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data as any)
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData();
  },[])

  return (
    <div className="content-page">
      {products.map((item, index) => (
        <div className="product" key={index}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <img src={item.image} alt={item.title} width={150} height={150} />
        </div>
      ))}
    </div>
  )
}

export default ProductList;