function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.querySelector('input[name="address"]').value.trim();
  const age = document.querySelector('input[name="age"]').value.trim();
  const genderChecked = document.querySelector('input[name="gender"]:checked');
  const sdgChecked = document.querySelectorAll('input[name="sdg"]:checked');

  if (!name || !email || !address || !age) {
    alert("Please complete all required fields: name, email, address, and age.");
    return false;
  }

  const ageNumber = Number(age);
  if (isNaN(ageNumber) || ageNumber <= 0) {
    alert("Please enter a valid age greater than 0.");
    return false;
  }

  if (!genderChecked) {
    alert("Please select a gender.");
    return false;
  }

  if (sdgChecked.length === 0) {
    alert("Please select at least one Sustainable Development Goal.");
    return false;
  }

  alert("🎉 Registration Successful! Thank you for submitting the form.");
  return true;
}

document.querySelectorAll('input[name="sdg"]').forEach((checkbox) => {
  checkbox.addEventListener("mouseenter", function () {
    const bgColor = this.dataset.bg;
    if (bgColor) document.body.style.backgroundColor = bgColor;
  });

  checkbox.addEventListener("mouseleave", function () {
    document.body.style.backgroundColor = "#f4f8fb"; // original background
  });
});
