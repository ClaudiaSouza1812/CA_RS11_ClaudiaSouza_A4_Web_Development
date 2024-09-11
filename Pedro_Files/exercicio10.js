/* 
Exercício 10

Criar uma função que receba como parâmetro uma string e devolva o número de palavras existentes na string.

Podem resolver o exercício utilizando métodos/propriedades disponíveis no JavaScript, mas também terão de resolver o exercício sem esses métodos/propriedades.

*/

function numeroPalavras(texto) {
    // let palavras = texto.split(' ');

    // trim() - remove whitespace (espaços, tabs e CR/LF) do início e do fim da string
    // na regex, \s quer dizer whitespace
    // na regex, + quer dizer 1 ou mais ocorrências do caracter anterior
    // na regex, g quer dizer global, isto é, todas as ocorrências
    // let palavras = texto.replace(/\s+/g, ' ').trim().split(' ');

    // return palavras.length;

    return texto.replace(/\s+/g, ' ').trim().split(' ').length;

}
console.log(numeroPalavras('Número de palavras existentes na string.')); // 6
console.log(numeroPalavras('Número     de    palavras      existentes na string.')); // 6

function numeroPalavras_v2(texto) {
    let numeroTotal = 0;
    let palavra = false;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== ' ' && !palavra) {
            numeroTotal++;
            palavra = true;
        } else if (texto[i] === ' ') {
            palavra = false;
        }
    }

    return numeroTotal;
}
console.log(numeroPalavras_v2('Número de palavras existentes na string.')); // 6

