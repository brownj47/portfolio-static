const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch("https://r89elza0d6.execute-api.us-east-2.amazonaws.com/prod/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    }),
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => {
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
      alert(data.message);
    })
    .catch(() => {
      alert(
        "Something went wrong and your message was not sent :(. If this error persists, please reach out to me over LinkedIn at https://www.linkedin.com/in/justuscbrown/."
      );
    });
});
