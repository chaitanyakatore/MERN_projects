const express = require("express");
const users = require("./MOCK_DATA.json");
const PORT = 8000;
const app = express();

//Routes
app.get("/users", (req, res) => {
  const html = `
  <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`)}
  </ul>
  `;
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.listen(PORT, () => console.log(`server has startted at PORT:${PORT}`));
