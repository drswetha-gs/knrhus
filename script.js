const page = window.location.pathname;

let data = [];

if (page.includes("pyq")) {
  data = [
    { question: "Rectal Prolapse", pdf: "" },
    { question: "Whipple Procedure", pdf: "" }
  ];
}

else if (page.includes("viva")) {
  data = [
    { question: "Long case: Breast Case Presentation", pdf: "" },
    { question: "Short case: Hernia", pdf: "" }
  ];
}

else if (page.includes("instruments")) {
  data = [
    { question: "Identify surgical instruments", pdf: "" }
  ];
}

else if (page.includes("xray")) {
  data = [
    { question: "X-ray interpretation", pdf: "" }
  ];
}

else if (page.includes("spotters")) {
  data = [
    { question: "Spotter", pdf: "" }
  ];
}

// Render same UI
const container = document.getElementById("qa-container");

if (container) {
  data.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";

    let content = `
      <div class="card-row">
        <div class="left">
          <h3>Question ${index + 1}</h3>
          <p>${item.question}</p>
        </div>
        <div class="right">
    `;

    if (item.pdf && item.pdf.trim() !== "") {
      content += `
        <a href="${item.pdf}" target="_blank" download>
          📥 Download Answer
        </a>
      `;
    } else {
      content += `<p class="pending">⏳ Yet to update</p>`;
    }

    content += `
        </div>
      </div>
    `;

    card.innerHTML = content;
    container.appendChild(card);
  });
}