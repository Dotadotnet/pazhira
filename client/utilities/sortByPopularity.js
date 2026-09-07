export const sortByPoPularity = (
  product1,
  product2
) => {
  return product2.starRating - product1.starRating;
};