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

    const aiText =
      data.choices?.[0]?.message?.content || "";

    output.innerHTML = aiText;

  } catch (error) {

    console.log(error);

    output.innerHTML = `
      <div class="dashboard">

        <h1>Luxury Fashion Dashboard</h1>

        <div class="card">
          <h2>Premium Collection</h2>
          <p>Modern luxury fashion styles ✨</p>
        </div>

      </div>
    `;
  }
}