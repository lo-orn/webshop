import type { productResponse } from "../models/ProductResponse";

/**
 *
 * @returns A productResponse object. It only consists of one attribute,
 * (products), which is an array of Product.
 */
export const getData = async () => {
  const response = await fetch("/products.json");
  const data: productResponse = await response.json();
  return data;
};
