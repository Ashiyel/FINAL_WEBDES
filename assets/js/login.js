const scriptURL = "https://script.google.com/macros/s/AKfycbzblvI_7UM6b4wl9XAeMinvgPIyuDqIIWlBeK8x2hv_6M43BDm7OeghfB_twcOyE-jJTw/exec";
const form = document.getElementById("contact-form");
const responseMsg = document.getElementById("response");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(result => {
    responseMsg.textContent = "Message sent successfully!";
    form.reset();
  })
  .catch(error => {
    responseMsg.textContent = "Error sending message.";
    console.error("Error!", error.message);
  });
});
