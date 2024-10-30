const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')
const larguraCanvas = 320;
const alturaCanvas = 480;
canvas.width = larguraCanvas; 
canvas.height = alturaCanvas; 


let passaro = {
    x: 50,
    y: alturaCanvas / 2,
    largura: 30,
    altura: 30,
    gravidade: 0.5,
    impulso: -10,
    velocidade: 0,
    cor: 'yellow',
}

let canos = [];
const larguraCano = 50;
const espacoCano = 150;
const velocidadeCano = 2;
let pontuacao = 0;
let recorde = 0;
let jogoAcabado = true;   


function desenharPassaro() {
    ctx.fillStyle = passaro.cor; 
    ctx.fillRect(passaro.x, passaro.y, passaro.largura, passaro.altura)
}

function desenharCanos() {
    canos.forEach(cano => {
        ctx.fillStyle = 'green';  
        ctx.fillRect(cano.x, 0, larguraCano, cano.topo) 
        ctx.fillRect(cano.x, alturaCanvas - cano.fundo, larguraCano, cano.fundo) 
    });
}

function desenharPlacar() {
    ctx.font = '20px Arial';
    ctx.fillText(`Pontuação: ${pontuacao}`, 10, 50); 
    ctx.fillStyle = 'black';
}

function desenharRecorde() {
    ctx.fillStyle = 'red';
    ctx.font = '20px Arial';
    ctx.fillText(`Recorde: ${recorde}`, 10, 30);
}

function atualizarPassaro() {
    
    passaro.velocidade += passaro.gravidade
    passaro.y += passaro.velocidade

    if (passaro.y + passaro.altura > alturaCanvas) {
        passaro.y = alturaCanvas - passaro.altura;
        passaro.velocidade = 0;
    }
    if (passaro.y < 0) {
        passaro.y = 0;
        passaro.velocidade = 0;
    }
}


function atualizarCanos() {
    canos.forEach(cano => {
        cano.x -= velocidadeCano;
    });

    if (canos.length > 0 && canos[0].x + larguraCano < 0) {
        canos.shift(); 
        pontuacao++;
        if (pontuacao > recorde) {
            recorde = pontuacao
        }
    }

    if (canos.length === 0 || canos[canos.length - 1].x < larguraCanvas - 150) {
        const alturaTopoCano = Math.floor(Math.random() * (alturaCanvas - espacoCano));
        canos.push({
            x: larguraCanvas,
            topo: alturaTopoCano,
            fundo: alturaCanvas - espacoCano - alturaTopoCano
        });
    }

}


function verificarColisao() {
    for (const cano of canos) {
        if (passaro.x < cano.x + larguraCano &&
            passaro.x + passaro.largura > cano.x && (
                passaro.y < cano.topo || passaro.y + passaro.altura >
                alturaCanvas - cano.fundo)
        ) {
            return true
        }
    }
    return false;
}


function desenhar(){
    ctx.fillRect(0, 0, larguraCanvas, alturaCanvas);
    desenharPassaro();
    desenharCanos();
    desenharRecorde();
    desenharPlacar();
}


function atualizar(){
    if(!jogoAcabado){
        atualizarPassaro();
        atualizarCanos();
        if(verificarColisao()){
            jogoAcabado = true;
            alert(`Game over! sua pontuação foi ${pontuacao}.`)
            reiniciarJogo();
            return;
        }
        desenhar();
    }
}

function loop(){
    atualizar();
    requestAnimationFrame(loop);
}


function reiniciarJogo(){

    passaro = {
        x: 50,
        y: alturaCanvas / 2,
        largura: 30,
        altura: 30,
        gravidade: 0.5,
        impulso: -10,
        velocidade: 0,
        cor: 'yellow',
    };

    canos = [];
    pontuacao = 0;
    jogoAcabado = false;  
}

canvas.addEventListener('click', () => {
    if(!jogoAcabado) {
        passaro.velocidade = passaro.impulso 
    }
});

document.addEventListener('DOMContentLoaded', () => {
    reiniciarJogo(); 
    loop(); 
})