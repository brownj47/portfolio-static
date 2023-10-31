const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(nameInput.value);
  console.log(emailInput.value);
  console.log(messageInput.value);

  alert("This form is not yet connected to a backend.");
});
