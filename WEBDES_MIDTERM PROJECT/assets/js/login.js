const scriptURL = "https://script.google.com/macros/s/AKfycbyq2TcIh-bV9QDSRzcE0wXXcRdlfyphDAYnogUKBbUwjAft5AmN8KxmYu1njbzDszAE/exec";
const form = document.getElementById("contact-form");
const responseMsg = document.getElementById("response");
const popup = document.getElementById("confirmationPopup");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(result => {
    if (result.result === "success") {
      responseMsg.textContent = "";
      popup.style.display = "flex";
    } else {
      responseMsg.textContent = "Failed to submit. Try again.";
      console.error("Script error:", result);
    }
  })
  .catch(error => {
    responseMsg.textContent = "Error sending message.";
    console.error("Network error!", error.message);
  });
});

function submitAnother() {
  popup.style.display = "none";
  form.reset();
}

function goHome() {
  window.location.href = "/index.html";
}
