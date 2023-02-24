/* aprendizado básico no MDN - Docs sobre Javascript
    a ideia é criar um jogo em que o usuário busca desobrir um número
    aleatoriamente entre 0 a 100 com a biblioteca MathRound.
    https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash 
    por decisão própria não coloquei esse arquivo junto com o HTML após os testes necessários*/

var numeroAleatorio= Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');
    
var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');
    
var contagemPalpites = 1;
var botaoReinicio;

    