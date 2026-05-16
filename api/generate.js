export default async function handler(req, res) {

  const apiKey = process.env.OPENROUTER_API_KEY;

  const { prompt } = req.body;

  try {

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          model: "openai/gpt-3.5-turbo",

          messages: [
            {
              role: "user",

              content:
              `Generate modern UI for:
              ${prompt}`
            }
          ]

        })

      }
    );

    const data = await response.json();

    res.status(200).json(data);

  }

  catch(error){

    res.status(500).json({
      error:"Something went wrong"
    });

  }

}