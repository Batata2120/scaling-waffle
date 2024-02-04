export {criarPersonagem, pegarImagem};

async function criarPersonagem(localizacao){
    let personagem = (await fetch(localizacao)).json();
        
    return(personagem);
}

function pegarImagem(dados){
    return(dados["imagem"]);
}