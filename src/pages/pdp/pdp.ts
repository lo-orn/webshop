import type { Product } from "../../models/Product";
import { getLastClickedProduct } from "../../utils/pageUtil"


//render product function with html *done*

export const renderProduct = (product: Product) => {
    const titleEl = document.getElementById("pdp-title");
    if(!titleEl) return;
    titleEl.textContent = product.name;

    const priceEl = document.getElementById("pdpPrice");
    if(!priceEl) return;
    priceEl.textContent = `${product.price} sek`;

    const descEl = document.getElementById("pdp-desc");
    if(!descEl) return;
    descEl.textContent = product.description;

    const imgEl = document.getElementById("pdp-main-img") as HTMLImageElement | null
    if(imgEl) {
        imgEl.src = product.image
        imgEl.alt = `image of ${product.name} as a retro action figure`
    }

}

// initPdp funktion (const product - getLastCllicked, !product(redirect?), renderProduct  ) - *done* 

export const initPdp = () => {
    console.log("PDP TS LOADING");

    // hämta produkt från localStorage
    const product = getLastClickedProduct();
    if(!product) return;
    console.log(product);
    
    renderProduct(product);
    initTabs(product);

}


//initThumbs 

//tabsInit(details, story, shipping) *done*

export const initTabs = (product: Product) => {
    console.log("initTabs körs");
    const tabs = document.querySelectorAll<HTMLButtonElement>(".tab")
    const panel = document.getElementById("pdpPanel")
    if(!panel) return

    //default
    panel.textContent = `Kategorier: ${product.categories.join(", ")}`

    //click on tabs 
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("is-active"))

            tab.classList.add("is-active")

            const tabName = tab.dataset.tab;
            if(tabName === "details") {
                panel.textContent = `Kategorier: ${product.categories.join(", ")}`;
            }
            if (tabName === "story") {
                panel.textContent = product.description;
              }
        
            if (tabName === "shipping") {
                panel.textContent = "Leveranstid 2-5 arbetsdagar.";
              }

        })
    })
    
}


//initQty 

//initAddToCart(product)


