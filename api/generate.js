export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  try {

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `
Generate ONLY clean HTML for a luxury fashion dashboard UI.

Requirements:
- black luxury theme
- gold accents
- modern navbar
- hero section
- fashion product cards
- stylish premium UI
- responsive design
- NO explanations
- ONLY HTML
`
          }
        ]
      })
    });

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
}