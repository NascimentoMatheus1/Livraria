import Livro from "./Livro.js";
let Livraria = getLivros();
const container = document.getElementById('container');

export function addLivroParaLivraria(titulo, autor, paginas, lido){
    const uniqueId = crypto.randomUUID();
    const novoLivro = new Livro(uniqueId, titulo, autor, paginas, lido);
    Livraria.push(novoLivro);
    saveLivros();
}

export function mostrarLivros(){
    container.innerHTML = '';
    saveLivros();
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
        if(livro.lido){
            livro.lido = false;
        }else{
            livro.lido = true;
        }
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

function saveLivros(){
    localStorage.setItem('Livraria', JSON.stringify(Livraria));
}

function getLivros(){
    let key = localStorage.getItem('Livraria') || "[]";
    return JSON.parse(key);
}

mostrarLivros();