import { useEffect, useState } from "react";
import type { BasketItem } from "../types/basket";
import { getBasketItems } from "../services/basketService";

const BasketPage = () => {
  const [items, setItems] = useState<BasketItem[]>([]);

  useEffect(() => {
    const data = getBasketItems();
    setItems(data);
  }, []);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Sepetim</h2>
      {items.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <div>
          {items.map(item => (
            <div key={item.productId} style={{ borderBottom: "1px solid #ccc", marginBottom: "1rem", paddingBottom: "1rem", display: "flex", gap: "1rem" }}>
              <img src={item.imageUrl} alt={item.name} width={100} height={100} style={{ objectFit: "cover" }} />
              <div>
                <h4>{item.name}</h4>
                <p>Adet: {item.quantity}</p>
                <p>Fiyat: {item.price}₺</p>
                <p>Ara toplam: {item.price * item.quantity}₺</p>
              </div>
            </div>
          ))}
          <h3>Toplam Tutar: {total}₺</h3>
        </div>
      )}
    </div>
  );
};

export default BasketPage;
