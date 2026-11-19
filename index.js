const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Render Task</h1>
    <p>Endpoints:</p>
    <ul>
      <li><a href="/message">/message</a></li>
      <li><a href="/about">/about</a></li>
      <li><a href="/random-number">/random-number</a></li>
    </ul>
  `);
});

app.get("/message", (req, res) => {
  res.json({ message: "Hi there! Welcome :)" });
});

app.get("/about", (req, res) => {
  res.json({ name: "Sander", project: "A simple Render task using express!" });
});

app.get("/random-number", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.json({ number: randomNumber });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
