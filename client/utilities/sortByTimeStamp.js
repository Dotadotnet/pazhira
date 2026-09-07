export function getTimeStamp(date) {
  const creationProductDate = new Date(date);
  return creationProductDate.getTime();
}

export const sortByTimeStamp = (
  product1,
  product2
) => {
  if (product2?.timeStamp && product1?.timeStamp) {
    return product2?.timeStamp - product1?.timeStamp;
  }
  return 0;
};

export const newestProductsFn = (products) => {
  const productsWithTimeStamp = products.map((product) => {
    return {
      ...product,
      timeStamp: getTimeStamp(product.registerDate),
    };
  });
  return productsWithTimeStamp.sort(sortByTimeStamp);
};