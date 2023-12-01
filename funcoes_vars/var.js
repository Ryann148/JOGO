// Constantes;

// Para o menu;
const MENU = "menu";

// Para o iniciar;
const INICIAR = "iniciar";

// Para o contrle;
const CONTROLES_0 = "controles_0";
const CONTROLES_1 = "controles_1";

// Para o créditos;
const CREDITOS_0 = "creditos_0";
const CREDITOS_1 = "creditos_1";
const CREDITOS_2 = "creditos_2";
const CREDITOS_3 = "creditos_3";
const CREDITOS_4 = "creditos_4";
const CREDITOS_5 = "creditos_5";

// Para o ranking;
const RANKING = "ranking";

// Para opções;
const OPCOES_0 = "opcoes_0";
const OPCOES_1 = "opcoes_1";

// Para pause;
const PAUSE = "pause";

// Para derrotas, vitórias, bônus;
const DERROTA = "derrota";
const VITORIA_L1 = "vitoria_l1";
const VITORIA_L2 = 'vitoria_l2';
const VITORIA_L3 = "vitoria_l3";
const CERTIFICADO = "certificado";

// Constantes para FASES LIM;
const FASE0 = "fase0";
const FASE1 = "fase1";
const FASE2 = "fase2";
const FASE3 = "fase3";
const FASE4 = "fase4";
const FASE5 = "fase5";
const FASE6 = "fase6";
const FASE7 = "fase7";
const FASE8 = "fase8";
const FASE9 = "fase9";

// Constantes para LEVEL DERI;
const LEVEL0 = "LEVEL0";
const LEVEL1 = "LEVEL1";
const LEVEL2 = "LEVEL2";
const LEVEL3 = "LEVEL3";
const LEVEL4 = "LEVEL4";
const LEVEL5 = "LEVEL5";
const LEVEL6 = "LEVEL6";
const LEVEL7 = "LEVEL7";
const LEVEL8 = "LEVEL8";
const LEVEL9 = "LEVEL9";

// Constantes para NIVEL INTER;
const NIVEL0 = "NIVEL0";
const NIVEL1 = "NIVEL1";
const NIVEL2 = "NIVEL2";
const NIVEL3 = "NIVEL3";
const NIVEL4 = "NIVEL4";
const NIVEL5 = "NIVEL5";
const NIVEL6 = "NIVEL6";
const NIVEL7 = "NIVEL7";
const NIVEL8 = "NIVEL8";
const NIVEL9 = "NIVEL9";

// Constantes para IMAGENS;

// Para menu;
const IMG_M = "assets/imgs/IMG_MENU.png";

// Para controles;
const IMG_CTRL1 = "assets/imgs/IMG_CTRL.png";
const IMG_CTRL2 = "assets/imgs/IMG_CTRL_2.png";

// Para "personagem e questões";
const IMG_IGUAL = "assets/imgs/IGUAL.png";
const IMG_VIDA = "assets/imgs/VIDA.png";
const LIM = "assets/imgs/lim/LIM";
const DERI = "assets/imgs/deri/DERI";
const INTER = "assets/imgs/inter/INTER";

// Para certificado;
const IMG_CERTIFICADO = "assets/imgs/CERTIFICADO.png";

// Variáveis para IMAGENS;
let img_controles;
let img_controles_2;
let img_igual;
let img_vida;
let img_questions1 = [];
let img_questions2 = [];
let img_questions3 = [];

let img_certificado;

// Constantes para FONTES;
const FONT_1 = "assets/fonts/Delius-Regular.ttf";
const FONT_2 = "assets/fonts/FuzzyBubbles-Bold.ttf";
const FONT_3 = "assets/fonts/CutiveMono-Regular.ttf";
const FONT_4 = "assets/fonts/Pacifico-Regular.ttf";

// Variáveis para FONTES;
let f_txt;
let f2_txt;
let f_certificado_txt;
let f_nome_txt;

// Constantes para SONS;

