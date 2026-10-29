import express from "express";
import pokemon from "./pokemon.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(pokemon);
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
