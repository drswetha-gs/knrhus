const data = [
  {
    question: "Discuss the management of carcinoma stomach.",
    pdf: "https://raw.githubusercontent.com/drswetha-gs/knrhus/b87feb74396e8f053a04c7e847fd32554f403a2c/Book%2021%20Mar%202025.pdf"
  },
  {
    question: "Enumerate causes and management of obstructive jaundice.",
    pdf: ""
  },
  {
    question: "Describe the clinical features and management of thyroid nodules.",
    pdf: ""
  }
];

const container = document.getElementById("qa-container");

data.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "card";

  let content = `
    <h3>📝 Question ${index + 1}</h3>
    <p>${item.question}</p>
    <span class="badge">Final Year Prep</span>
  `;

  if (item.pdf && item.pdf.trim() !== "") {
    content += `
      <br>
      <a href="${item.pdf}" target="_blank" download>
        📥 Download Answer
      </a>
    `;
  } else {
    content += `<p>⏳ Yet to update</p>`;
  }

  card.innerHTML = content;
  container.appendChild(card);
});