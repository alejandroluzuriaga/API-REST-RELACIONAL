const {Autor} = require("../models/models.js")

const getTodosLosAutores = async (req, res) => {
    try {
      const autores = await Autor.find().lean();
  
      if (!autores) {
        return res.status(404).json({ error: "No hay autores en la BD" });
      }
  
      res.status(200).json({ data: autores });
    } catch (err) {
      console.log("API error:", err);
      res.status(500).json({ data: "Unexpected server error" });
    }
  };
  
  const getAutorPorID = async (req, res) => {
    try {
      const { id } = req.params;
      const autor = await Autor.findById(id);
      if (!autor) {
        return res.status(404).json({ error: "No existe este autor en la BD" });
      }
      res.status(200).json({ data: autor });
    } catch (err) {
      console.log("API error:", err);
      res.status(500).json({ data: "Unexpected server error" });
    }
  };
  
  const crearAutor = async (req, res) => {
    try {
      const autor = new Autor({
        name: req.body.name,
      });
  
      await autor.save();
  
      res.status(201).json({ data: autor });
    } catch (err) {
      console.log("API error:", err);
      res.status(500).json({ data: "Unexpected server error" });
    }
  };
  
  const actualizarAutor = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
  
    try {
      const actualizacion = {};
      if (nombre !== null) actualizacion.nombre = nombre;
  
      if (Object.keys(actualizacion).length === 0) {
        return res
          .status(400)
          .json({ error: "No se proporcionaron campos para actualizar" });
      }
  
      const autorActualizado = await Autor.findByIdAndUpdate(id, actualizacion, {
        new: true,
      });
  
      if (!autorActualizado) {
        return res.status(404).json({ error: "Libro no encontrado" });
      }
  
      res.status(200).json({ data: autorActualizado });
    } catch (err) {
      console.log("API error:", err);
      res.status(500).json({ data: "Unexpected server error" });
    }
  };
  
  const eliminarAutor = async (req, res) => {
    const { id } = req.params;
    try {
      const autor = await Autor.findById(id);
  
      if (!autor) {
        return res.status(404).json({ error: "No hay libros en la BD" });
      } else {
        await Autor.deleteOne({ _id: id });
        return res.status(200).json({ data: `Autor borrado: ${id}` });
      }
    } catch (err) {
      console.log("API error:", err);
      res.status(500).json({ data: "Unexpected server error" });
    }
  };

  module.exports = {
    getTodosLosAutores,
    getAutorPorID,
    crearAutor,
    actualizarAutor,
    eliminarAutor
  }