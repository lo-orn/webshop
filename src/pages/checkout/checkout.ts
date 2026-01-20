import "../../scss/checkout/checkout.scss";
import { initCartPop } from "../../utils/cartModalUtils";
import "../../utils/checkoutUtils";
import "../../utils/formUtils";
import { createCheckoutCart } from "../../utils/htmlUtils";

createCheckoutCart();
document.addEventListener("DOMContentLoaded", () => {
  initCartPop();
  
});