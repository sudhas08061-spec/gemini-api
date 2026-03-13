async function askGemini(){

let question = document.getElementById("question").value

let prompt = `
You are a scholar of Hindu philosophy.

Answer using:
- Bhagavad Gita
- Upanishads
- Vedas
- Ramayana
- Mahabharata

Explain the teaching clearly.

Question: ${question}
`

let response = await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
contents:[
{
parts:[
{ text: prompt }
]
}
]
})
})

let data = await response.json()

let answer =
data.candidates[0].content.parts[0].text

document.getElementById("answer").innerText = answer

}
