import { findCart } from "../../utils/cartUtils";
import { initCartPop } from "../../utils/headerUtils";
import { createAllCategories } from "../../utils/htmlUtils";
import { createNewDropsCards } from "../../utils/newdropUtils/newDropUtils";

createNewDropsCards("all", true);

findCart();
createAllCategories(true);

window.addEventListener("DOMContentLoaded", () => {
 initCartPop();
});