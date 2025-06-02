import type { BasketItem } from "../types/basket";

export const getBasketItems = (): BasketItem[] => {
  return [
    {
      productId: "1",
      name: "Kırmızı Tişört",
      price: 299,
      quantity: 2,
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      productId: "2",
      name: "Siyah Ayakkabı",
      price: 749,
      quantity: 1,
      imageUrl: "https://via.placeholder.com/150"
    }
  ];
};