// Para sons de fundo, contagem, menu, jogo;
const SNG_JOGO = "assets/sounds/Som_fundo/merx-market-song-33936.mp3";
const SNG_MENU = "assets/sounds/Som_fundo/cottagecore-17463.mp3";
const SNG_DERROTA = "assets/sounds/Som_fundo/negative_beeps-6008.mp3";

// Para pontos, colisões;
const SNG_POINT = "assets/sounds/Pontos_Colisao/mixkit-correct-answer-tone-2870.wav";
const SNG_CONTADOR = "assets/sounds/Som_fundo/clock-ticking-60-second-countdown-118231.mp3";
const SNG_ERRADO = "assets/sounds/Pontos_Colisao/wrong-buzzer-6268.mp3";

// Para níveis;
const SNG_LV1 = "assets/sounds/Lv_complete/game-level-complete-143022.mp3";
const SNG_LV2 = "assets/sounds/Lv_complete/mixkit-completion-of-a-level-2063.wav";
const SNG_LV3 = "assets/sounds/Lv_complete/mixkit-game-level-completed-2059.wav";

// Variáveis para SONS;

// Para jogo/menu/ponto;
let snd_jogo;
let snd_menu;
let snd_point;
let snd_contagem;
let snd_errado;
let snd_derrota;

// Para passagem de níveis;
let snd_pass_lv1;
let snd_pass_lv2;
let snd_pass_lv3;

// Para criar ajustador de volume;
var ajustador_volume;

// Para o canvas;
var xCanvas = 400;
var yCanvas = 400;

// Para valores nulos;
var zero = xCanvas - yCanvas; // 0;

// Para dimensões dos retângulos no menu;
var l_rect = xCanvas / 2; // VALOR = 200;
var h_rect = yCanvas / 8; // VALOR = 50;

// Para posição dos retângulos resposta e lado;
var x_rect = xCanvas * 7 / 8; // VALOR = 50;
var y_rect = yCanvas - h_rect + (h_rect * 1) / 5; // VALOR = 360;
var lado_rect = l_rect / 2 - h_rect / 2; // Lado do quadrado; 75;

// Variáveis para BOTÃOS; 

// Botões A, D;
var RIGHT_BUTTON = 68;
var LEFT_BUTTON = 65;

// Botões W, S;
var UP_BUTTON = 87;
var DOWN_BUTTON = 83;

// Botões para pausar o jogo e variável para validar o pause;
var ESC_BUTTON = 27;
var validar_pause = false;

// Botões para pausar som;
var PAUSE_SND = 80; // P;
var DESPAUSE_SND = 67; // C/

// Botões para opções;
var R_BUTTON = 82; // R;
var T_BUTTON = 84; // T;

// Variáveis de movimento dos blocos-respostas;

//  Para posição horizontal;
var charX_0;
var charX_1;
var charX_2;
var charX_3;

// Para posição vertical;
var charY_0 = 0;
var charY_1 = 0;
var charY_2 = 0;
var charY_3 = 0;

// Variáveis para o bloco personagem;
var lado_bloco = h_rect; // 50;
var PosX_bloco = xCanvas / 2 - lado_bloco / 2; // 175;
var PosY_bloco = yCanvas - lado_bloco; // 350;

// Acelerador;

// Para lv 1;
vetor_speed0 = [1, 1.25, 1.75, 2, 2.5, 3, 3.25, 3.75, 4];
vetor_speed1 = [1, 1.25, 1.75, 2, 2.5, 3, 3.25, 3.75, 4];
vetor_speed2 = [1, 1.25, 1.75, 2, 2.5, 3, 3.25, 3.75, 4];
vetor_speed3 = [1, 1.25, 1.75, 2, 2.5, 3, 3.25, 3.75, 4];

// Para lv 2; 
vetor_speed4 = [3.25, 5.7, 2.79, 2.75, 3.5, 4.25, 4.5, 5, 5.1];
vetor_speed5 = [3.25, 5.7, 2.79, 2.75, 3.5, 4.25, 4.5, 5, 5.1];
vetor_speed6 = [3.25, 5.7, 2.79, 2.75, 3.5, 4.25, 4.5, 5, 5.1];
vetor_speed7 = [3.25, 5.7, 2.79, 2.75, 3.5, 4.25, 4.5, 5, 5.1];

