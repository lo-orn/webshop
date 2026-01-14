// --- CHECKOUT PAGE ---
const checkoutForm = document.getElementById("checkoutForm") as HTMLFormElement;

const handleCheckoutForm = (e: Event) => {
  e.preventDefault();

  const approvedName = /^[A-Za-z-]+$/;

  const firstNameData = (
    document.getElementById("firstName") as HTMLInputElement
  ).value;

  if (firstNameData.trim() === "" || !approvedName.test(firstNameData)) {
    console.log("Please enter a correct first name");
  }

  const lastNameData = (document.getElementById("lastName") as HTMLInputElement)
    .value;

  if (lastNameData.trim() === "" || !approvedName.test(lastNameData)) {
    console.log("Please enter a correct last name");
  }

  const approvedEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const emailData = (document.getElementById("email") as HTMLInputElement)
    .value;

  if (emailData.trim() === "" || !approvedEmail.test(emailData)) {
    console.log("Please enter a correct email address");
  }

  const approvedNumber = /^[+0-9]+$/;

  const phoneData = (document.getElementById("phone") as HTMLInputElement)
    .value;

  if (phoneData.trim() === "" || !approvedNumber.test(phoneData)) {
    console.log("Please enter a correct phone number");
  }

  const streetData = (document.getElementById("street") as HTMLInputElement)
    .value;

  if (streetData.trim() === "") {
    console.log("Please enter a street address");
  }

  // const additionalData = (
  //   document.getElementById("additional") as HTMLInputElement
  // ).value;

  const cityData = (document.getElementById("city") as HTMLInputElement).value;

  if (cityData.trim() === "") {
    console.log("Please enter a city");
  }

  const stateData = (document.getElementById("state") as HTMLInputElement)
    .value;

  if (stateData.trim() === "") {
    console.log("Please enter a state");
  }

  const zipCodeData = (document.getElementById("zipCode") as HTMLInputElement)
    .value;

  if (zipCodeData.trim() === "" || !approvedNumber.test(zipCodeData)) {
    console.log("Please enter a valid zip code");
  }

  const countryData = (document.getElementById("country") as HTMLInputElement)
    .value;

  if (countryData.trim() === "") {
    console.log("Please enter a country");
  }

  const cardNumberData = (
    document.getElementById("cardNumber") as HTMLInputElement
  ).value;

  if (cardNumberData.trim() === "" || !approvedNumber.test(cardNumberData)) {
    console.log("Please enter a valid card number");
  }

  const cardHolderData = (
    document.getElementById("cardHolder") as HTMLInputElement
  ).value;

  if (cardHolderData.trim() === "" || !approvedName.test(cardHolderData)) {
    console.log("Please enter a valid card holder name");
  }

  const expDateData = (
    document.getElementById("expiryDate") as HTMLInputElement
  ).value;

  if (expDateData.trim() === "") {
    // add regex validation
    console.log("Please enter the date in format 'MM/YY'");
  }

  const cvvData = (document.getElementById("cvvCode") as HTMLInputElement)
    .value;

  if (cvvData.trim() === "") {
    // add regex validation
    console.log("Please enter three digits");
  }
};

if (checkoutForm) {
  checkoutForm.addEventListener("submit", handleCheckoutForm);
}
