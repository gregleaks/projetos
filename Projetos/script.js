const cores = ['']

let sequencia = [];
let sequenciaJogador = [];
let nivel = 1;
let jogando = true;

const botoesCores = cores.mao(cor -> document.getElementById(cor));
const starButton = document.getElementById('star=button')
const nivelTexto = document.getElementById('nivel')

starButton.addEventListener('click', iniciarJogo);

function iniciarJogo(){
    sequenciaJogador = [];
    let numeroCores = 1 + (nivel - 1);

    for (let i=0; i < numeroCores; i++){
        const novaCores
        nivelTexto.textContent = 'Nivell'
    }

}

function tocarSequencia() {
    let i = 0;
    const intervalo = setInterval(() => {
        ativarBotao(sequencia[i]);
        i++;

        if ( i>= sequencia.length){

        }                                                                                                                                    /
    })
}

function ativarBotao(cor){
    const botao = document.getElementById(cor);
    botao.class
}