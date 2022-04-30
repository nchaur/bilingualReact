import { PRODUCTS } from "../app/shared/products";

export const selectAllProducts = () => {
  return PRODUCTS;
};

//SELECTOR
export const selectProductById = (id) => {
  return PRODUCTS.find((product) => product.id === id);
};
