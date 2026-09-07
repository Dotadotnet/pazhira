export const sortByExpensive = (
  product1,
  product2
) => {
  return product2.price - product1.price;
};

export const sortByCheapest = (
  product1,
  product2
) => {
  return product1.price - product2.price;
};