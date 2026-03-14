export async function generateContent({
  apiKey,
  model,
  content,
  systemInstruction,
  schema,
}: {
  apiKey: string
  model: string
  content: string
  systemInstruction: string
  schema: any
}) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: content }] }],
        systemInstruction: { parts: [{ text: systemInstruction }] },
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: schema,
        },
      }),
    },
  )
  const json = await res.json()
  return json.candidates?.[0]?.content?.parts?.[0]?.text
}
