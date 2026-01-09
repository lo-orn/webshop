import "./scss/style.scss";
import "./services/productService";
import "./utils/cartUtils";
import { initPdp } from "./pages/pdp/pdp";


import "./utils/htmlUtils";
import "./utils/pageUtils";
import { createAllProductCards } from "./utils/htmlUtils";
import { findCart } from "./utils/cartUtils";

createAllProductCards();
findCart();

// Kör PDP-kod bara på pdp-sidan
if (window.location.pathname.includes("pdp")) {
  console.log("CALLING initPdp");
  initPdp();
}