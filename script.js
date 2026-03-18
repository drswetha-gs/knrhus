const data = [
  {
    date: "2026-03-17",
    question: "What is Artificial Intelligence?",
    pdf:"https://github.com/drswetha-gs/knrhus/blob/b87feb74396e8f053a04c7e847fd32554f403a2c/Book%2021%20Mar%202025.pdf"
  }
];

// 📅 Get dates
const today = new Date().toISOString().split("T")[0];
const yesterday = new Date(Date.now() - 86400000)
  .toISOString()
  .split("T")[0];

const todayItem = data.find(d => d.date === today);
const yesterdayItem = data.find(d => d.date === yesterday);

// Show question
document.getElementById("question").innerText =
  todayItem ? todayItem.question : "No question today";

// 📧 Validate Gmail
function isValidGmail(email) {
  return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
}

// 🔓 Verify + Open PDF
function verifyAndOpen() {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");

  if (!isValidGmail(email)) {
    message.innerText = "❌ Please enter a valid Gmail address";
    return;
  }

  if (!yesterdayItem) {
    message.innerText = "Answer not available yet";
    return;
  }

  message.innerText = "✅ Access granted! Opening PDF...";

  // Open GitHub PDF
  window.open(yesterdayItem.pdf, "_blank");
}