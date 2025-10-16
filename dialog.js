import { mostrarLivros } from "./script.js";
const addLivro = document.getElementById("addLivro");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("AddDialog");
const form = document.querySelector('form');


addLivro.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.showModal();
  console.log(dialog.returnValue)
});

cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
  console.log(dialog.returnValue)
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(e.target)
  const { titulo, autor, pag, lido} = Object.fromEntries(data.entries());
  console.log(titulo, autor, pag, lido);

  addLivroParaLivraria(titulo, autor, pag, lido);
  mostrarLivros();
})
