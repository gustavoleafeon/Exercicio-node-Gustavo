import express from "express";
import pets from "./pets.js";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  resposta.send(pets);
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
