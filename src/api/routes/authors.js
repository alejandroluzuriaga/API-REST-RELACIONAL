const express = require("express");
const { getTodosLosAutores, getAutorPorID, crearAutor, actualizarAutor, eliminarAutor } = require("../controllers/authors.js");
const router = express.Router();

router.get("/", getTodosLosAutores)
router.get("/:id", getAutorPorID)
router.post("/", crearAutor)
router.put("/:id", actualizarAutor)
router.delete("/:id", eliminarAutor)
router.get("*", (req, res) => {
    res.status(404).json({ error: "Ruta no encontrada en autores" });
  });
module.exports = router