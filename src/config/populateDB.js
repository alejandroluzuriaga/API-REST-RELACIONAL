const seed = require("../api/seed/seed.js");
const {Libro, Autor} = require("../api/models/models.js");

const main = async () => {
  await Libro.collection.drop();
  await Autor.collection.drop();
  await Autor.insertMany(seed.autores)
  await Libro.insertMany(seed.libros);
};

main()
  .then(() => {
  })
  .catch((err) => {
    console.log("Error lanzando script!", err);
    process.exit(1);
  });