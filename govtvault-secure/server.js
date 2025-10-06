const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// Aadhaar & PAN validation
function isValidAadhaar(aadhaar) {
  return /^\d{12}$/.test(aadhaar);
}

function isValidPAN(pan) {
  return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);
}

app.get("/", (req, res) => {
  res.send("GovtVault Secure Server is running.");
});

app.post("/submit", (req, res) => {
  const { aadhaar, pan, username, password } = req.body;

  if (!isValidAadhaar(aadhaar) || !isValidPAN(pan)) {
    return res.status(400).json({ error: "Invalid Aadhaar or PAN format." });
  }

  // if (!username || username.length < 4 || !password || password.length < 6) {
  //   return res.status(400).json({ error: "Invalid username or password." });
  // }

  console.log("Secure data received:", { aadhaar, pan, username });
  res.json({ message: "Secure login successful!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
