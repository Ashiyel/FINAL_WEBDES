const scriptURL = "https://script.google.com/macros/s/AKfycbzTCsvF2eFvgxMU4sBydHD1kfCnupMbKmiFrzNhUScR_R-GHpO_5q_Rpl33AabBKPpkOg/exec";
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
  .then(response => response.text())
  .then(result => {
    responseMsg.textContent = "";
    popup.style.display = "block";
  })
  .catch(error => {
    responseMsg.textContent = "Error sending message.";
    console.error("Error!", error.message);
  });
});

// ✅ User wants to submit another response
function submitAnother() {
  popup.style.display = "none";
  form.reset();
}

// ✅ User wants to go home
function goHome() {
  window.location.href = "/index.html";
}
