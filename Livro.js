export default function Livro (id, titulo, autor, paginas, lido) {
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = lido;
}

