const mongoose = require("mongoose");

const emptySchema = new mongoose.Schema({});

const Libro = mongoose.model("Libro", emptySchema);
const Autor = mongoose.model("Autor", emptySchema);

module.exports = {Libro, Autor};
