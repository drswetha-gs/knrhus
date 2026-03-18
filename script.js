const data = [
  {
    date: "2026-03-17",
    question: "What is Artificial Intelligence?",
    pdf: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/pdfs/ai.pdf"
  },
  {
    date: "2026-03-19",
    question: "What is Machine Learning?",
    pdf: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/pdfs/ml.pdf"
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