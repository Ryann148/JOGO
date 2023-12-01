// Função preload() usada para adicionar imagens/fontes/sons;

function preload() {
  // Imagens;
  img_menu = loadImage(IMG_M);
  img_controles = loadImage(IMG_CTRL1);
  img_controles_2 = loadImage(IMG_CTRL2);
  img_igual = loadImage(IMG_IGUAL);

  // Imagem vida;
  img_vida = loadImage(IMG_VIDA);

  // Imagem certificado;
  img_certificado = loadImage(IMG_CERTIFICADO);

  // QUESTÕES:
  let quest_lv1 = 0;
  while (quest_lv1 < 10) {
    img_questions1[quest_lv1] = loadImage(LIM + quest_lv1 + ".png");
    quest_lv1++;
  }

  let quest_lv2 = 10;
  while (quest_lv2 < 20) {
    img_questions2[quest_lv2] = loadImage(DERI + quest_lv2 + ".png");
    quest_lv2++;
  }

  let quest_lv3 = 20;
  while (quest_lv3 < 30) {
    img_questions3[quest_lv3] = loadImage(INTER + quest_lv3 + ".png");
    quest_lv3++;
  }

  // Fontes;
  f_txt = loadFont(FONT_1);
  f2_txt = loadFont(FONT_2);
  f_certificado_txt = loadFont(FONT_3);
  f_nome_txt = loadFont(FONT_4);

  // Sons gerais;
  snd_jogo = loadSound(SNG_JOGO);
  snd_contagem = loadSound(SNG_CONTADOR);
  snd_menu = loadSound(SNG_MENU);
  snd_point = loadSound(SNG_POINT);
  snd_errado = loadSound(SNG_ERRADO);
  snd_derrota = loadSound(SNG_DERROTA);

  // Sons para passagem de level;
  snd_pass_lv1 = loadSound(SNG_LV1);
  snd_pass_lv2 = loadSound(SNG_LV2);
  snd_pass_lv3 = loadSound(SNG_LV3);
}


// Função setup, onde se localizada às margens do desenho;

function setup() {

  createCanvas(xCanvas, yCanvas);
  charX_0 = random(aleatorio_l);
  charY_0 = 0;
  charX_1 = random(aleatorio_l);
  charY_1 = 0;
  charX_2 = random(aleatorio_l);
  charY_2 = 0;
  charX_3 = random(aleatorio_l);
  charY_3 = 0;
  snd_menu.loop();
  ajustador_volume = createSlider(0, 1, 0.5, 0.01);
}

// FUNÇÃO DRAW, onde roda as telas no setup;

