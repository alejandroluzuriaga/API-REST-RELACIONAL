require("./config/db");

const express = require("express");
const mainRouter = require("./api/routes/mainRouter.js")
const app = express();

app.use(express.json());

const booksRouter = require("./api/routes/books.js")
app.use("/", mainRouter);

app.use('*', (req, res, next) => {
  res.status(404).json({ data: 'Página no encontrada' })
})

app.use((error, req, res, next) => {
  res.status(500).json({ data: 'Error interno del servidor' })
})

const PORT = 4001;
app.listen(PORT, () => {
  console.log(
    `Servidor escuchando en el puerto ${PORT}: http://localhost:${PORT}`
  );
});
