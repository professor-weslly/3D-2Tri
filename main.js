const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "coloque o enunciado da pergunta 1",
        alternativas: [
            {
                texto: "Primeira alternativa",
                afirmacao: "afirmação que explica o motivo de escolher essa opção"
            },
            {
                texto: "Primeira alternativa",
                afirmacao: "afirmação que explica o motivo de escolher essa opção"
            }
        ]
},
{
    enunciado: "coloque o enunciado da pergunta 2",
    alternativas: [
        {
            texto: "Primeira alternativa",
            afirmacao: "afirmação que explica o motivo de escolher essa opção"
      },
        {
            texto: "Primeira alternativa",
            afirmacao: "afirmação que explica o motivo de escolher essa opção"
      }
    ]
},
{
    enunciado: "coloque o enunciado da pergunta 3",
    alternativas: [
        {
            texto: "Primeira alternativa",
            afirmacao: "afirmação que explica o motivo de escolher essa opção"
      },
        {
            texto: "Primeira alternativa",
            afirmacao: "afirmação que explica o motivo de escolher essa opção"
      }
    ]
},
{
    enunciado: "coloque o enunciado da pergunta 4",
    alternativas: [
        {
            texto: "Primeira alternativa",
            afirmacao: "afirmação que explica o motivo de escolher essa opção"
      },
        {
            texto: "Primeira alternativa",
            afirmacao: "afirmação que explica o motivo de escolher essa opção"
      }
    ]
},
{
    enunciado: "coloque o enunciado da pergunta 5",
    alternativas: [
        {
            texto: "Primeira alternativa",
            afirmacao: "afirmação que explica o motivo de escolher essa opção"
      },
        {
            texto: "Primeira alternativa",
            afirmacao: "afirmação que explica o motivo de escolher essa opção"
      }
    ]
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement('button');
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.append(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Esse texto é a introdução para juntar todas as afirmações das respostas..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
