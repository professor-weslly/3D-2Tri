const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Qual a sua idade ?",
        alternativas:[
            {
                texto:"10~12"
                afirmacao:"afirmação",
            },
            {
                texto:"12~14"
                afirmacao:"afirmação",
            },
            {
                texto:"14~16"
                afirmacao:"afirmação",
            },
            {
                texto:"16~18"
                afirmacao:"afirmação",
            },
        ]
    },
    {
        enunciado:"Qual a sua série",
        alternativas:[
            {
                texto:"6º"
                afirmacao:"afirmação",
            },
            {
                texto:"8º"
                afirmacao:"afirmação",
            },
            {
                texto:"1º ensino médio"
                afirmacao:"afirmação",
            },
            {
                texto:"2º ensino médio"
                afirmacao:"afirmação",
            },
            {
                texto:"3º ensino médio"
                afirmacao:"afirmação",
            },
        ]
    },
    {
        enunciado:"Qual a sua matéria fovorita ?",
        alternativas:[
            {
                texto:"Matemática"
                afirmacao:"afirmação",
            },
            {
                texto:"Portugues"
                afirmacao:"afirmação",
            },
            {
                texto:"Quimica"
                afirmacao:"afirmação",
            },
            {
                texto:"Historia"
                afirmacao:"afirmação",
            },
            {
                texto:"Programação"
                afirmacao:"afirmação",
            },
            {
                texto:"Outra"
                afirmacao:"afirmação",
            },
        ]
    },
    {
        enunciado:"O que você mais gosta na escola ?",
        alternativas:[
            {
                texto:"Aulas"
                afirmacao:"afirmação",
            },
            {
                texto:"Materia Livre"
                afirmacao:"afirmação",
            },
            {
                texto:"Intervalo"
                afirmacao:"afirmação",
            },
            {
                texto:"Ir embora"
                afirmacao:"afirmação",
            },
        ]
    },
    {
        enunciado:"Você gostou do questionario ?",
        alternativas:[
            {
                texto:"Sim"
                afirmacao:"afirmação",
            },
            {
                texto:"Claro"
                afirmacao:"afirmação",
            },
            {
                texto:"Obivio"
                afirmacao:"afirmação",
            },
        ]
    }
];

let atual =0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent =alternativa;
        botaoAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();