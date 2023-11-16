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
      "X-API-Key": "7WXzn8le3P9L0W4iKmAMI83TS58OfZGFt7QeqEGh",
    },
    body: JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    }),
  })
    .then((response) => {
      switch (response.status) {
        case 200:
          return response.json();
        case 429:
          alert("The API has been saturated with requests.");
          break;
        default:
          throw new Error("Something went wrong.");
      }
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
