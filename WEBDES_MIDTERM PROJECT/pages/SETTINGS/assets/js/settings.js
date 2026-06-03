function saveSettings() {
    const popup = document.getElementById("settingsPopup");
    popup.style.display = "block";
}

function closeSettingsPopup() {
    const popup = document.getElementById("settingsPopup");
    popup.style.display = "none";
}

function redirectHome() {
    window.location.href = "/index.html";
}