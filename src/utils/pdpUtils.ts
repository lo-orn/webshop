import type { Cart } from "../models/Cart";

 export const getQtyInCart = (productId: number) => {
    const cartString = localStorage.getItem("cart");
    if (!cartString) return 0;

    const cart  = JSON.parse(cartString) as Cart;
    const item = cart.items.find((i) => i.product.id === productId)

    console.log("getQtyInCart:",item ? `amount=${item.amount}` : "item not found");

    return item ? item.amount : 0;
  };

  