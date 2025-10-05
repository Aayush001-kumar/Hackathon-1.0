// Simulate permission misuse
function getLocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("User location:", position.coords.latitude, position.coords.longitude);
    alert("Location accessed without clear reason!");
  });
}

// Simulate functional flaw
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  alert("Logged in as " + user + " without validation!");
}
document.getElementById("secureForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const aadhaar = e.target.aadhaar.value.trim();
  const pan = e.target.pan.value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const response = await fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ aadhaar, pan, username, password })
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message);
    } else {
      alert(result.error);
    }
  } catch (err) {
    alert("Server error. Please try again.");
  }
});