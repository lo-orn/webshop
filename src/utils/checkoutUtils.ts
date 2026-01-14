import { createCheckoutCart } from "./htmlUtils";

const shippingButtons = document.getElementsByName("shippingMethod");

shippingButtons?.forEach((btn) => {
  btn.addEventListener("change", () => {
    checkChosen();
    createCheckoutCart();
  });
});

export const checkChosen = () => {
  shippingButtons.forEach((btn) => {
    let parent = btn.parentElement;
    if ((btn as HTMLInputElement).checked) {
      parent?.classList.add("chosen");
    } else {
      parent?.classList.remove("chosen");
    }
  });
};

export const checkShipping = () => {
  const shippingButtons = document.querySelectorAll<HTMLInputElement>(
    "[name=shippingMethod]"
  );
  let shippingMethod: string = "";
  if (shippingButtons) {
    shippingButtons.forEach((btn) => {
      if (btn.checked) {
        shippingMethod = btn.value;
      }
    });
  }

  return shippingMethod;
};
