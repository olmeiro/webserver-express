const express = require("express");
const app = express();

const hbs = require("hbs");
require("./hbs/helpers/helpers");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

//hbs express engine:
hbs.registerPartials(__dirname + "/views/parciales");
app.set("view engine", "hbs");

//helpers:
hbs.registerHelper("getAnio", () => {
  return new Date().getFullYear();
});
hbs.registerHelper("capitalizar", (texto) => {
  let palabras = texto.split(" ");
  palabras.forEach((palabra, idx) => {
    palabras[idx] =
      palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });

  return palabras.join(" ");
});

app.get("/", function (req, res) {
  //   res.send("Hello World");
  //   let salida = {
  //     nombre: "Olmeiro",
  //     edad: 25,
  //     url: req.url,
  //   };

  //   res.send(salida);
  res.render("home", {
    nombre: "olmeiro",
    // anio: new Date().getFullYear(),
  }); //usando hbs
});

app.get("/about", (req, res) => {
  res.render("about", {
    // anio: new Date().getFullYear(),
  });
});

app.get("/data", function (req, res) {
  res.send("Hello data");
});

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