function draw() {

  // Modos em geral;
  rectMode(CENTER);
  textAlign(CENTER);
  noStroke();

  if (bolean == true) {
    if (TELA === guardar_tela_atual) {
      TELA = PAUSE;
      bolean = false;
    }
  }

  // Condições se a tela for outra tela, para entrada;
  if (TELA === MENU) {
    menu("para_menu_jogo");
    indicador();
  }

  if (TELA === INICIAR) {
    iniciar();
    retornar("menu_0");
    indicador();
  }

  if (TELA === CONTROLES_0) {
    controles(0);
    avancar("proxima_tela");
    indicador();
  }

  if (TELA === CONTROLES_1) {
    controles(1);
    indicador();
    retornar("menu_0");
  }

  if (TELA === CREDITOS_0) {
    creditos(0);
    avancar("proxima_tela");
    retornar("menu_0");
    indicador();
  }

  if (TELA === CREDITOS_1) {
    creditos(1);
    avancar("proxima_tela")
    retornar("menu_0")
    indicador();
  }

  if (TELA === CREDITOS_2) {
    creditos(2);
    avancar("proxima_tela");
    retornar("menu_0")
    indicador();
  }

  if (TELA === CREDITOS_3) {
    creditos(3);
    avancar("proxima_tela");
    retornar("menu_0");
    indicador();
  }

  if (TELA === CREDITOS_4) {
    creditos(4);
    avancar("proxima_tela")
    retornar("menu_0");
    indicador();
  }

  if (TELA === CREDITOS_5) {
    creditos(5);
    retornar("menu_0");
    indicador();
  }

  if (TELA === RANKING) {
    ranking();
    retornar("menu_0");
    indicador();
  }

  if (TELA === OPCOES_0) {
    opcoes();
    retornar("menu_0");
    indicador();
  } else if (TELA === OPCOES_1) {
    opcoes();
    retornar("pause");
    indicador();
  } else {
    ajustador_volume.position(-100, -100);
  }

  // LEVEL 1;

  if (TELA === FASE0) {
    config_q("Resolva o limite abaixo: ");
    questao(1, 0);
    guardar_tela_atual = FASE0;
    if (tempo_lv1[0] === 0) {
      level();
      moveCharacter(1);
      pont_veloc(4, 1, 2, 3, 1);
      indicador();
      caixas_respostas(charX_0, charY_0, 0, 0, 1);
      caixas_respostas(charX_1, charY_1, 0, 1, 1);
      caixas_respostas(charX_2, charY_2, 0, 2, 1);
      caixas_respostas(charX_3, charY_3, 0, 3, 1);
      resposta(0, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 1, 1);
      obj_colisao(1, 1);
      mud_fases();
    }
  }

  if (TELA === FASE1) {
    config_q("Resolva o limite abaixo: ");
    questao(1, 1);
    if (tempo_lv1[1] === 0) {
      level();
      moveCharacter(1);
      pont_veloc(3, 2, 1, 0, 1);
      indicador();
      caixas_respostas(charX_0, charY_0, 1, 0, 1);
      caixas_respostas(charX_1, charY_1, 1, 1, 1);
      caixas_respostas(charX_2, charY_2, 1, 2, 1);
      caixas_respostas(charX_3, charY_3, 1, 3, 1);
      resposta(1, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 2, 1);
      obj_colisao(2, 1);
      mud_fases();
    }
  }

  if (TELA === FASE2) {
    config_q("Resolva o limite abaixo: ");
    questao(1, 2);
    if (tempo_lv1[2] === 0) {
      level();
      moveCharacter(1);
      pont_veloc(2, 3, 1, 0, 1);
      indicador();
      caixas_respostas(charX_0, charY_0, 2, 0, 1);
      caixas_respostas(charX_1, charY_1, 2, 1, 1);
      caixas_respostas(charX_2, charY_2, 2, 2, 1);
      caixas_respostas(charX_3, charY_3, 2, 3, 1);
      resposta(2, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 4, 1);
      obj_colisao(4, 1);
      mud_fases();
    }
  }

  if (TELA === FASE3) {
    config_q("Resolva o limite abaixo: ");
    questao(1, 3);
    if (tempo_lv1[3] === 0) {
      level();
      moveCharacter(1);
      pont_veloc(3, 2, 1, 0, 1);
      indicador();
      caixas_respostas(charX_0, charY_0, 3, 0, 1);
      caixas_respostas(charX_1, charY_1, 3, 1, 1);
      caixas_respostas(charX_2, charY_2, 3, 2, 1);
      caixas_respostas(charX_3, charY_3, 3, 3, 1);
      resposta(3, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 1, 1);
      obj_colisao(1, 1);
      mud_fases();
    }
  }

  if (TELA === FASE4) {
    config_q("Resolva o limite abaixo: ");
    questao(1, 4);
    if (tempo_lv1[4] === 0) {
      level();
      moveCharacter(1);
      pont_veloc(3, 2, 1, 0, 1);
      indicador();
      caixas_respostas(charX_0, charY_0, 4, 0, 1);
      caixas_respostas(charX_1, charY_1, 4, 1, 1);
      caixas_respostas(charX_2, charY_2, 4, 2, 1);
      caixas_respostas(charX_3, charY_3, 4, 3, 1);
      resposta(4, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 3, 1);
      obj_colisao(3, 1);
      mud_fases();
    }
  }

  if (TELA === FASE5) {
    config_q("Resolva o limite abaixo: ");
    questao(1, 5);
    if (tempo_lv1[5] === 0) {
      level();
      moveCharacter(1);
      pont_veloc(3, 2, 1, 0, 1);
      indicador();
      caixas_respostas(charX_0, charY_0, 5, 0, 1);
      caixas_respostas(charX_1, charY_1, 5, 1, 1);
      caixas_respostas(charX_2, charY_2, 5, 2, 1);
      caixas_respostas(charX_3, charY_3, 5, 3, 1);
      resposta(5, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 2, 1);
      obj_colisao(2, 1);
      mud_fases();
    }
  }

  if (TELA === FASE6) {
    config_q("Resolva o limite abaixo: ");
    questao(1, 6);
    if (tempo_lv1[6] === 0) {
      level();
      moveCharacter(1);
      pont_veloc(3, 2, 1, 0, 1);
      indicador();
      caixas_respostas(charX_0, charY_0, 6, 0, 1);
      caixas_respostas(charX_1, charY_1, 6, 1, 1);
      caixas_respostas(charX_2, charY_2, 6, 2, 1);
      caixas_respostas(charX_3, charY_3, 6, 3, 1);
      resposta(6, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 4, 1);
      obj_colisao(4, 1);
      mud_fases();
    }
  }

  if (TELA === FASE7) {
    config_q("Resolva o limite abaixo: ");
    questao(1, 7);
    if (tempo_lv1[7] === 0) {
      level();
      moveCharacter(1);
      pont_veloc(3, 2, 1, 0, 1);
      indicador();
      caixas_respostas(charX_0, charY_0, 7, 0, 1);
      caixas_respostas(charX_1, charY_1, 7, 1, 1);
      caixas_respostas(charX_2, charY_2, 7, 2, 1);
      caixas_respostas(charX_3, charY_3, 7, 3, 1);
      resposta(7, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 1, 1);
      obj_colisao(1, 1);
      mud_fases();
    }
  }

  if (TELA === FASE8) {
    config_q("Resolva o limite abaixo: ");
    questao(1, 8);
    if (tempo_lv1[8] === 0) {
      level();
      moveCharacter(1);
      pont_veloc(3, 2, 1, 0, 1);
      indicador();
      caixas_respostas(charX_0, charY_0, 8, 0, 1);
      caixas_respostas(charX_1, charY_1, 8, 1, 1);
      caixas_respostas(charX_2, charY_2, 8, 2, 1);
      caixas_respostas(charX_3, charY_3, 8, 3, 1);
      resposta(8, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 3, 1);
      obj_colisao(3, 1);
      mud_fases();
    }
  }

  if (TELA === FASE9) {
    config_q("Resolva o limite abaixo: ");
    questao(1, 9);
    if (tempo_lv1[9] === 0) {
      level();
      moveCharacter(1);
      pont_veloc(3, 2, 1, 0, 1);
      indicador();
      caixas_respostas(charX_0, charY_0, 9, 0, 1);
      caixas_respostas(charX_1, charY_1, 9, 1, 1);
      caixas_respostas(charX_2, charY_2, 9, 2, 1);
      caixas_respostas(charX_3, charY_3, 9, 3, 1);
      resposta(9, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 2, 1);
      obj_colisao(2, 1);
      mud_fases();
    }
  }

  // LEVEL 2;
  if (TELA === LEVEL0) {
    config_q("Encontre a derivada\nda função: ");
    questao(2, 10);
    if (tempo_lv2[10] === 0) {
      level();
      moveCharacter(2);
      pont_veloc(0, 1, 2, 3, 2);
      indicador();
      caixas_respostas(charX_0, charY_0, 0, 0, 2);
      caixas_respostas(charX_1, charY_1, 0, 1, 2);
      caixas_respostas(charX_2, charY_2, 0, 2, 2);
      caixas_respostas(charX_3, charY_3, 0, 3, 2);
      resposta(10, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 1, 2);
      obj_colisao(1, 2);
      mud_fases();
    }
  }

  if (TELA === LEVEL1) {
    config_q("Encontre a derivada\nda função: ");
    questao(2, 11);
    if (tempo_lv2[11] === 0) {
      level();
      moveCharacter(2);
      pont_veloc(3, 2, 1, 0, 2);
      indicador();
      caixas_respostas(charX_0, charY_0, 1, 0, 2);
      caixas_respostas(charX_1, charY_1, 1, 1, 2);
      caixas_respostas(charX_2, charY_2, 1, 2, 2);
      caixas_respostas(charX_3, charY_3, 1, 3, 2);
      resposta(11, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 2, 2);
      obj_colisao(2, 2);
      mud_fases();
    }
  }

  if (TELA === LEVEL2) {
    config_q("Encontre a derivada\nda função: ");
    questao(2, 12);
    if (tempo_lv2[12] === 0) {
      level();
      moveCharacter(2);
      pont_veloc(2, 3, 1, 0, 2);
      indicador();
      caixas_respostas(charX_0, charY_0, 2, 0, 2);
      caixas_respostas(charX_1, charY_1, 2, 1, 2);
      caixas_respostas(charX_2, charY_2, 2, 2, 2);
      caixas_respostas(charX_3, charY_3, 2, 3, 2);
      resposta(12, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 4, 2);
      obj_colisao(4, 2);
      mud_fases();
    }
  }

  if (TELA === LEVEL3) {
    config_q("Encontre a derivada\nda função: ");
    questao(2, 13);
    if (tempo_lv2[13] === 0) {
      level();
      moveCharacter(2);
      pont_veloc(3, 2, 1, 0, 2);
      indicador();
      caixas_respostas(charX_0, charY_0, 3, 0, 2);
      caixas_respostas(charX_1, charY_1, 3, 1, 2);
      caixas_respostas(charX_2, charY_2, 3, 2, 2);
      caixas_respostas(charX_3, charY_3, 3, 3, 2);
      resposta(13, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 1, 2);
      obj_colisao(1, 2);
      mud_fases();
    }
  }

  if (TELA === LEVEL4) {
    config_q("Encontre a derivada\nda função: ");
    questao(2, 14);
    if (tempo_lv2[14] === 0) {
      level();
      moveCharacter(2);
      pont_veloc(3, 2, 1, 0, 2);
      indicador();
      caixas_respostas(charX_0, charY_0, 4, 0, 2);
      caixas_respostas(charX_1, charY_1, 4, 1, 2);
      caixas_respostas(charX_2, charY_2, 4, 2, 2);
      caixas_respostas(charX_3, charY_3, 4, 3, 2);
      resposta(14, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 3, 2);
      obj_colisao(3, 2);
      mud_fases();
    }
  }

  if (TELA === LEVEL5) {
    config_q("Encontre a derivada\nda função: ");
    questao(2, 15);
    if (tempo_lv2[15] === 0) {
      level();
      moveCharacter(2);
      pont_veloc(3, 2, 1, 0, 2);
      indicador();
      caixas_respostas(charX_0, charY_0, 5, 0, 2);
      caixas_respostas(charX_1, charY_1, 5, 1, 2);
      caixas_respostas(charX_2, charY_2, 5, 2, 2);
      caixas_respostas(charX_3, charY_3, 5, 3, 2);
      resposta(15, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 2, 2);
      obj_colisao(2, 2);
      mud_fases();
    }
  }

  if (TELA === LEVEL6) {
    config_q("Encontre a derivada\nda função: ");
    questao(2, 16);
    if (tempo_lv2[16] === 0) {
      level();
      moveCharacter(2);
      pont_veloc(3, 2, 1, 0, 2);
      indicador();
      caixas_respostas(charX_0, charY_0, 6, 0, 2);
      caixas_respostas(charX_1, charY_1, 6, 1, 2);
      caixas_respostas(charX_2, charY_2, 6, 2, 2);
      caixas_respostas(charX_3, charY_3, 6, 3, 2);
      resposta(16, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 4, 2);
      obj_colisao(4, 2);
      mud_fases();
    }
  }

  if (TELA === LEVEL7) {
    config_q("Encontre a derivada\nda função: ");
    questao(2, 17);
    if (tempo_lv2[17] === 0) {
      level();
      moveCharacter(2);
      pont_veloc(3, 2, 1, 0, 2);
      indicador();
      caixas_respostas(charX_0, charY_0, 7, 0, 2);
      caixas_respostas(charX_1, charY_1, 7, 1, 2);
      caixas_respostas(charX_2, charY_2, 7, 2, 2);
      caixas_respostas(charX_3, charY_3, 7, 3, 2);
      resposta(17, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 1, 2);
      obj_colisao(1, 2);
      mud_fases();
    }
  }

  if (TELA === LEVEL8) {
    config_q("Encontre a derivada\nda função: ");
    questao(2, 18);
    if (tempo_lv2[18] === 0) {
      level();
      moveCharacter(2);
      pont_veloc(3, 2, 1, 0, 2);
      indicador();
      caixas_respostas(charX_0, charY_0, 8, 0, 2);
      caixas_respostas(charX_1, charY_1, 8, 1, 2);
      caixas_respostas(charX_2, charY_2, 8, 2, 2);
      caixas_respostas(charX_3, charY_3, 8, 3, 2);
      resposta(18, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 3, 2);
      obj_colisao(3, 2);
      mud_fases();
    }
  }

  if (TELA === LEVEL9) {
    config_q("Encontre a derivada\nda função: ");
    questao(2, 19);

    if (tempo_lv2[19] === 0) {
      level();
      moveCharacter(2);
      pont_veloc(3, 2, 1, 0, 2);
      indicador();
      caixas_respostas(charX_0, charY_0, 9, 0, 2);
      caixas_respostas(charX_1, charY_1, 9, 1, 2);
      caixas_respostas(charX_2, charY_2, 9, 2, 2);
      caixas_respostas(charX_3, charY_3, 9, 3, 2);
      resposta(19, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 2, 2);
      obj_colisao(2, 2);
      mud_fases();
    }
  }

  // LEVEL 3;
  if (TELA === NIVEL0) {
    config_q(`Resolva a integral\nabaixo(Com Constante\njá na resposta)`);
    questao(3, 20);
    if (tempo_lv3[20] === 0) {
      level();
      moveCharacter(3);
      pont_veloc(0, 1, 2, 3, 3);
      indicador();
      caixas_respostas(charX_0, charY_0, 0, 0, 3);
      caixas_respostas(charX_1, charY_1, 0, 1, 3);
      caixas_respostas(charX_2, charY_2, 0, 2, 3);
      caixas_respostas(charX_3, charY_3, 0, 3, 3);
      resposta(20, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 1, 3);
      obj_colisao(1, 3);
      mud_fases();
    }
  }

  if (TELA === NIVEL1) {
    config_q(`Resolva a integral\nabaixo(Com Constante\njá na resposta)`);
    questao(3, 21);
    if (tempo_lv3[21] === 0) {
      level();
      moveCharacter(3);
      pont_veloc(3, 2, 1, 0, 3);
      indicador();
      caixas_respostas(charX_0, charY_0, 1, 0, 3);
      caixas_respostas(charX_1, charY_1, 1, 1, 3);
      caixas_respostas(charX_2, charY_2, 1, 2, 3);
      caixas_respostas(charX_3, charY_3, 1, 3, 3);
      resposta(21, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 2, 3);
      obj_colisao(2, 3);
      mud_fases();
    }
  }

  if (TELA === NIVEL2) {
    config_q(`Resolva a integral\nabaixo(Com Constante\njá na resposta)`);
    questao(3, 22);
    if (tempo_lv3[22] === 0) {
      level();
      moveCharacter(3);
      pont_veloc(2, 3, 1, 0, 3);
      indicador();
      caixas_respostas(charX_0, charY_0, 2, 0, 3);
      caixas_respostas(charX_1, charY_1, 2, 1, 3);
      caixas_respostas(charX_2, charY_2, 2, 2, 3);
      caixas_respostas(charX_3, charY_3, 2, 3, 3);
      resposta(22, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 4, 3);
      obj_colisao(4, 3);
      mud_fases();
    }
  }

  if (TELA === NIVEL3) {
    config_q(`Resolva a integral\nabaixo(Com Constante\njá na resposta)`);
    questao(3, 23);
    if (tempo_lv3[23] === 0) {
      level();
      moveCharacter(3);
      pont_veloc(3, 2, 1, 0, 3);
      indicador();
      caixas_respostas(charX_0, charY_0, 3, 0, 3);
      caixas_respostas(charX_1, charY_1, 3, 1, 3);
      caixas_respostas(charX_2, charY_2, 3, 2, 3);
      caixas_respostas(charX_3, charY_3, 3, 3, 3);
      resposta(23, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 1, 3);
      obj_colisao(1, 3);
      mud_fases();
    }
  }

  if (TELA === NIVEL4) {
    config_q(`Resolva a integral\nabaixo(Com Constante\njá na resposta)`);
    questao(3, 24);
    if (tempo_lv3[24] === 0) {
      level();
      moveCharacter(3);
      pont_veloc(3, 2, 1, 0, 3);
      indicador();
      caixas_respostas(charX_0, charY_0, 4, 0, 3);
      caixas_respostas(charX_1, charY_1, 4, 1, 3);
      caixas_respostas(charX_2, charY_2, 4, 2, 3);
      caixas_respostas(charX_3, charY_3, 4, 3, 3);
      resposta(24, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 3, 3);
      obj_colisao(3, 3);
      mud_fases();
    }
  }

  if (TELA === NIVEL5) {
    config_q(`Resolva a integral\nabaixo(Com Constante\njá na resposta)`);
    questao(3, 25);
    if (tempo_lv3[25] === 0) {
      level();
      moveCharacter(3);
      pont_veloc(3, 2, 1, 0, 3);
      indicador();
      caixas_respostas(charX_0, charY_0, 5, 0, 3);
      caixas_respostas(charX_1, charY_1, 5, 1, 3);
      caixas_respostas(charX_2, charY_2, 5, 2, 3);
      caixas_respostas(charX_3, charY_3, 5, 3, 3);
      resposta(25, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 2, 3);
      obj_colisao(2, 3);
      mud_fases();
    }
  }

  if (TELA === NIVEL6) {
    config_q(`Resolva a integral\nabaixo(Com Constante\njá na resposta)`);
    questao(3, 26);
    if (tempo_lv3[26] === 0) {
      level();
      moveCharacter(3);
      pont_veloc(3, 2, 1, 0, 3);
      indicador();
      caixas_respostas(charX_0, charY_0, 6, 0, 3);
      caixas_respostas(charX_1, charY_1, 6, 1, 3);
      caixas_respostas(charX_2, charY_2, 6, 2, 3);
      caixas_respostas(charX_3, charY_3, 6, 3, 3);
      resposta(26, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 4, 3);
      obj_colisao(4, 3);
      mud_fases();
    }
  }

  if (TELA === NIVEL7) {
    config_q(`Resolva a integral\nabaixo(Com Constante\njá na resposta)`);
    questao(3, 27);
    if (tempo_lv3[27] === 0) {
      level();
      moveCharacter(3);
      pont_veloc(3, 2, 1, 0, 3);
      indicador();
      caixas_respostas(charX_0, charY_0, 7, 0, 3);
      caixas_respostas(charX_1, charY_1, 7, 1, 3);
      caixas_respostas(charX_2, charY_2, 7, 2, 3);
      caixas_respostas(charX_3, charY_3, 7, 3, 3);
      resposta(27, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 1, 3);
      obj_colisao(1, 3);
      mud_fases();
    }
  }

  if (TELA === NIVEL8) {
    config_q(`Resolva a integral\nabaixo(Com Constante\njá na resposta)`);
    questao(3, 28);
    if (tempo_lv3[28] === 0) {
      level();
      moveCharacter(3);
      pont_veloc(3, 2, 1, 0, 3);
      indicador();
      caixas_respostas(charX_0, charY_0, 8, 0, 3);
      caixas_respostas(charX_1, charY_1, 8, 1, 3);
      caixas_respostas(charX_2, charY_2, 8, 2, 3);
      caixas_respostas(charX_3, charY_3, 8, 3, 3);
      resposta(28, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 3, 3);
      obj_colisao(3, 3);
      mud_fases();
    }
  }

  if (TELA === NIVEL9) {
    config_q(`Resolva a integral\nabaixo(Com Constante\njá na resposta)`);
    questao(3, 29);
    if (tempo_lv3[29] === 0) {
      level();
      moveCharacter(3);
      pont_veloc(3, 2, 1, 0, 3);
      indicador();
      caixas_respostas(charX_0, charY_0, 9, 0, 3);
      caixas_respostas(charX_1, charY_1, 9, 1, 3);
      caixas_respostas(charX_2, charY_2, 9, 2, 3);
      caixas_respostas(charX_3, charY_3, 9, 3, 3);
      resposta(29, charX_0, charY_0, charX_1, charY_1, charX_2, charY_2, charX_3, charY_3, 2, 3);
      obj_colisao(2, 3);
      mud_fases();
    }
  }

  if (TELA === VITORIA_L1) {
    vitoria("lim");
    retornar("menu_1");
    avancar("proximo_level");
  }

  if (TELA === VITORIA_L2) {
    vitoria("deri");
    retornar("menu_1");
    avancar("proximo_level_2");
  }

  if (TELA === VITORIA_L3) {
    vitoria("inter");
    retornar("menu_1");
    avancar("proximo_level_3");
  }

  if (TELA === DERROTA) {
    background(fill_derrota);
    snd_jogo.stop();
    indicador();
    retornar("iniciar")
  }

  if (TELA === CERTIFICADO) {
    certificado();
    indicador();
    retornar("menu_0");
  }

  if (TELA === PAUSE) {
    pause_jogo();
  }

}

// Função para que quando se pressiona a tecla, o objeto de mova;

function keyPressed() {

  moveCharacter(1);
  moveCharacter(2);
  moveCharacter(3);
  som();
  pause();
  reiniciar("jogo");
  reiniciar("placar");

}