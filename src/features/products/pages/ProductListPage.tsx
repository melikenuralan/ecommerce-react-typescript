import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import styles from "./ProductListPage.module.css";

interface Product {
  id: string;
  name: string;
  price: number;
}

const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    setLoading(true);
    getProducts(page, pageSize)
      .then((data) => {
        setProducts(data.items);
        setTotalPages(Math.ceil(data.total / pageSize));
      })
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Ürünler</h2>
      {loading && <p>Yükleniyor...</p>}
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              src="https://via.placeholder.com/150"
              alt={product.name}
              className={styles.productImage}
            />
            <h4>{product.name}</h4>
            <p className={styles.price}>{product.price}₺</p>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>
          Önceki
        </button>
        <span> Sayfa {page} / {totalPages} </span>
        <button onClick={() => setPage(p => p + 1)} disabled={page === totalPages}>
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default ProductListPage;
