import React from "react";
import { ProductList } from "../../components";
import styles from './Products.module.scss';

const PDP: React.FC = () => {
  return (
    <div className={styles['page-content']}>
      <ProductList />
    </div>
  );
};

export default PDP;
