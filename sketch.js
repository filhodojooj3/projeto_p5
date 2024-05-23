//variáveis da Bola
let xBola =300;
let yBola =200;
let diametro =20;
let raio = diametro / 2; 

//velociade da Bola
let velocidadexBola = 6;
let velocidadeyBola = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let RaqueteComprimento = 10;
let RaqueteAltura = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente; 

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha; 

function preload (){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBola();
  movimentoBola();
  verificaColisao();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  IncluirPlacar();
  marcaPonto();
}

function mostraBola(){
    circle (xBola, yBola,diametro) ;
  }

 function movimentoBola(){ 
  xBola += velocidadexBola;
  yBola += velocidadeyBola;
 }
 
 function verificaColisao(){
  if (xBola + raio> width ||
     xBola - raio< 0){ 
    velocidadexBola *= -1;
  }
  if (yBola + raio> height ||
      yBola - raio< 0){ 
    velocidadeyBola *= -1;
}
 }

function mostraRaquete(x,y){
rect (x, y, RaqueteComprimento, RaqueteAltura);
}

function mostraRaqueteOponente() {
    rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}


function movimentaMinhaRaquete (){
  if (keyIsDown("87")){
    yRaquete -= 10;
  }
  
  if (keyIsDown("83")){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete (){
  if (xBola - raio < xRaquete + RaqueteComprimento && yBola - raio < yRaquete + RaqueteComprimento && yBola + raio > yRaquete){
    velocidadexBola *= -1;
    raquetada.play();
  }
}
function verificaColisaoRaquete(x, y) {
  colidiu =
    collideRectCircle(x, y, RaqueteComprimento, RaqueteAltura, xBola, yBola, raio);
  if (colidiu){
    velocidadexBola *= -1;
    raquetada.play();
  }
}
function movimentaRaqueteOponente(){
  if (keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10;
  }
}
function IncluirPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(20);
  fill(184 ,134 ,11);
  rect(150, 10, 40, 20)
  fill(255);
  text(meusPontos, 170, 26);
  fill(184 ,134 ,11);
  rect(450, 10, 40, 20)
  fill(255);
  text(pontosDoOponente, 470, 26);
}
function marcaPonto(){
  if (xBola > 590){
    meusPontos += 1;
    ponto.play();
    xBola = 300;
    yBola = 200;
  }
  if (xBola < 10){
    pontosDoOponente += 1;
    ponto.play();
    xBola = 300;
    yBola = 200;
  }
}
