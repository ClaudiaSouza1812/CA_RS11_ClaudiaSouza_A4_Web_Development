let dados = [90,190,20,240,340,220,470,60,430,460,400];

for (var j = 0; j < dados.length - 1; j++) {
    for (var i = 0; i < dados.length - 1; i++) {
        if ( dados[i] > dados[i + 1] ) {
            let n = dados[i];
            dados[i] = dados[i + 1];
            dados[i + 1] = n;
        }
    }
}

console.log(dados);