// Para lv 3;
vetor_speed8 = [4.1, 3.77, 5.3, 3.9, 5.5, 6, 4.6, 6.5, 4.99];
vetor_speed9 = [4.1, 3.77, 5.3, 3.9, 5.5, 6, 4.6, 6.5, 4.99];
vetor_speed10 = [4.1, 3.77, 5.3, 3.9, 5.5, 6, 4.6, 6.5, 4.99];
vetor_speed11 = [4.1, 3.77, 5.3, 3.9, 5.5, 6, 4.6, 6.5, 4.99];

// Variáveis para COLISÃO, RESPOSTA, VIDAS;

// COLISÃO, ERRO, PONTOS, VIDA, TEMPO;
var colisao = false;
var errado1 = false;
var errado2 = false;
var errado3 = false;

// texto resposta do level 1;
let vetor_txt1 = [
  ["4", "-1", "2", "1"], //4  fase 0
  ["Pi/4", "0", "1", "e"], //0 fase 1
  ["5", "4", "2", "3"], // 3;  fase 2
  ["1/6", "3", "6", "9"], // 1/6  fase 3
  ["e^14", "7", "e^7", "0"], // e^7 fase 4
  ["e^¹/³", "e^¹/²", "1", "2"], // e^1/2 fase 5
  ["2", "sin(x)", "e", "1"], // 1; fase6
  ["x/x", "∞", "-∞", "x"], // x/x = 1; fase7
  ["∞", "1/x", "0", "3"], // 0; fase8
  ["sin(0)", "sin(1)", "1", "∞"], // sin(1); fase9
];

// texto resposta do level 2;
let vetor_txt2 = [
  ["4cos(4x)", "4sen(4x)", "cos(4x)/4", "sen(4x)/4"], //4cos(4x)  level0;
  ["2(x³)/3-\n16x²", "4x-16", "4x", "8x²-16"], // 4x-16 level 1
  ["t³-5t²", "12t-\n30t^-4", "nda", "6t²+\nt^(-3)"], // 6t²+10t^(-3)   level 2
  ["(6x+1)\ncos(3x²+x)", "(x³+x)\nsen(3x²+x)", "(6x-1)\nsen(3x²+1)", "-(1-6x)\ncos(6x²)"], // (6x+1)cos(3x²+x)  level 3
  ["(x^7-x)/\n(6x^5)", "ln|6x²|/\n(12x^4-1)", "(6x^5)/\n(x^6-1)", "(5x^5)/\n6x"], // (6x^5)/(x^6-1) level 4
  ["24ln|2|", "2^(3x-1)\n3ln|2|", "2^(3x²+x)\nln|3|", "2^(6x)/\n3ln|6|"], // 2^(3x-1)3ln2 level 5
  ["-10x/\n(16x³)", "ln|2|/\n(x²+5)", "2/x²", "-5/\n(4x²)"], // -5/4x² level6
  ["e^x(x²-2x)/\nx^4", "e^x(4x)/\nln|x³|", "e^x/\n(2x^2)", "2x²e^x/\n(x²-2x)"], // e^x(x²-2x)/x^4 level7
  ["pi²ln|x^pi|-\nx^(pi-1)", "xpi^(pi+1)+\nln|pi|", "pix^(pi-1)+\nlnpi.\npi^x", "0"], // πx^(π-1)+lnπ.π^x level8
  ["|x|²x³", "3x|x|", "6|x|", "nda"], // 3x|x| level9
];

