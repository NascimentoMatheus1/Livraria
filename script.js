const container = document.getElementById('container');
const tbody = document.getElementById('tbody');
const Livraria = [];

function Livro (id, titulo, autor, paginas, lido) {
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = lido;
}

Livro.prototype.info =  function(){
        return `${this.titulo} por ${this.autor}, ${this.paginas} paginas, ${this.lido}`
}

function addLivroParaLivraria(titulo, autor, paginas, lido){
    const uniqueId = crypto.randomUUID();
        
    const novoLivro = new Livro(uniqueId, titulo, autor, paginas, lido);

    Livraria.push(novoLivro);
}

function mostrarLivros(){
    for(let livro of Livraria){
        let lido = 'Não';
        if(livro.lido){
            lido = 'Sim';
        }
        const tr = document.createElement('tr');
        const dados = `
                <td>${livro.titulo}</td>
                <td>${livro.autor}</td>
                <td>${livro.paginas}</td>
                <td>${lido}</td>
        `
        tr.innerHTML = dados;
        tbody.appendChild(tr);
    }
}

addLivroParaLivraria('1984', 'George Orwell', 328, true);
addLivroParaLivraria('Dom Casmurro', 'Machado de Assis', 240, false);
addLivroParaLivraria('Orgulho e Preconceito', 'Jane Austen', 424, true);
addLivroParaLivraria('Duna', 'Frank Herbert', 704, false);
addLivroParaLivraria('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 264, false);
mostrarLivros();