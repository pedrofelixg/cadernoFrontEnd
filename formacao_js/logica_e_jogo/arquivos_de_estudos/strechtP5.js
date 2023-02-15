// setor de variáveis 
let bolinhaX = 350;
let bolinhaY = 250;
let diametro = 18;
let raio = diametro / 2;

let = velocidadeX = 6;
let = velocidadeY = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 200;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// raquete do Oponente
let xRaqueteOponente = 680;
let yRaqueteOponente = 200;
let velocidadeYOponente;

// placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

// setor das funções
function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(0);
  creatCircle();
  speedBall();
  moveBall();
  creatRaquete(xRaquete, yRaquete);
  moveRaquete();
  colisaoRaquete(xRaquete, yRaquete);
  creatRaquete(xRaqueteOponente, yRaqueteOponente);
  oponenteMooving();
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  Placar();
  marcarPontos();
}

function creatCircle() {
  circle(bolinhaX, bolinhaY, diametro);
}

function speedBall() {
  bolinhaX += velocidadeX;
  bolinhaY += velocidadeY;
}

function moveBall() {
  if(bolinhaX + raio > width || bolinhaX - raio < 0){
    velocidadeX *= -1;
     }
  if(bolinhaY + raio > height || bolinhaY - raio <0) {
    velocidadeY *= -1;
  }
}

function creatRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function moveRaquete() {
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

// function colisaoRaquete(){
//   if (bolinhaX - raio < xRaquete + raqueteComprimento && bolinhaY - raio < yRaquete + raqueteAltura && bolinhaY + raio > yRaquete) {
//     velocidadeX *= -1;
//   }
// } <- funcao sem a biblioteca.

function colisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, bolinhaX, bolinhaY, raio);
  if(colidiu){
    velocidadeX *= -1;
  }
}

function oponenteMooving(){
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

/* os códigos dos KeyIsDown são feitos por padrão de teclado referente à biblioteca do https://www.toptal.com/developers/keycode
no site é possível perceber que existem várias formas de se referir à correspondente. */ 

function Placar() {
  textAlign(CENTER);
  textSize(40);
  fill(255);
  text(meusPontos, 200, 40);
  text(pontosDoOponente, 500, 40);
}

function marcarPontos() {
  if(bolinhaX > 690) {
    meusPontos += 1
  }
  if(bolinhaX < 10){
    pontosDoOponente += 1;
  }
}
// o código no aprendizado utiliza uma biblioteca do p5JS, que já prevê a colisão entre formas em dinâmicas de jogo.