const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Qual a sua idade ?",
        alternativas:[
            "10~12",
            "12~14",
            "14~16",
            "16~18",
        ]
    },
    {
        enunciado:"Qual a sua série",
        alternativas:[
            "6º",
            "8º",
            "1º ensino médio",
            "2º ensino médio",
            "3º ensino médio",
        ]
    },
    {
        enunciado:"Qual a sua matéria fovorita ?",
        alternativas:[
            "Matemática",
            "Portugues",
            "Quimica",
            "Historia",
            "Programação",
            "Outra",
        ]
    },
    {
        enunciado:"O que você mais gosta na escola ?",
        alternativas:[
            "Aulas",
            "Materia Livre",
            "Intervalo",
            "Ir embora",
        ]
    },
    {
        enunciado:"Você gostou do questionario ?",
        alternativas:[
            "Sim",
            "Claro",
            "Obivio",
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