////// ******   INÍCIO A CONSTRUÇÃO DO JOGO   ****** ///////

////// ******   INÍCIO DAS CONFIGURAÇÕES MENU   ****** ///////

function menu(para_qual_local) {

  if (para_qual_local === "para_menu_jogo") {
    // Tela de fundo do menu;
    background(img_menu);

    // Configurações do texto do MENU;
    push();
    strokeWeight(3);
    stroke(1);
    textSize(size_txt);
    fill(fill_txt);
    textFont(f_txt);
    text("DESAFIO MATEMÁTICO", xCanvas / 2, yCanvas / 6);
    pop();

    push();
    textFont(f2_txt);

    // Configurações do botão INICIAR;
    if (
      mouseX >= xCanvas / 2 - l_rect / 2 &&
      mouseX <= xCanvas / 2 + l_rect / 2 &&
      mouseY >= yCanvas / 3.5 - h_rect / 2 &&
      mouseY <= yCanvas / 3.5 + h_rect / 2
    ) {
      fill(fill_rect);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    rect(xCanvas / 2, yCanvas / 3.5, l_rect, h_rect, cont_rect); // 200, 114.3, 200, 50, 30;

    // Configurações do texto do botão INICIAR;
    textSize(size_txt);
    fill(fill_txt);
    text("INICIAR", xCanvas / 2, yCanvas / 3.2); // 200, 125;

    // Configurações do botão CONTROLES;
    if (
      mouseX >= xCanvas / 2 - l_rect / 2 &&
      mouseX <= xCanvas / 2 + l_rect / 2 &&
      mouseY >= yCanvas / 2.2 - h_rect / 2 &&
      mouseY <= yCanvas / 2.2 + h_rect / 2
    ) {
      fill(fill_rect);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    rect(xCanvas / 2, yCanvas / 2.2, l_rect, h_rect, cont_rect); // 200, 181.8, 200, 50, 30;

    // Configurações do texto do botão CONTROLES;
    textSize(size_txt);
    fill(fill_txt);
    text("CONTROLES", xCanvas / 2, yCanvas / 2.075); // 200, 192.8;

    // Configurações do botão CREDITOS;
    if (
      mouseX >= xCanvas / 2 - l_rect / 2 &&
      mouseX <= xCanvas / 2 + l_rect / 2 &&
      mouseY >= yCanvas / 1.6 - h_rect / 2 &&
      mouseY <= yCanvas / 1.6 + h_rect / 2
    ) {
      fill(fill_rect);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    rect(xCanvas / 2, yCanvas / 1.6, l_rect, h_rect, cont_rect); // 200, 250, 200, 50, 30;

    // Configurações do texto;
    textSize(size_txt);
    fill(fill_txt);
    text("CREDITOS", xCanvas / 2, yCanvas / 1.535); // 200, 260.6;

    // Configurações do botão RANKING;
    if (
      mouseX >= l_rect - h_rect - (l_rect * 0.9) / 4 &&
      mouseX <= l_rect - h_rect + (l_rect * 0.9) / 4 &&
      mouseY >= l_rect + h_rect * 2.2 - (h_rect * 4) / 10 &&
      mouseY <= l_rect + h_rect * 2.2 + (h_rect * 4) / 10
    ) {
      fill(fill_rect);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    rect(
      l_rect - h_rect,
      l_rect + h_rect * 2.2,
      (l_rect * 0.9) / 2,
      (h_rect * 4) / 5,
      cont_rect
    ); // 150, 310, 90, 40, 30;

    // Configurações do texto do botão Ranking;
    textSize(size_txt * 2 / 3);
    fill(fill_txt);
    text("Ranking", l_rect - h_rect, y_rect - h_rect * 9 / 10); // 150, 315

    // Configurações do botão OPÇÃO;
    if (
      mouseX >= l_rect + h_rect - (l_rect * 0.9) / 4 &&
      mouseX <= l_rect + h_rect + (l_rect * 0.9) / 4 &&
      mouseY >= l_rect + h_rect * 2.2 - (h_rect * 4) / 10 &&
      mouseY <= l_rect + h_rect * 2.2 + (h_rect * 4) / 10
    ) {
      fill(fill_rect);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    rect(
      l_rect + h_rect,
      l_rect + h_rect * 2.2,
      (l_rect * 0.9) / 2,
      (h_rect * 4) / 5,
      cont_rect
    ); // 250, 114.3, 200, 40, 30;

    // Configurações do texto do botão Opções;
    textSize((size_txt * 2) / 3);
    fill(fill_txt);
    text("Opções", l_rect + h_rect, y_rect - (h_rect * 9) / 10); // 150, 315;
    pop();
  }

  // Para o menu da tela pause no meio do jogo;

  if (para_qual_local === "para_menu_pause") {

    push();
    // Configurações do botão Continuar jogo
    if (
      mouseX >= xCanvas / 2 - l_rect / 2 &&
      mouseX <= xCanvas / 2 + l_rect / 2 &&
      mouseY >= h_rect * 3 - h_rect / 2.5 &&
      mouseY <= h_rect * 3 + h_rect / 2.5
    ) {
      fill(fill_lv1);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    rect(xCanvas / 2, h_rect * 3, l_rect, h_rect / 1.5, cont_rect); // 200, 150, 200, 33.3, 30;

    // Configurações do botão Opções
    if (
      mouseX >= xCanvas / 2 - l_rect / 2 &&
      mouseX <= xCanvas / 2 + l_rect / 2 &&
      mouseY >= h_rect * 4 - h_rect / 2.5 &&
      mouseY <= h_rect * 4 + h_rect / 2.5
    ) {
      fill(fill_rect);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    rect(xCanvas / 2, h_rect * 4, l_rect, h_rect / 1.5, cont_rect); // 200, 200, 200, 33.3, 30;

    // Configurações do botão Salvar e sair
    if (
      mouseX >= xCanvas / 2 - l_rect / 2 &&
      mouseX <= xCanvas / 2 + l_rect / 2 &&
      mouseY >= h_rect * 5 - h_rect / 2.5 &&
      mouseY <= h_rect * 5 + h_rect / 2.5
    ) {
      fill(fill_save);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    rect(xCanvas / 2, h_rect * 5, l_rect, h_rect / 1.5, cont_rect); // 200, 250, 200, 33.3, 30;

    // Configurações do botão Sair
    if (
      mouseX >= xCanvas / 2 - l_rect / 2 &&
      mouseX <= xCanvas / 2 + l_rect / 2 &&
      mouseY >= h_rect * 6 - h_rect / 2.5 &&
      mouseY <= h_rect * 6 + h_rect / 2.5
    ) {
      fill(fill_voltar);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    rect(xCanvas / 2, h_rect * 6, l_rect, h_rect / 1.5, cont_rect); // 200, 300, 200, 33.3, 30;

    // Configurações do texto da tela pause;
    textFont(f_txt);
    textSize(size_txt / 1.1);
    fill("black");
    text("JOGO PAUSADO", xCanvas / 2, h_rect * 2.25);
    textFont(f2_txt);
    textSize(size_txt / 1.5);
    text("Continuar jogando\n\nOpções\n\nSalvar e sair\n\nSair", xCanvas / 2, h_rect * 3.1);
    pop();
  }
}
// ********   FIM DAS CONFIGURAÇÕES DO MENU   ******** //



////// ******   INÍCIO A CONFIGURAÇÕES DO BOTÃO INICIAR   ****** ///////

// Função iniciar()/ Tela do primeiro botão do menu;

function iniciar() {
  // Tela de fundo da tela iniciar;
  background(fill_level);

  push();
  textFont(f2_txt);
  // Mudança de cor do retângulo;
  // LEVEL 1;
  if (
    mouseX >= l_rect / 2 - h_rect / 2 &&
    mouseX <= l_rect / 2 + h_rect / 2 &&
    mouseY >= zero &&
    mouseY <= l_rect * 1.4
  ) {
    fill(fill_lv1);
  } else {
    fill(fill_fundo);
  }

  // Formato;
  rect(l_rect / 2, l_rect / 1.4, h_rect, l_rect * 1.4, cont_rect);

  // LEVEL 2;
  if (
    mouseX >= l_rect - h_rect / 2 &&
    mouseX <= l_rect + h_rect / 2 &&
    mouseY >= zero &&
    mouseY <= l_rect * 1.4
  ) {
    fill(fill_lv2);
  } else {
    fill(fill_fundo);
  }

  // Formato;
  rect(l_rect, l_rect / 1.4, h_rect, l_rect * 1.4, cont_rect);

  // LEVEL 3;
  if (
    mouseX >= l_rect * 1.5 - h_rect / 2 &&
    mouseX <= l_rect * 1.5 + h_rect / 2 &&
    mouseY >= zero &&
    mouseY <= l_rect * 1.4
  ) {
    fill(fill_lv3);
  } else {
    fill(fill_fundo);
  }

  // Formato;
  rect(l_rect * 1.5, l_rect / 1.4, h_rect, l_rect * 1.4, cont_rect);

  // Configurações do texto;
  textSize(size_txt);
  fill(fill_txt);
  text("L\nE\nV\nE\nL\n\n1", l_rect / 2, yCanvas / 10);

  text("L\nE\nV\nE\nL\n\n2", l_rect, yCanvas / 10);

  text("L\nE\nV\nE\nL\n\n3", l_rect * 1.5, yCanvas / 10);

  pop();
}

// Função level, dentro da tela Iniciar;

function level() {

  background(fill_level);

  // Para desbugar o som no draw;
  outros_sons("pos_tempo");

  // Linhas do caderno e o arrame;

  for (posVertical = zero; posVertical <= yCanvas / 20; posVertical++) {
    posHorizontal = posVertical * 20 + posVertical;

    push();
    fill(fill_txt);
    stroke(1);
    line(yCanvas - xCanvas, posHorizontal, xCanvas, posHorizontal);
    noFill();
    stroke(fill_stroke);
    ellipse(zero, posHorizontal, (yCanvas - x_rect) / 2);
    pop();
  }
}

// Função da tela vitoria para lv1 lv2 e lv3;

function vitoria(qual_level) {
  background(fill_pergunta);

  if (qual_level === "lim") {

    // Organização dos txt;
    push();
    fill(fill_fundo);
    textFont(f_txt);
    textSize(size_txt * 0.85);
    textAlign(CENTER);
    text(
      "Parabéns!!!\n\nVocê está bem em limites!\n Você quer:\n\n\n\n Ou",
      xCanvas / 2,
      yCanvas / 4
    );
    pop();

  }

  if (qual_level === "deri") {

    // Organização dos txt;
    push();
    fill(fill_fundo);
    textFont(f_txt);
    textSize(size_txt * 0.85);
    textAlign(CENTER);
    text(
      "Parabéns!!!\n\nVocê mandou bem em derivadas!\n Você quer:\n\n\n\n Ou",
      xCanvas / 2,
      yCanvas / 4
    );
    pop();

  }

  if (qual_level === "inter") {

    // Organização dos txt;
    push();
    fill(fill_fundo);
    textFont(f_txt);
    textSize(size_txt * 0.85);
    textAlign(CENTER);
    text(
      "Parabéns!!!\n\nVocê acertou todas as respostas\n Você quer o:\n\n\n\n Ou",
      xCanvas / 2,
      yCanvas / 4
    );
    pop();

  }
}

function certificado() {
  background(fill_level);
  push();
  image(img_certificado, zero, zero, xCanvas, yCanvas);
  textSize(size_txt / 2);
  textFont(f_certificado_txt);
  textAlign(CENTER);
  if (digite == true) {
    nome = prompt("Digite seu nome:")
    curso = prompt("Digite seu curso de graduação:");
    data = prompt("Digite a data da realização do jogo:")
    digite = false;
  }
  text("Certifica-se que o(a) estudante:\n\n\n\ngraduando em:\n\n\nconcluiu, com êxito, o jogo: DESAFIO\nMATEMÁTICO, oferecido pela UFRN\ncom uma pontuação de" + acumulador_pontos + "\nrealizado no dia:\n" + data, l_rect, l_rect - h_rect * 11 / 10); // 200, 145;
  textFont(f_nome_txt);
  textSize(size_txt * 2 / 3);
  text(nome, l_rect, l_rect - h_rect * 3 / 10); //200, 185;
  text(curso, l_rect, l_rect + h_rect * 53 / 50); // 200, 253;
  pop();
}

////// ******   FIM A CONFIGURAÇÕES DO BOTÃO INICIAR   ****** ///////



// ********   INÍCIO DAS CONFIGURAÇÕES DO BOTÃO CONTROLES  ******** //

// Função controles()/ Tela do segundo botão do menu;

function controles(numero) {

  textSize(size_txt * 1.25);

  // PRIMEIRA TELA DE CONTROLES;
  if (numero === 0) {

    background(img_controles);

    // Configurações de texto/título;
    push();
    textFont(f2_txt);
    strokeWeight(1);
    stroke(10);
    text("          Como\njogar?", xCanvas / 6, yCanvas / 13);
    pop();

    // Configurações de texto/sobre o jogo;
    push();
    textSize(size_txt / 1.25);
    textAlign(LEFT);
    textFont(f_txt);
    text(
      "\nNeste jogo, será\nusado as teclas A,D,W,S e\nas setas do teclado\npara movimentar\na igualdade\npara seguir uma\ntrajetória até a\nresposta correta.",
      xCanvas / 40,
      yCanvas / 2.7
    );
    pop();
  }

  // SEGUNDA TELA DE CONTROLES;
  if (numero === 1) {

    background(img_controles_2);

    // Configurações de texto/título;
    textFont(f2_txt);
    push();
    strokeWeight(1);
    stroke(10);
    text("Objetivo:", xCanvas / 1.3, yCanvas / 10);
    pop();

    // Configurações de texto/sobre o jogo;
    textSize(size_txt / 1.25);
    textAlign(LEFT);
    textFont(f_txt);
    text(
      "O objetivo do jogo será\nacertar a resposta antes de\nperder todas as vidas com as\ntentativas de resposta errada,\nprecisando ser rápido na\nmovimentação e ter estudado\ncálculo 1, boa sorte\njogador!!! ",
      xCanvas / 40,
      yCanvas / 3
    );
  }
}

// ********   FIM DAS CONFIGURAÇÕES DO BOTÃO CONTROLES  ******** //



// ********   INÍCIO DAS CONFIGURAÇÕES DO BOTÃO CRÉDITOS  ******** //

// Função creditos()/ Tela do terceiro botão do menu;
function creditos(numero) {

  textSize(size_txt * 2 / 3);
  background(fill_credts);

  // PRIMEIRA TELA DE CREDITOS;
  if (numero === zero) {

    // Configurações do texto/título;

    push();
    textFont(f2_txt);
    strokeWeight(1);
    stroke(1);
    text("Referências:", xCanvas / 2, yCanvas / 16);
    pop();

    // Configurações do texto/dados do aluno e professor;
    push();
    textAlign(LEFT);
    textFont(f2_txt);
    text("Desenvolvedor:\n\n\n\n\n\nProfessor:", xCanvas / 16, yCanvas / 8);

    textFont(f_txt);
    text(
      "\nRyann Weslley Oliveira Chavarria;\nGraduando em Ciências e Tecnologias\n pela UFRN;\ne-mail: ryannwescit@gmail.com;\n\n\nThales Aguiar de Lima;\nGraduação em Tecnologia da\nInformação e Ciência da Computação\npela UFRN;\nPossui Mestrado e Doutorado em\nSistema de Computação pela UFRN;",
      xCanvas / 16,
      yCanvas / 8
    );
    pop();
  }

  // SEGUNDA TELA DE CREDITOS;
  if (numero === 1) {

    push();

    textFont(f2_txt);
    text(
      "Fontes retiradas do Google Fonts de:\n\n\n\nImagens retiradas do canvas de:",
      xCanvas / 2,
      yCanvas / 8
    );

    textFont(f_txt);
    text(
      "\nNatalia Raices, Robert Leuschke,\nVernon Adams, Jacques Le Bailly,\nBotjo Nikoltchev, Ani Petrova.\n\namethystsudio,\nEucalyp, pixabay,\nsketchify,\nSketchify Education,\nSparklestroke Global,\nTrendify,\nKaracis Studio,\nNoun Project\nDanilo Campos.",
      xCanvas / 2,
      yCanvas / 8
    );
    pop();
  }

  // TERCEIRA TELA DE CREDITOS;
  if (numero === 2) {
    // Configurações do texto/referências das imagens;
    push();

    textFont(f2_txt);
    text("Referências de sons: ", xCanvas / 2, yCanvas / 8);

    textFont(f_txt);
    text(
      "\nPixabay\n\nUNIVERSFIELD\n\nStudioKolomna\n\nhttps://mixkit.co/free-sound-\neffects/game/?page=2\n\n",
      xCanvas / 2,
      yCanvas / 8
    );
    pop();

  }

  // QUARTA TELA DE CREDITOS;
  if (numero === 3) {
    push();

    textFont(f2_txt);
    text("Questões de limites retiradas de:", xCanvas / 2, yCanvas / 8);

    textSize(size_txt / 2);
    textFont(f_txt);
    text(
      "\n\nhttps://cursos.ime.unicamp.br/exercicios/secao-57,\n\nhttps://grupos.moodle.ufsc.br/pluginfile.php/1051848/\nmod_resource/content/2/Limites%20-%20Exerc%C3\n%ADcios.pdf\n\n\n\nhttp://www.professores.im-uff.mat.br/hjbortol/disciplinas\n/2014.1/gma00108/listas/gma00108-lista-07.pdf\n\nhttps://edisciplinas.usp.br/pluginfile.php/7659330\n/mod_folder/content/0/Lista%20Limites%20UFPR\n.pdf?forcedownload=1",
      xCanvas / 2,
      yCanvas / 8
    );
    pop();
  }

  // QUINTA TELA DE CREDITOS;
  if (numero === 4) {
    push();

    textFont(f2_txt);
    text("Questões de derivadas retiradas de:", xCanvas / 2, yCanvas / 8);

    textSize(size_txt / 2);
    textFont(f_txt);
    text(
      "\n\nhttps://www.ime.usp.br/~sylvain/Lista4sol.pdf\n\nhttps://grupos.moodle.ufsc.br/pluginfile.\nphp/999190/mod_resource/content/\n3/Derivada%20-%20Lista%20I.pdf\n\nhttp://paginapessoal.utpr.edu.br/wcorrea/\nteaching/calculo-i/calculo-i-licenciatura-em-\nquimica/lista_derivadas.pdf/at_download/file\n\nhttps://educacionalplenus.com.br/\nexercicios-resolvidos-sobre-derivadas/",
      xCanvas / 2,
      yCanvas / 8
    );
    pop();
  }

  // SEXTA TELA DE CREDITOS;
  if (numero === 5) {
    push();

    textFont(f2_txt);
    text("Questões de integrais retiradas de:", xCanvas / 2, yCanvas / 8);

    textSize(size_txt / 2);
    textFont(f_txt);
    text(
      "\n\nhttps://br.neurochispas.com/calculo/\nintegrais-indefinidas-exercicios-resolvidos/\n\nhttps://wp.ufpel.edu.br/bottega/\nfiles/2015/02/apostilaC22015.pdf\n\nhttps://www.ime.usp.br/~martha/\nmat2453-2003/lista3/L3.pdf\n\nhttps://www.ime.unicamp.br/~valle/\nTeaching/MA111/Aula22.pdf",
      xCanvas / 2,
      yCanvas / 8
    );
    pop();
  }
}
// ********   FIM DAS CONFIGURAÇÕES DO BOTÃO CREDITOS  ******** ////



// ********   INÍCIO DAS CONFIGURAÇÕES DO BOTÃO RANKING  ******** ////

// Função ranking - mostrar tabelas de pontos do jogador;
function ranking() {
  background(fill_lv1);

  // Configurações de texto da tela ranking;
  push();
  textFont(f_txt);
  strokeWeight(3);
  stroke(1);
  textSize(size_txt);
  fill(fill_txt);
  textAlign(CENTER);
  text("Ranking da pontuação", l_rect, yCanvas - x_rect); // 200, 50;
  noStroke();
  textSize(size_txt * 2 / 3);
  text("Pontuação máxima do jogador:\n" + acumulador_pontos, l_rect, (yCanvas - x_rect) * 2); // 200, 100;
  pop();
}

// ********   FIM DAS CONFIGURAÇÕES DO BOTÃO RANKING  ******** ////



// ********   INÍCIO DAS CONFIGURAÇÕES DO BOTÃO OPÇÕES  ******** ////
function opcoes() {

  background(fill_derrota);

  // Configurações de texto da tela opcoes;
  push();
  textFont(f_txt);
  strokeWeight(3);
  stroke(1);
  textSize(size_txt);
  fill(fill_txt);
  textAlign(CENTER);
  text("Opções", l_rect, h_rect);
  noStroke();

  // Configurações dos retângulos da tela opcoes;
  fill(fill_fundo);
  for (pos1 = l_rect * 9 / 20; pos1 < l_rect * 3 / 2; pos1 += h_rect) { // 90, 300, 50;
    rect(l_rect * 19 / 20, pos1, y_rect - h_rect * 4 / 5, h_rect / 2, cont_rect); // 190, posi, 320, 25, 30
  }

  textSize(size_txt * 2 / 3); // 20;
  textFont(f2_txt);
  fill(fill_txt);
  textAlign(LEFT);
  text("Pausar som: Aperte P\n\nContinuar som: Aperte C\n\nAjustar volume de todo o jogo:\n\nReiniciar placar: Aperte R\n\nReiniciar jogo: Aperte T", 30, 100)


  // Configurações do volume;
  ajustador_volume.position(h_rect * 3 / 5, l_rect); //30, 200
  snd_menu.setVolume(ajustador_volume.value());
  snd_jogo.setVolume(ajustador_volume.value());
  snd_contagem.setVolume(ajustador_volume.value());
  snd_point.setVolume(ajustador_volume.value());
  snd_errado.setVolume(ajustador_volume.value());
  snd_derrota.setVolume(ajustador_volume.value());
  snd_pass_lv1.setVolume(ajustador_volume.value());
  snd_pass_lv2.setVolume(ajustador_volume.value());
  snd_pass_lv3.setVolume(ajustador_volume.value());

  pop();

}
// ********   FIM DAS CONFIGURAÇÕES DO BOTÃO OPÇÕES  ******** ////