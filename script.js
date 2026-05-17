async function generateUI() {

  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");

  output.innerHTML = "Generating AI Design...";

  try {

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    console.log(data);

    const aiText = data.choices?.[0]?.message?.content;

    output.innerHTML = `
      <div class="dashboard">
        <h2>Luxury Fashion AI Design</h2>
        <pre>${aiText}</pre>
      </div>
    `;

  } catch (error) {
    console.log(error);

    output.innerHTML = `
      <h2>Luxury Fashion Dashboard</h2>
      <p>Generated fallback design ✨</p>
    `;
  }
}