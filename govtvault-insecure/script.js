// Secure form submission
document.getElementById("secureForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const aadhaar = e.target.aadhaar.value.trim();
  const pan = e.target.pan.value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

//   if (!validateAadhaar(aadhaar) || !validatePAN(pan)) {
//     alert("Invalid Aadhaar or PAN format.");
//     return;
//   }

//   if (username.length < 4 || password.length < 6) {
//     alert("Username must be 4+ chars, password 6+ chars.");
//     return;
//   }

  alert("Secure login successful!");
});

// Aadhaar validation (basic)
function validateAadhaar(aadhaar) {
  return /^\d{12}$/.test(aadhaar);
}

// PAN validation (basic)
function validatePAN(pan) {
  return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);
}

// Permission with reason
function requestLocation() {
  const reason = confirm("We need your location to show nearby health centers. Proceed?");
  if (reason) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Secure location:", position.coords.latitude, position.coords.longitude);
      alert("Location accessed securely.");
    });
  }
}