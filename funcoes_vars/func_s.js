// Indicação do mouse nas telas, as suas coordenadas;
function indicador() {
  push();
  textAlign(LEFT);
  textSize(size_txt / 3); // 10;
  text(`X: ${mouseX}\nY: ${mouseY}`, xCanvas / 35, yCanvas / 35); // 11.43
  pop();
}



// ********  INÍCIO DAS CONFIGURAÇÕES DA FUNÇÃO RETORNAR  ******** //

// Função Retornar com seu parâmetro "qual_tela";

function retornar(qual_tela) {

  // Configuração de texto geral;
  textAlign(LEFT);

  // RETORNAR A TELA MENU;
  if (qual_tela == "menu_0") {
    push();
    // Configurações do mouse que retornar ao menu;
    if (
      mouseX >= xCanvas / 1.15 - l_rect / 4 && // 297.83
      mouseX <= xCanvas / 1.15 + l_rect / 4 && // 397.83
      mouseY >= yCanvas / 1.05 - h_rect / 3 && // 364.28
      mouseY <= yCanvas / 1.05 + h_rect / 3 // 397.6
    ) {
      fill(fill_voltar);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    rect(xCanvas / 1.15, yCanvas / 1.05, l_rect / 2, h_rect / 1.5, cont_rect); // 347.83, 380.95, 100, 33,33, 15;

    // Configurações do texto;
    textSize(size_txt * 2 / 3); // 20;
    fill(fill_txt);
    textFont(f2_txt)
    text("VOLTAR", xCanvas / 1.29, yCanvas / 1.03); // 310.07751938
    pop();
  }

  // RETORNAR A TELA MENU de outro lugar;
  if (qual_tela === "menu_1") {
    push();
    // Configurações do mouse que retornar ao menu_1
    if (
      mouseX >= xCanvas / 4 &&
      mouseX <= xCanvas / 4 + l_rect &&
      mouseY >= yCanvas - h_rect * 1.3 &&
      mouseY <= yCanvas - h_rect / 4
    ) {
      fill(fill_voltar);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    rect(xCanvas / 2, yCanvas / 1.1, l_rect, h_rect, cont_rect); //200, 363.6, 200, 50, 30;

    // Configurações do texto;
    fill(fill_txt);
    textAlign(CENTER);
    textFont(f_txt);
    textSize(size_txt);
    text("Menu level", xCanvas / 2, yCanvas / 1.075);
    pop();

  }
  // RETORNAR A TELA INICIAR da TELA DERROTA
  if (qual_tela === "iniciar") {
    push();
    // Configurações do mouse que retornar ao iniciar
    if (
      mouseX >= xCanvas / 4 &&
      mouseX <= xCanvas / 4 + l_rect &&
      mouseY >= yCanvas / 2 + (h_rect * 3) / 5 &&
      mouseY <= yCanvas / 2 + (h_rect * 8) / 5
    ) {
      fill(fill_voltar);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    rect(xCanvas / 2, yCanvas / 1.55, l_rect, h_rect, cont_rect); //200, 258.1, 200, 50, 30;

    // Configurações do texto;
    textFont(f2_txt);
    fill(fill_txt);
    textSize(size_txt * 1.5)
    textAlign(CENTER)
    text("VOCÊ PERDEU", xCanvas / 2, yCanvas / 2);

    textSize(size_txt);
    text("Reiniciar", xCanvas / 2, yCanvas / 1.5);
    pop();

  }

  if (qual_tela === "pause") {
    push();
    // Configurações do mouse que retornar ao menu;
    rectMode(CENTER);
    textAlign(CENTER);
    if (
      mouseX >= l_rect - l_rect / 4 && // 150
      mouseX <= l_rect + l_rect / 4 && // 250;
      mouseY >= yCanvas / 1.05 - h_rect / 2 && // 355.95
      mouseY <= yCanvas / 1.05 + h_rect / 2 // 405.95
    ) {
      fill(fill_voltar);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    rect(l_rect, yCanvas / 1.05, l_rect / 2, h_rect / 1.5, cont_rect); // 200, 380.95, 100, 33,33, 15;

    // Configurações do texto;
    textSize(size_txt * 2 / 3); // 20;
    fill(fill_txt);
    textFont(f2_txt)
    text("VOLTAR", l_rect, yCanvas / 1.03); // 310.07751938
    pop();
  }
}

// ********   FIM DAS CONFIGURAÇÕES DA FUNÇÃO RETORNAR  ******** //



// ********   INÍCIO DAS CONFIGURAÇÕES DA FUNÇÃO AVANÇAR  ******** //

// Função avançar com seu parâmetro "para_qual_tela";
function avancar(para_qual_tela) {

  // Avançar telas;
  if (para_qual_tela === "proxima_tela") {
    push();
    // Configurações do mouse que avança para proxima tela;
    if (
      mouseX >= xCanvas / 1.05 - l_rect / 10 &&
      mouseX <= xCanvas / 1.05 + l_rect / 10 &&
      mouseY >= yCanvas / 2 - h_rect * 2 / 5 &&
      mouseY <= yCanvas / 2 + h_rect * 2 / 5
    ) {
      fill(fill_voltar);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    ellipse(xCanvas / 1.05, yCanvas / 2, l_rect / 5, h_rect * 4 / 5); //380.1, 200, 40, 40;

    // Configurações do texto;
    textSize(size_txt * 2 / 3);
    textAlign(LEFT);
    textFont(f_txt);
    stroke(10);
    fill(fill_txt)
    text("=>", xCanvas / 1.075, yCanvas / 1.95);
    pop();
  }

  if (para_qual_tela === "proximo_level") {

    push();
    // Configurações do mouse que avança para outro level
    if (
      mouseX >= xCanvas / 4 &&
      mouseX <= xCanvas / 4 + l_rect &&
      mouseY >= yCanvas / 2 + (h_rect * 3) / 5 &&
      mouseY <= yCanvas / 2 + (h_rect * 8) / 5
    ) {
      fill(fill_voltar);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    rect(xCanvas / 2, yCanvas / 1.55, l_rect, h_rect, cont_rect); //200, 258.1, 200, 50, 30;

    // Configurações do texto;
    fill(fill_txt);
    textAlign(CENTER);
    textFont(f_txt);
    textSize(size_txt);
    text("Continuar :D", xCanvas / 2, yCanvas / 1.5);
    pop();

  }

  if (para_qual_tela === "proximo_level_2") {

    push();
    // Configurações do mouse que avança para outro level
    if (
      mouseX >= xCanvas / 4 &&
      mouseX <= xCanvas / 4 + l_rect &&
      mouseY >= yCanvas / 2 + (h_rect * 3) / 5 &&
      mouseY <= yCanvas / 2 + (h_rect * 8) / 5
    ) {
      fill(fill_voltar);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    rect(xCanvas / 2, yCanvas / 1.55, l_rect, h_rect, cont_rect); //200, 258.1, 200, 50, 30;

    // Configurações do texto;
    fill(fill_txt);
    textAlign(CENTER);
    textFont(f_txt);
    textSize(size_txt);
    text("Continuar :D", xCanvas / 2, yCanvas / 1.5);
    pop();

  }

  if (para_qual_tela === "proximo_level_3") {

    push();
    // Configurações do mouse que avança para outro level
    if (
      mouseX >= xCanvas / 4 &&
      mouseX <= xCanvas / 4 + l_rect &&
      mouseY >= yCanvas / 2 + (h_rect * 3) / 5 &&
      mouseY <= yCanvas / 2 + (h_rect * 8) / 5
    ) {
      fill(fill_voltar);
    } else {
      fill(fill_fundo);
    }

    // Formato;
    rect(xCanvas / 2, yCanvas / 1.55, l_rect, h_rect, cont_rect); //200, 258.1, 200, 50, 30;

    // Configurações do texto;
    fill(fill_txt);
    textAlign(CENTER);
    textFont(f_txt);
    textSize(size_txt);
    text("Certiicado", xCanvas / 2, yCanvas / 1.5);
    pop();

  }
}

// ********   FIM DAS CONFIGURAÇÕES DA FUNÇÃO AVANÇAR  ******** //



// ********  INÍCIO DAS CONFIGURAÇÕES DAS FUNÇÕES SECUNDÁRIAS DO JOGO  ******** //

// Função das configurações da tabela de pontos e vidas;

function pont_veloc(veloc_0, veloc_1, veloc_2, veloc_3, level) {

  push();
  // Configurações de texto;
  textFont(f2_txt);
  fill(fill_txt);
  textSize(size_txt * 2 / 3);

  // Tabelas dos pontos e vidas;
  text("pontos: " + pontos, h_rect * 13 / 10, h_rect * 16 / 10);
  text("Vidas restantes: \n", xCanvas - l_rect / 2 + Diametro / 10, h_rect + size_txt); // 305, 80;
  pop();


  // Velocidade de descida

  // Para lv1;
  if (level === 1) {
    charY_0 = charY_0 + vetor_speed0[veloc_0];
    charY_1 = charY_1 + vetor_speed1[veloc_1];
    charY_2 = charY_2 + vetor_speed2[veloc_2];
    charY_3 = charY_3 + vetor_speed3[veloc_3];
  }

  // Para lv2;
  if (level === 2) {
    charY_0 = charY_0 + vetor_speed4[veloc_0];
    charY_1 = charY_1 + vetor_speed5[veloc_1];
    charY_2 = charY_2 + vetor_speed6[veloc_2];
    charY_3 = charY_3 + vetor_speed7[veloc_3];
  }

  // Para lv3;
  if (level === 3) {
    charY_0 = charY_0 + vetor_speed8[veloc_0];
    charY_1 = charY_1 + vetor_speed9[veloc_1];
    charY_2 = charY_2 + vetor_speed10[veloc_2];
    charY_3 = charY_3 + vetor_speed11[veloc_3];
  }


  // Imagens da vida decaindo;

  // Para o level 1 - limite de 3 corações;
  if (level === 1) {

    if (qtd_vida === 3) {
      for (i = l_rect * 11 / 10; i < l_rect * 14.5 / 10; i += h_rect - l_rect / 10) { // i = 220; i < 290; i += 30;
        image(img_vida, i, h_rect * 17 / 10, h_rect - l_rect / 10, h_rect - l_rect / 10)
      }
    } else if (qtd_vida === 2) {
      for (i = l_rect * 11 / 10; i < l_rect * 13.5 / 10; i += h_rect - l_rect / 10) { // i = 220; i < 270; i += 30;
        image(img_vida, i, h_rect * 17 / 10, h_rect - l_rect / 10, h_rect - l_rect / 10)
      }
    } else if (qtd_vida === 1) {
      for (i = l_rect * 11 / 10; i < l_rect * 12.5 / 10; i += h_rect - l_rect / 10) { // i = 220; i < 250; i += 30;
        image(img_vida, i, h_rect * 17 / 10, h_rect - l_rect / 10, h_rect - l_rect / 10)
      }
    }
  }

  // Para o level 2 - limite de 4 corações;
  if (level === 2) {

    if (mais_vida == true) {
      if (qtd_vida === 4) {
        for (i = l_rect * 11 / 10; i < l_rect * 16.5 / 10; i += h_rect - l_rect / 10) { // i = 220; i < 340; i += 30;
          image(img_vida, i, h_rect * 17 / 10, h_rect - l_rect / 10, h_rect - l_rect / 10)
        }
      }
    }

    if (qtd_vida === 3) {
      for (i = l_rect * 11 / 10; i < l_rect * 14.5 / 10; i += h_rect - l_rect / 10) { // i = 220; i < 290; i += 30;
        image(img_vida, i, h_rect * 17 / 10, h_rect - l_rect / 10, h_rect - l_rect / 10)
      }
    } else if (qtd_vida === 2) {
      for (i = l_rect * 11 / 10; i < l_rect * 13.5 / 10; i += h_rect - l_rect / 10) { // i = 220; i < 270; i += 30;
        image(img_vida, i, h_rect * 17 / 10, h_rect - l_rect / 10, h_rect - l_rect / 10)
      }
    } else if (qtd_vida === 1) {
      for (i = l_rect * 11 / 10; i < l_rect * 12.5 / 10; i += h_rect - l_rect / 10) { // i = 220; i < 250; i += 30;
        image(img_vida, i, h_rect * 17 / 10, h_rect - l_rect / 10, h_rect - l_rect / 10)
      }
    }
  }

  // Para o level 3 - limite de 5 corações;
  if (level === 3) {
    if (mais_vida == true) {
      if (qtd_vida === 5) {
        for (i = l_rect * 11 / 10; i < l_rect * 17.5 / 10; i += h_rect - l_rect / 10) { // i = 220; i < 330; i += 30;
          image(img_vida, i, h_rect * 17 / 10, h_rect - l_rect / 10, h_rect - l_rect / 10)
        }
      }

      if (qtd_vida === 4) {
        for (i = l_rect * 11 / 10; i < l_rect * 16.5 / 10; i += h_rect - l_rect / 10) { // i = 220; i < 310; i += 30;
          image(img_vida, i, h_rect * 17 / 10, h_rect - l_rect / 10, h_rect - l_rect / 10)
        }
      }
    }

    if (qtd_vida === 3) {
      for (i = l_rect * 11 / 10; i < l_rect * 14.5 / 10; i += h_rect - l_rect / 10) { // i = 220; i < 290; i += 30;
        image(img_vida, i, h_rect * 17 / 10, h_rect - l_rect / 10, h_rect - l_rect / 10)
      }
    } else if (qtd_vida === 2) {
      for (i = l_rect * 11 / 10; i < l_rect * 13.5 / 10; i += h_rect - l_rect / 10) { // i = 220; i < 270; i += 30;
        image(img_vida, i, h_rect * 17 / 10, h_rect - l_rect / 10, h_rect - l_rect / 10)
      }
    } else if (qtd_vida === 1) {
      for (i = l_rect * 11 / 10; i < l_rect * 12.5 / 10; i += h_rect - l_rect / 10) { // i = 220; i < 250; i += 30;
        image(img_vida, i, h_rect * 17 / 10, h_rect - l_rect / 10, h_rect - l_rect / 10)
      }
    }
  }
}

// Função da mudança de fases;

function mud_fases() {

  if (alterador_de_fases == true) {
    PosX_bloco = xCanvas / 2 - lado_bloco / 2;
    PosY_bloco = yCanvas - lado_bloco;
    charX_0 = random(aleatorio_l);
    charY_0 = zero;
    charX_1 = random(aleatorio_l);
    charY_1 = zero;
    charX_2 = random(aleatorio_l);
    charY_2 = zero;
    charX_3 = random(aleatorio_l);
    charY_3 = zero;
    alterador_de_fases = false;
  }
  som();
  pause();
}

// Função do menu da tela PAUSE do jogo;

function pause_jogo() {

  push();
  rectMode(CENTER);
  fill(fill_credts);
  square(l_rect, l_rect, xCanvas)
  fill(fill_pause);
  square(l_rect, l_rect, l_rect + h_rect, cont_rect); // 200, 200, 250, 30;
  menu("para_menu_pause");
  pop();

}

// Função de reiniciar as configurações do jogo, tempo, posição, vida, pontos;

function reiniciar_jogo(de_que_tela) {

  // Reiniciar todo o jogo voltando para a tela de níveis;
  if (de_que_tela === "do_jogo") {

    TELA = INICIAR;
    PosX_bloco = xCanvas / 2 - lado_bloco / 2;
    PosY_bloco = yCanvas - lado_bloco;
    charX_0 = random(aleatorio_l);
    charY_0 = zero;
    charX_1 = random(aleatorio_l);
    charY_1 = zero;
    charX_2 = random(aleatorio_l);
    charY_2 = zero;
    charX_3 = random(aleatorio_l);
    charY_3 = zero;

    // Para acumular a pontuação máxima do jogador;
    if (pontos >= acumulador_pontos) {
      acumulador_pontos = pontos;
    } else {
      acumulador_pontos = acumulador_pontos;
    }

    // Som, pontos, vida reiniciando;
    snd_jogo.stop();
    snd_menu.loop();
    pontos = zero;
    qtd_vida = 3;

    // Tempo reiniciando;
    for (let contador = zero; contador < 10; contador++) {
      tempo_lv1[contador] = 5;
      tempo_lv2[contador] = 10;
      tempo_lv3[contador] = 15;
    }
  }

  // Reiniciando todo o jogo voltando para tela MENU;
  if (de_que_tela === "do_jogo_pause") {
    TELA = MENU;
    PosX_bloco = xCanvas / 2 - lado_bloco / 2;
    PosY_bloco = yCanvas - lado_bloco;
    charX_0 = random(aleatorio_l);
    charY_0 = zero;
    charX_1 = random(aleatorio_l);
    charY_1 = zero;
    charX_2 = random(aleatorio_l);
    charY_2 = zero;
    charX_3 = random(aleatorio_l);
    charY_3 = zero;

    // Para acumular a pontuação máxima do jogador;
    if (pontos >= acumulador_pontos) {
      acumulador_pontos = pontos;
    } else {
      acumulador_pontos = acumulador_pontos;
    }

    // Som, pontos, vida reiniciando;
    snd_jogo.stop();
    snd_menu.loop();
    pontos = zero;
    qtd_vida = 3;

    // Tempo reiniciando;
    for (let contador = zero; contador < 10; contador++) {
      tempo_lv1[contador] = 5;
      tempo_lv2[contador] = 10;
      tempo_lv3[contador] = 15;
    }
  }

  if (de_que_tela === "pause_salvar") {

    TELA = MENU;
    PosX_bloco = xCanvas / 2 - lado_bloco / 2;
    PosY_bloco = yCanvas - lado_bloco;
    charX_0 = random(aleatorio_l);
    charY_0 = zero;
    charX_1 = random(aleatorio_l);
    charY_1 = zero;
    charX_2 = random(aleatorio_l);
    charY_2 = zero;
    charX_3 = random(aleatorio_l);
    charY_3 = zero;

    // Para acumular a pontuação máxima do jogador;
    if (pontos >= acumulador_pontos) {
      acumulador_pontos = pontos;
    } else {
      acumulador_pontos = acumulador_pontos;
    }
    // Som, pontos, vida reiniciando;
    snd_jogo.stop();
    snd_menu.loop();

  }
}

// Função para que ao clicar o botão P ou C do teclado, pare ou continue o som;

function som() {

  // Parar som de fundo;
  if (keyIsDown(PAUSE_SND) && TELA === OPCOES_0) {
    snd_menu.stop();
  }
  if (keyIsDown(PAUSE_SND) && TELA === OPCOES_1) {
    snd_jogo.stop();
  }

  // Para continuar som de fundo;
  if (keyIsDown(DESPAUSE_SND) && TELA === OPCOES_0) {
    snd_menu.loop();
  }
  if (keyIsDown(DESPAUSE_SND) && TELA === OPCOES_1) {
    snd_jogo.loop();
  }
}

// Função para agregar as divisões dos sons de colisão de pontos, fundo, derrota etc...;

function outros_sons(tipo) {

  // Som da pontuação ao colidir, ou a errar;
  if (tipo === "pontuacao") {
    if (qtd_vida === zero) {
      derrota_liberado = true;
    }

    if (colisao == true) {
      snd_point.play();
      snd_jogo.stop();
    }

    if (errado1 == true || errado2 == true || errado3 == true) {
      snd_errado.play();
    }

    // Som de derrota do jogo;
    if (derrota_liberado == true) {
      snd_derrota.play();
      derrota_liberado = false;
    }

  }

  // Som para fazer a contagem na tela antes dos objetos aparecerem;
  if (tipo === "ante_tempo") {

    if (liberar == true) {
      if (snd_contagem.isPlaying() == false) {
        snd_contagem.play();
      }
    }
  }

  // Som para fazer parar a contagem na tela depois dos objetos aparecerem;
  if (tipo === "pos_tempo") {
    liberar = false;

    if (snd_jogo.isPlaying() == false) {
      snd_jogo.loop();
    }

    if (liberar !== true) {
      snd_contagem.stop();
    }
  }
}

// Função para pausar a tela do jogo no seu meio;

function pause() {

  if (
    TELA === FASE0 && keyIsDown(ESC_BUTTON) ||
    TELA === FASE1 && keyIsDown(ESC_BUTTON) ||
    TELA === FASE1 && keyIsDown(ESC_BUTTON) ||
    TELA === FASE2 && keyIsDown(ESC_BUTTON) ||
    TELA === FASE3 && keyIsDown(ESC_BUTTON) ||
    TELA === FASE4 && keyIsDown(ESC_BUTTON) ||
    TELA === FASE5 && keyIsDown(ESC_BUTTON) ||
    TELA === FASE6 && keyIsDown(ESC_BUTTON) ||
    TELA === FASE7 && keyIsDown(ESC_BUTTON) ||
    TELA === FASE8 && keyIsDown(ESC_BUTTON) ||
    TELA === FASE9 && keyIsDown(ESC_BUTTON) ||
    TELA === LEVEL0 && keyIsDown(ESC_BUTTON) ||
    TELA === LEVEL1 && keyIsDown(ESC_BUTTON) ||
    TELA === LEVEL2 && keyIsDown(ESC_BUTTON) ||
    TELA === LEVEL3 && keyIsDown(ESC_BUTTON) ||
    TELA === LEVEL4 && keyIsDown(ESC_BUTTON) ||
    TELA === LEVEL5 && keyIsDown(ESC_BUTTON) ||
    TELA === LEVEL6 && keyIsDown(ESC_BUTTON) ||
    TELA === LEVEL7 && keyIsDown(ESC_BUTTON) ||
    TELA === LEVEL8 && keyIsDown(ESC_BUTTON) ||
    TELA === LEVEL9 && keyIsDown(ESC_BUTTON) ||
    TELA === NIVEL0 && keyIsDown(ESC_BUTTON) ||
    TELA === NIVEL1 && keyIsDown(ESC_BUTTON) ||
    TELA === NIVEL2 && keyIsDown(ESC_BUTTON) ||
    TELA === NIVEL3 && keyIsDown(ESC_BUTTON) ||
    TELA === NIVEL4 && keyIsDown(ESC_BUTTON) ||
    TELA === NIVEL5 && keyIsDown(ESC_BUTTON) ||
    TELA === NIVEL6 && keyIsDown(ESC_BUTTON) ||
    TELA === NIVEL7 && keyIsDown(ESC_BUTTON) ||
    TELA === NIVEL8 && keyIsDown(ESC_BUTTON) ||
    TELA === NIVEL9 && keyIsDown(ESC_BUTTON)
  ) {
    TELA = PAUSE;
  }
}

// Função de reiniciar o jogo ou placar na tela de opções;
function reiniciar(o_que) {

  // Uso do botão R para reiniciar o jogo;
  if (o_que === "jogo") {
    if (
      keyIsDown(R_BUTTON) && TELA === OPCOES_0 ||
      keyIsDown(R_BUTTON) && TELA === OPCOES_1
    ) {
      reiniciar_jogo("do_jogo_pause");
    }
  }

  // Uso do botão T para reiniciar o placar;
  if (o_que === "placar") {
    if (
      keyIsDown(T_BUTTON) && TELA === OPCOES_0 ||
      keyIsDown(T_BUTTON) && TELA === OPCOES_1
    ) {
      reiniciar_jogo("do_jogo_pause");
      acumulador_pontos = 0;
    }
  }
}

// ********  FIM DAS CONFIGURAÇÕES DAS FUNÇÕES SECUNDÁRIAS DO JOGO  ******** //