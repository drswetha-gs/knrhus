const data = [
  {
    question: "Rectal Prolapse.",
    pdf: ""
  },
  {
    question: "Operative surgery for WHIPPLE procedure.",
    pdf: ""
  },
  {
    question: "HIATUS Hernia.",
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