const livros = require('../../listaLivros');
const menorValor = require('../../menorValor');

// for (let atual2 = 0; atual2 < livros.length; atual2++) {
//     let menor = menorValor(livros, atual2);

//     let livroAtual = livros[atual2];
//     console.log('posição atual', atual2);
//     console.log('livro atual', livros[atual2])
//     let livroMenorPreco = livros[menor];
//     console.log('livro menor preço,', livros[menor])

//     livros[atual2] = livroMenorPreco;
//     livros[menor] = livroAtual;

// }

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
   
    let livroAtual = livros[indice];
    console.log('posição atual', indice);
    console.log('livro atual', livros[indice])
    let livroMenorPreco = livros[menor];
    console.log('livro menor preço,', livros[menor])
   
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
   })


console.log(livros)