import type { Cart } from "../models/Cart";
import type { CartItem } from "../models/CartItem";
import type { Product } from "../models/product";
import { getData } from "../services/serviceBase";
import { addItemToCart, removeOneItemFromCart } from "./cartUtils";
import { setLastClickedProduct } from "./pageUtils";

export const createAllProductCards = async () => {
  const productResponse = await getData();
  const products = productResponse.products;

  products.forEach((product: Product) => {
    createProductCard(product);
  });
};

/**
 *  this html needs more styling to match the design
 * @param product a single product object
 */
export const createProductCard = (product: Product) => {
  const container = document.createElement("div");
  const buyContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const category = document.createElement("div");
  const name = document.createElement("h3");
  const description = document.createElement("div");
  const price = document.createElement("span");
  const addButton = document.createElement("button");
  const removeButton = document.createElement("button");

  img.src = product.image;
  category.innerHTML = product.category;
  name.innerHTML = product.name.toUpperCase();
  description.innerHTML = product.description;
  price.innerHTML = product.price.toString() + "SEK";
  addButton.innerHTML = "ADD TO CART";
  removeButton.innerHTML = "remove one item";

  container.classList.add("productCard");
  imgContainer.classList.add("productImgContainer");
  img.classList.add("productCardImg");
  category.classList.add("productCardCategory");
  name.classList.add("productCardName");
  description.classList.add("productCardDescription");
  price.classList.add("productCardPrice");
  addButton.classList.add("productCardButton");
  removeButton.classList.add("productCardButton");
  buyContainer.classList.add("buyContainer");

  buyContainer.appendChild(price);
  buyContainer.appendChild(addButton);
  buyContainer.appendChild(removeButton);

  imgContainer.appendChild(img);

  container.appendChild(imgContainer);
  container.appendChild(category);
  container.appendChild(name);
  container.appendChild(description);
  container.appendChild(buyContainer);

  addButton.addEventListener("click", () => {
    addItemToCart(product.id.toString());
  });

  removeButton.addEventListener("click", () => {
    removeOneItemFromCart(product.id.toString());
  });

  imgContainer.addEventListener("click", () => {
    setLastClickedProduct(product);
    window.location.href = "pdp.html";
  });

  name.addEventListener("click", () => {
    setLastClickedProduct(product);
    window.location.href = "pdp.html";
  });

  document.getElementById("product-card-container")?.appendChild(container);
};

export const createCheckoutCart = () => {
  const cartString = localStorage.getItem("cart");
  if (!cartString) return;

  const cart: Cart = JSON.parse(cartString);

  cart.items.forEach((item) => {
    createCheckoutCartItem(item);
  });
};

//call this in a loop of all cartItems in cart
export const createCheckoutCartItem = (item: CartItem) => {
  const product = item.product;

  const row = document.createElement("div");
  row.classList.add("priceRow");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("imgContainer");

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  imgContainer?.appendChild(img);

  const textContainer = document.createElement("div");
  textContainer.classList.add("textContainer");
  const name = document.createElement("p");
  const qty = document.createElement("p");
  const price = document.createElement("p");

  name.innerText = product.name;
  qty.innerText = "QTY: " + item.amount.toString();
  price.innerHTML = "$" + (product.price * item.amount).toString();

  textContainer?.appendChild(name);
  textContainer?.appendChild(qty);
  textContainer?.appendChild(price);

  row.appendChild(imgContainer);
  row.appendChild(textContainer);

  const container = document.getElementById("priceTop");
  container?.appendChild(row);
};
