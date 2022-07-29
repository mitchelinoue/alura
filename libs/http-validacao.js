function geraArrayDeURLs(arrayLinks) {
    let atual = 0;
    let arrayResultado = []
    while (atual < arrayLinks.length) {
        let arrayAtual = arrayLinks[atual];
        arrayResultado.push(arrayAtual.map(objetoLink => Object.values(objetoLink).join()));
        atual++
    }
    let arrayFinal = [].concat(...arrayResultado)
    return arrayFinal
}


export default function validaURLs(arrayLinks) {
    return geraArrayDeURLs(arrayLinks);
}

