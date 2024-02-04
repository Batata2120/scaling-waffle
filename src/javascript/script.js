import * as funcoes from './funcoes.js';

let localizacaoPersonagens = ["https://localhost/teste/src/personagens/leolicon.json"];
let personagens = [];

localizacaoPersonagens.forEach(localizacao => {
    personagens.push(funcoes.criarPersonagem(localizacao));
    console.log(personagens[0]);
});

let div = document.querySelector("div");

personagens.forEach(perso =>{
    perso.then(dados =>{
        console.log(dados);
        console.log(funcoes.pegarImagem(dados))
        let imagem = funcoes.pegarImagem(dados);
        console.log(imagem);
        console.log(div.style.backgroundImage);
        div.style.backgroundImage = "url(" + imagem + ")";
        console.log(div.style.backgroundImage);
    })
})
