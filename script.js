import Livro from "./Livro.js";
let Livraria = [];
const container = document.getElementById('container');

export function addLivroParaLivraria(titulo, autor, paginas, lido){
    const uniqueId = crypto.randomUUID();
    const novoLivro = new Livro(uniqueId, titulo, autor, paginas, lido);
    Livraria.push(novoLivro);
}

export function mostrarLivros(){
    container.innerHTML = '';
    for(let livro of Livraria){
        const card = criarCard(livro);
        container.appendChild(card);
    }
}

function criarCard(livro){
    let lidoText = 'Não lido';
    let lidoClass = 'btnNaoLido';
    if(livro.lido){
        lidoClass = 'btnLido';
        lidoText = 'Lido';
    }
    const div = document.createElement('div');
    div.classList.add('card');
    div.dataset.livroId = livro.id;
    const dados = `
                <p class="titulo">${livro.titulo}</p>
                <p>por <a href="#">${livro.autor}</a></p>
                <p>${livro.paginas} páginas</p>
    `
    div.innerHTML = dados;

    const btnLido = document.createElement('button');
    btnLido.classList.add(lidoClass)
    btnLido.innerText = lidoText;
    btnLido.addEventListener('click', (e) => {
        e.preventDefault();
        const parentElem = e.target.parentElement;
        const livriId = parentElem.dataset.livroId;
        const livro = Livraria.find((livro) => livro.id === livriId);
        livro.toggleRead();
        mostrarLivros();
    });
    div.appendChild(btnLido);

    const btnRemover = document.createElement('button');
    btnRemover.classList.add('btnRemover')
    btnRemover.innerText = 'Remover';
    btnRemover.addEventListener('click', (e) => {
        e.preventDefault();
        const parentElem = e.target.parentElement;
        removerLivro(parentElem.dataset.livroId);
    });
    div.appendChild(btnRemover);

    return div;
}

function removerLivro(id){
    Livraria = Livraria.filter((livro) => livro.id !== id);
    mostrarLivros();
}

addLivroParaLivraria('1984', 'George Orwell', 328, true);
addLivroParaLivraria('Dom Casmurro', 'Machado de Assis', 240, false);
addLivroParaLivraria('Orgulho e Preconceito', 'Jane Austen', 424, true);
addLivroParaLivraria('Duna', 'Frank Herbert', 704, false);
addLivroParaLivraria('Harry Potter', 'J.K. Rowling', 264, false);
addLivroParaLivraria('Mais esperto que o Diabo', 'Napoleon Hill', 208, false);
mostrarLivros();


