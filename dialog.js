import { mostrarLivros, addLivroParaLivraria } from "./script.js";
const addLivro = document.getElementById("addLivro");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("AddDialog");
const form = document.querySelector('form');

addLivro.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.showModal();
});

cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(e.target)
  const { titulo, autor, pag, lido} = Object.fromEntries(data.entries());
  form.reset();
  dialog.close();

  addLivroParaLivraria(titulo, autor, pag, lido);
  mostrarLivros();
})
