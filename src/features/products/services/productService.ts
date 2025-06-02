export const getProducts = async (page: number = 1, pageSize: number = 6) => {
  const totalProducts = 20;

  const fakeProducts = Array.from({ length: totalProducts }, (_, i) => ({
    id: (i + 1).toString(),
    name: `Ürün ${(i + 1)}`,
    price: Math.floor(Math.random() * 1000) + 100,
  }));

  const start = (page - 1) * pageSize;
  const pagedItems = fakeProducts.slice(start, start + pageSize);

  return Promise.resolve({
    items: pagedItems,
    total: totalProducts,
  });
};
