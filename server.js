const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const usuariaRoutes = require("./src/routes/usuariaRoutes");
const joiaRoutes = require("./src/routes/joiaRoutes");
const vendaRoutes = require("./src/routes/vendaRoutes");

app.use("/api/usuarias", usuariaRoutes);
app.use("/api/joias", joiaRoutes);
app.use("/api/vendas", vendaRoutes);

app.get("/", (req, res) => {
res.send("API Hilary Grace rodando ✨💎");
});

app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});