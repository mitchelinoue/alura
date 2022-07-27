function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;

  for (let atual1 = posicaoInicial; atual1 < arrProdutos.length; atual1++) {
    if (arrProdutos[atual1].preco < arrProdutos[maisBarato].preco) {
        maisBarato = atual1
    }
  }
  return maisBarato;
}

module.exports = menorValor;