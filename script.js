import Livro from "./Livro.js";
const Livraria = [];
const container = document.getElementById('container');

export default function addLivroParaLivraria(titulo, autor, paginas, lido){
    const uniqueId = crypto.randomUUID();
    const novoLivro = new Livro(uniqueId, titulo, autor, paginas, lido);
    Livraria.push(novoLivro);
}

export function mostrarLivros(){
    for(let livro of Livraria){
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
                <p>lido: ${lidoText}</p>
                <button class="${lidoClass}">${lidoText}</button>
                <button class="btnRemover">Remover</button>
        `
        div.innerHTML = dados;
        container.appendChild(div);
    }
}

addLivroParaLivraria('1984', 'George Orwell', 328, true);
addLivroParaLivraria('Dom Casmurro', 'Machado de Assis', 240, false);
addLivroParaLivraria('Orgulho e Preconceito', 'Jane Austen', 424, true);
addLivroParaLivraria('Duna', 'Frank Herbert', 704, false);
addLivroParaLivraria('Harry Potter', 'J.K. Rowling', 264, false);
addLivroParaLivraria('Mais esperto que o Diabo', 'Napoleon Hill', 208, false);
mostrarLivros();