// texto resposta do level 3;
let vetor_txt3 = [
  ["x³", "6x", "12x²", "x³/3"], // x³  nivel0;
  ["4x¹/²\n+16x", "2x³/²\n-4x", "nda", "(3x/2)-\n4x²"], //2x³/²-4x nivel 1
  ["-\nsin(x²/3)", "3\ncos(3x)", "(1/3)\nsin(x/3)", "-3\ncos(x/3)"], // -3cos(x/3);  nivel 2
  ["(x²+1)^5/\n10", "ln|4x²|", "(x³+5)³/\n4", "nda"], // [(x²+1)^5]/10  nivel 3
  ["ln\n|arcsin(-x)|", "x²", "-ln|3-2x|\n/2", "(-2)/\n(3-2x)"], // -ln|3x-2x|/2 nivel 4
  ["cos^3(0)/\n2", "sin^4(0)/\n4", "4\nsin^4(0)", "cos^5(20)"], // sin^4(0)/4 nivel 5
  ["4sinx+\n5cosx", "cosx", "tg(2x)/\n9", "5sinx+\n4cosx"], // 5sinx+4cosx nivel6
  ["3e^(x³)", "x²\ne^(3x²)", "nda", "e^(x³)3x²"], // 3e^(x³) nivel7
  ["(-2x)/\nln|1-x²|", "1/\nln|arctgx|", "ln\n|arcsinx|", "nda"], // ln|arcsinx| nivel8
  ["cosx²+\n(1-sin²x)", "sinx-\nsin³x/3", "sin^4x/4", "cos^5x/\n(sin^3x)"], // sinx-sin³/3 nivel9
];

// PONTOS;
var pontos = 0;
var acumulador_pontos = 0;

// VIDAS;
var qtd_vida = 3;
var mais_vida = false;

// TEMPORIZADOR;

// Para variáveis de tempo de acordo com o nível;
var tempo_lv1 = [];
var tempo_lv2 = [];
var tempo_lv3 = [];

// Para variáveis de tempo dos contadores dos níveis;
let time_lv1 = 0;
let time_lv2 = 10;
let time_lv3 = 20;

// Para tempo do lv_1;
while (time_lv1 < 10) {

  tempo_lv1[time_lv1] = 5; // surgimento de 10 posições com mesmo componente (5);
  time_lv1++;

}

// Para tempo do lv_2;
while (time_lv2 < 20) {

  tempo_lv2[time_lv2] = 10; // surgimento de 10 posições com mesmo componente (10);
  time_lv2++;
}

// Para tempo do lv_3;
while (time_lv3 < 30) {

  tempo_lv3[time_lv3] = 15; // surgimento de 10 posições com mesmo componente (15);
  time_lv3++;

}

// Liberar contagem;
var liberar = false;

// Liberar som de derrota;
var derrota_liberado = false;

// Variável para validar o certificado e digitar no prompt();
var digite = true;
var nome;
var curso;
var data;

// Variáveis para passagem de telas fases;
var alterador_de_fases = false;

// Variáveis para liberar level 2 e 3;
var liberar_lv2 = false;
var liberar_lv3 = false;

// Para DIAMETRO da ellipse do caderno;
var Diametro = xCanvas / 4 - lado_rect; // 25;

// Variáveis de aleatoriedade;
var aleatorio_l = (l_rect - l_rect / 10 - h_rect, yCanvas - lado_bloco); // (130, 325)

// Para tamanho dos textos;
var size_txt = xCanvas / 10 - yCanvas / 40; // VALOR = 30;

// Para cores dos textos;
var fill_txt = "black";

// Para cores dos retângulos;
var fill_rect = "gray";
var fill_fundo = "white";
var fill_save = "yellow"

// Para cores dos niveis de dificuldades;
var fill_lv1 = "lightgreen"
var fill_lv2 = "orange";
var fill_lv3 = "red";

// Para botões de retornar;
var fill_voltar = "cyan";

// Para cores de fundos;
var fill_level = "lightgray";
var fill_derrota = "lightblue";
var fill_credts = "lightyellow";
var fill_pause = "brown";

// Para cores das telas de fundo resposta;
var fill_pergunta = "teal";

// Para cor de linha;
var fill_stroke = "red";
// Para contorno dos retângulos;
var cont_rect = xCanvas / 10 - yCanvas / 40; // VALOR = 30;

// Para a tela;
var TELA = MENU;

// Variável para carregar tela;
var guardar_tela_atual;

var bolean = false;