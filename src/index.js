require("./config/db");
require("./config/populateDB")

const express = require("express");
const mainRouter = require("./api/routes/mainRouter.js")
const app = express();

app.use(express.json());

const booksRouter = require("./api/routes/books.js")
app.use("/", mainRouter);

const PORT = 4001;
app.listen(PORT, () => {
  console.log(
    `Servidor escuchando en el puerto ${PORT}: http://127.0.0.1:${PORT}`
  );
});
