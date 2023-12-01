// ******** INÍCIO DAS CONFIGURAÇÕES ANTES DE APARECER OBJETO ******** //

// Função para conigurar o conteúdo do texto-comando resposta;

function config_q(texto_comando) {

  // Background da questão;
  background(fill_pergunta);
  push();

  // Configurações de texto;
  textFont(f2_txt);
  fill(fill_fundo);
  textSize(size_txt);

  // Intrusão;
  text(texto_comando, l_rect, h_rect);

}

// Função das questões aparecendo, com temporizador e níveis;

function questao(level, numero) {

  // Para decainmento, questões do level 1;
  if (level === 1) {

    //Imagem da questão;
    image(
      img_questions1[numero],
      zero,
      l_rect / 2 + h_rect / 2,
      yCanvas,
      l_rect / 2 + h_rect
    );

    //Temporizador;
    text("tempo: " + tempo_lv1[numero], l_rect, y_rect);

    if (frameCount % 60 == tempo_lv1[numero] && tempo_lv1[numero] > zero) {
      liberar = true;
      tempo_lv1[numero]--;
    }
  }

  // Para decainmento, questões do level 2;
  if (level === 2) {

    //Imagem da questão;
    image(
      img_questions2[numero],
      zero,
      l_rect / 2 + h_rect / 2,
      yCanvas,
      l_rect / 2 + h_rect
    );

    //Temporizador;
    text("tempo: " + tempo_lv2[numero], l_rect, y_rect);

    if (frameCount % 60 == tempo_lv2[numero] && tempo_lv2[numero] > zero) {
      liberar = true;
      tempo_lv2[numero]--;
    }
  }

  // Para decainmento, questões do level 3;
  if (level === 3) {

    //Imagem da questão;
    image(
      img_questions3[numero],
      zero,
      l_rect / 2 + h_rect / 2,
      yCanvas,
      l_rect / 2 + h_rect
    );

    //Temporizador;
    text("tempo: " + tempo_lv3[numero], l_rect, y_rect);
    if (frameCount % 60 == tempo_lv3[numero] && tempo_lv3[numero] > zero) {
      liberar = true;
      tempo_lv3[numero]--;
    }
  }
  pop();

  // Para desbugar o som no draw;
  outros_sons("ante_tempo");
}

// ******** FIM DAS CONFIGURAÇÕES ANTES DE APARECER OBJETO ******** //



// ******** INÍCIO DAS CONFIGURAÇÕES DEPOIS DE APARECER OBJETO ******** //

// Função de movimentar o personagem em diferentes níveis;

function moveCharacter(level) {

  // Imagem do sinal de IGUAL / "PERSONAGEM"
  image(img_igual, PosX_bloco, PosY_bloco, lado_bloco, lado_bloco);

  // Validar o funcionamento do teclado;
  if (TELA !== PAUSE) {

    // Movimento com teclado e setas;
    if (keyIsDown(RIGHT_BUTTON) || keyIsDown(RIGHT_ARROW)) { //Direita;
      if (PosX_bloco <= xCanvas - lado_rect) {
        if (level === 1) { // Level 1;
          PosX_bloco += Diametro / 10; // 5;
        }
        if (level === 2) { // Level 2;
          PosX_bloco += Diametro * 1.5 / 10; // 7.5;
        }
        if (level === 3) { // Level 3;
          PosX_bloco += Diametro / 5; // 10;
        }
      }
    }

    if (keyIsDown(LEFT_BUTTON) || keyIsDown(LEFT_ARROW)) { // Esquerda;
      if (PosX_bloco >= Diametro / 2) {
        if (level === 1) { // Level 1;
          PosX_bloco -= Diametro / 10; // 5;
        }
        if (level === 2) { // Level 2;
          PosX_bloco -= Diametro * 1.5 / 10; // 7.5;
        }
        if (level === 3) { // Level 3;
          PosX_bloco -= Diametro / 5; // 10;
        }
      }
    }

    if (keyIsDown(UP_BUTTON) || keyIsDown(UP_ARROW)) { // Cima;
      if (PosY_bloco > Diametro / 2) {
        if (level === 1) { // Level 1;
          PosY_bloco -= Diametro / 10; // 5;
        }
        if (level === 2) { // Level 2;
          PosY_bloco -= Diametro * 1.5 / 10; // 7.5;
        }
        if (level === 3) { // Level 3;
          PosY_bloco -= Diametro / 5; // 10;
        }
      }
    }

    if (keyIsDown(DOWN_BUTTON) || keyIsDown(DOWN_ARROW)) { // Baixo;
      if (PosY_bloco <= yCanvas - h_rect) {
        if (level === 1) {
          PosY_bloco += Diametro / 10; // 5;
        }
        if (level === 2) {
          PosY_bloco += Diametro * 1.5 / 10; // 7.5;
        }
        if (level === 3) {
          PosY_bloco += Diametro / 5; // 10;
        }
      }
    }
  }
}

// Função dos aparecimentos das caixas-respostas caindo com velocidade aleatória;

function caixas_respostas(PosicaoX, PosicaoY, Vetor_M1, Vetor_M2, level) {

  // Configurações de textos-respostas das caixas;
  push();
  textSize(size_txt / 1.5); // 20;
  textFont(f2_txt);
  fill(fill_txt); // Cor preto
  square(PosicaoX, PosicaoY, lado_rect);
  fill(fill_fundo); // Branco
  textAlign(CENTER);

  // Escolhas de acordo com o nível;
  // Para lv_1;
  if (level === 1) {
    text(vetor_txt1[Vetor_M1][Vetor_M2], PosicaoX, PosicaoY);
  }

  // Para lv_2;
  if (level === 2) {
    textSize(size_txt / 2);
    text(vetor_txt2[Vetor_M1][Vetor_M2], PosicaoX, PosicaoY);
  }

  // Para lv_3;
  if (level === 3) {
    textSize(size_txt / 2);
    text(vetor_txt3[Vetor_M1][Vetor_M2], PosicaoX, PosicaoY);
  }

  pop();
}

// Configurações das verificação das colisõees e erros como true or false;
function resposta(imagens, charX0, charY0, charX1, charY1, charX2, charY2, charX3, charY3, opcao, level) {
  // Aparecimento das imagens por level na tela do puzzle;

  // Para Lv_1;
  if (level === 1) {

    // Imagem da equação;
    image(
      img_questions1[imagens],
      xCanvas / 4,
      yCanvas / 100,
      xCanvas / 2,
      h_rect
    );
  }

  // Para Lv_2;
  if (level === 2) {

    // Imagem da equação;
    image(
      img_questions2[imagens],
      xCanvas / 4,
      yCanvas / 100,
      xCanvas / 2,
      h_rect
    );
  }

  // Para Lv_3;
  if (level === 3) {

    // Imagem da equação;
    image(
      img_questions3[imagens],
      xCanvas / 4,
      yCanvas / 100,
      xCanvas / 2,
      h_rect
    );
  }

  // Variáveis de distância para obter-se a colisão correta;
  let colisao0 = dist(
    PosX_bloco + 15, // 175 + 15;
    PosY_bloco + 35, // 350 + 35;
    charX0 - 10, //
    charY0 + 10 //
  );
  let colisao1 = dist(
    PosX_bloco + 15, // 175 + 15;
    PosY_bloco + 35, // 350 + 35;
    charX1 - 10,
    charY1 + 10
  );
  let colisao2 = dist(
    PosX_bloco + 15, // 175 + 15;
    PosY_bloco + 35, // 350 + 35;
    charX2 - 10,
    charY2 + 10
  );
  let colisao3 = dist(
    PosX_bloco + 15, // 175 + 15;
    PosY_bloco + 35, // 350 + 35;
    charX3 - 10,
    charY3 + 10
  );

  // Primeira resposta: true, false, false, false;
  if (opcao === 1) {

    // Verificação da colisão;
    if (colisao0 > zero && colisao0 < lado_bloco) {
      pontos++;
      colisao = true;
    }
    if (colisao1 > zero && colisao1 < lado_bloco) {
      qtd_vida--;
      errado1 = true;
    }
    if (colisao2 > zero && colisao2 < lado_bloco) {
      qtd_vida--;
      errado2 = true;
    }
    if (colisao3 > zero && colisao3 < lado_bloco) {
      qtd_vida--;
      errado3 = true;
    }
  }

  // Segunda resposta: false, true, false, false;
  if (opcao === 2) {

    // Verificação da colisão;
    if (colisao0 > zero && colisao0 < lado_bloco) {
      qtd_vida--;
      errado1 = true;
    }
    if (colisao1 > zero && colisao1 < lado_bloco) {
      pontos++;
      colisao = true;
    }
    if (colisao2 > zero && colisao2 < lado_bloco) {
      qtd_vida--;
      errado2 = true;
    }
    if (colisao3 > zero && colisao3 < lado_bloco) {
      qtd_vida--;
      errado3 = true;
    }
  }

  // Terceira resposta: false, false, true, false;
  if (opcao === 3) {

    // Verificação da colisão;
    if (colisao0 > zero && colisao0 < lado_bloco) {
      qtd_vida--;
      errado2 = true;
    }
    if (colisao1 > zero && colisao1 < lado_bloco) {
      qtd_vida--;
      errado1 = true;
    }
    if (colisao2 > zero && colisao2 < lado_bloco) {
      pontos++;
      colisao = true;
    }
    if (colisao3 > zero && colisao3 < lado_bloco) {
      qtd_vida--;
      errado3 = true;
    }
  }

  // Quarta resposta: false, false, false, true;
  if (opcao === 4) {

    // Verificação da colisão;
    if (colisao0 > zero && colisao0 < lado_bloco) {
      qtd_vida--;
      errado1 = true;
    }
    if (colisao1 > zero && colisao1 < lado_bloco) {
      qtd_vida--;
      errado2 = true;
    }
    if (colisao2 > zero && colisao2 < lado_bloco) {
      qtd_vida--;
      errado3 = true;
    }
    if (colisao3 > zero && colisao3 < lado_bloco) {
      pontos++;
      colisao = true;
    }
  }

  // Função de sons para obter-se os pontos, perca de vidas;
  outros_sons("pontuacao");
}

// Função de COLISÃO(PONTUAÇÃO) e ERRO(VIDA);
function obj_colisao(opcao, level) {

  // Para level 1;
  if (level === 1) {

    // Primeira resposta: true, false, false, false;
    if (opcao === 1) {

      // Configurações para colisao e erro no level 1, primeira alternativa;
      if (charY_0 > yCanvas * 1.2 || colisao == true) {

        // Reinício das posições;
        charX_0 = random(aleatorio_l);
        charY_0 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed0, true);

        // Verificação de colisão e mudança de fases;
        if (colisao == true) {
          colisao = false;
          if (TELA === FASE0) {
            guardar_tela_atual = FASE1;
            TELA = VITORIA_L3;
          } else if (TELA === FASE3) {
            guardar_tela_atual = FASE4;
            TELA = FASE4;
          } else if (TELA === FASE7) {
            guardar_tela_atual = FASE8;
            TELA = FASE8;
          }
          alterador_de_fases = true;
        }
      }

      if (charY_1 > yCanvas * 1.2 || errado1 == true) {

        // Reinício das posições;
        charX_1 = random(aleatorio_l);
        charY_1 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed1, true);

        // Falseamento do erro
        errado1 = false;
      }

      if (charY_2 > yCanvas * 1.2 || errado2 == true) {

        // Reinício das posições;
        charX_2 = random(aleatorio_l);
        charY_2 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed2, true);

        // Falseamento do erro
        errado2 = false;
      }

      if (charY_3 > yCanvas * 1.2 || errado3 == true) {

        // Reinício das posições;
        charX_3 = random(aleatorio_l);
        charY_3 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed3, true);

        // Falseamento do erro
        errado3 = false;
      }

      // Apresentação da tela derrota;
      if (qtd_vida === zero) {
        TELA = DERROTA;
      }
    }

    // Segunda resposta: false, true, false, false;
    if (opcao === 2) {

      // Configurações para colisao e erro no level 1, segunda alternativa;
      if (charY_0 > yCanvas * 1.2 || errado1 == true) {

        // Reinício das posições;
        charX_0 = random(aleatorio_l);
        charY_0 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed0, true);

        // Falseamento do erro
        errado1 = false;
      }

      if (charY_1 > yCanvas * 1.2 || colisao == true) {

        // Reinício das posições;
        charX_1 = random(aleatorio_l);
        charY_1 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed1, true);

        // Verificação de colisão e mudança de fases;
        if (colisao == true) {
          colisao = false;
          if (TELA === FASE1) {
            guardar_tela_atual = FASE2;
            TELA = FASE2;
          } else if (TELA === FASE5) {
            guardar_tela_atual = FASE6;
            TELA = FASE6;
          } else if (TELA === FASE9) {
            guardar_tela_atual = LEVEL0;
            TELA = VITORIA_L1;
            snd_pass_lv1.play();
          }
          alterador_de_fases = true;
        }
      }

      if (charY_2 > yCanvas * 1.2 || errado2 == true) {

        // Reinício das posições;
        charX_2 = random(aleatorio_l);
        charY_2 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed2, true);

        // Falseamento do erro
        errado2 = false;
      }

      if (charY_3 > yCanvas * 1.2 || errado3 == true) {

        // Reinício das posições;
        charX_3 = random(aleatorio_l);
        charY_3 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed3, true);

        // Falseamento do erro
        errado3 = false;
      }

      // Apresentação da tela derrota;
      if (qtd_vida === zero) {
        TELA = DERROTA;
      }
    }

    // Terceira resposta: false, false, true, false;
    if (opcao === 3) {

      // Configurações para colisao e erro no level 1, terceira alternativa;
      if (charY_0 > yCanvas * 1.2 || errado1 == true) {

        // Reinício das posições;
        charX_0 = random(aleatorio_l);
        charY_0 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed0, true);

        // Falseamento do erro
        errado1 = false;
      }

      if (charY_1 > yCanvas * 1.2 || errado2 == true) {

        // Reinício das posições;
        charX_1 = random(aleatorio_l);
        charY_1 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed1, true);

        // Falseamento do erro
        errado2 = false;
      }

      if (charY_2 > yCanvas * 1.2 || colisao == true) {

        // Reinício das posições;
        charX_2 = random(aleatorio_l);
        charY_2 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed2, true);

        // Verificação de colisão e mudança de fases;
        if (colisao == true) {
          colisao = false;
          if (TELA === FASE4) {
            guardar_tela_atual = FASE5;
            TELA = FASE5;
          } else if (TELA === FASE8) {
            guardar_tela_atual = FASE9;
            TELA = FASE9;
          }
          alterador_de_fases = true;
        }
      }

      if (charY_3 > yCanvas * 1.2 || errado3 == true) {

        // Reinício das posições;
        charX_3 = random(aleatorio_l);
        charY_3 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed3, true);

        // Falseamento do erro
        errado3 = false;
      }

      // Apresentação da tela derrota;
      if (qtd_vida === zero) {
        TELA = DERROTA;
      }
    }

    // Quarta resposta: false, false, false, true;
    if (opcao === 4) {

      // Configurações para colisao e erro no level 1, quarta alternativa;
      if (charY_0 > yCanvas * 1.2 || errado1 == true) {

        // Reinício das posições;
        charX_0 = random(aleatorio_l);
        charY_0 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed0, true);

        // Falseamento do erro
        errado1 = false;
      }

      if (charY_1 > yCanvas * 1.2 || errado2 == true) {

        // Reinício das posições;
        charX_1 = random(aleatorio_l);
        charY_1 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed1, true);

        // Falseamento do erro
        errado2 = false;
      }

      if (charY_2 > yCanvas * 1.2 || errado3 == true) {

        // Reinício das posições;
        charX_2 = random(aleatorio_l);
        charY_2 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed2, true);

        // Falseamento do erro
        errado3 = false;
      }

      if (charY_3 > yCanvas * 1.2 || colisao == true) {

        // Reinício das posições;
        charX_3 = random(aleatorio_l);
        charY_3 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed3, true);

        // Verificação de colisão e mudança de fases;
        if (colisao == true) {
          colisao = false;
          if (TELA === FASE2) {
            guardar_tela_atual = FASE3;
            TELA = FASE3;
          } else if (TELA === FASE6) {
            guardar_tela_atual = FASE7;
            TELA = FASE7;
          }
          alterador_de_fases = true;
        }
      }

      // Apresentação da tela derrota;
      if (qtd_vida === zero) {
        TELA = DERROTA;
      }
    }
  }

  // Para level 2;
  if (level === 2) {

    // Primeira resposta: true, false, false, false;
    if (opcao === 1) {

      // Configurações para colisao e erro no level 2, primeira alternativa;
      if (charY_0 > yCanvas * 1.2 || colisao == true) {

        // Reinício das posições;
        charX_0 = random(aleatorio_l);
        charY_0 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed4, true);

        // Verificação de colisão e mudança de fases;
        if (colisao == true) {
          colisao = false;
          if (TELA === LEVEL0) {
            guardar_tela_atual = LEVEL1;
            TELA = LEVEL1;
          } else if (TELA === LEVEL3) {
            guardar_tela_atual = LEVEL4;
            TELA = LEVEL4;
          } else if (TELA === LEVEL7) {
            guardar_tela_atual = LEVEL8;
            TELA = LEVEL8;
          }
          alterador_de_fases = true;
        }
      }

      if (charY_1 > yCanvas * 1.2 || errado1 == true) {

        // Reinício das posições;
        charX_1 = random(aleatorio_l);
        charY_1 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed5, true);

        // Falseamento do erro
        errado1 = false;
      }

      if (charY_2 > yCanvas * 1.2 || errado2 == true) {

        // Reinício das posições;
        charX_2 = random(aleatorio_l);
        charY_2 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed6, true);

        // Falseamento do erro
        errado2 = false;
      }

      if (charY_3 > yCanvas * 1.2 || errado3 == true) {

        // Reinício das posições;
        charX_3 = random(aleatorio_l);
        charY_3 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed7, true);

        // Falseamento do erro
        errado3 = false;
      }

      // Apresentação da tela derrota;
      if (qtd_vida === zero) {
        TELA = DERROTA;
      }
    }

    // Segunda resposta: false, true, false, false;
    if (opcao === 2) {

      // Configurações para colisao e erro no level 2, segunda alternativa;
      if (charY_0 > yCanvas * 1.2 || errado1 == true) {

        // Reinício das posições;
        charX_0 = random(aleatorio_l);
        charY_0 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed4, true);

        // Falseamento do erro
        errado1 = false;
      }

      if (charY_1 > yCanvas * 1.2 || colisao == true) {

        // Reinício das posições;
        charX_1 = random(aleatorio_l);
        charY_1 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed5, true);

        // Verificação de colisão e mudança de fases;
        if (colisao == true) {
          colisao = false;
          if (TELA === LEVEL1) {
            guardar_tela_atual = LEVEL2;
            TELA = LEVEL2;
          } else if (TELA === LEVEL5) {
            guardar_tela_atual = LEVEL6;
            TELA = LEVEL6;
          } else if (TELA === LEVEL9) {
            guardar_tela_atual = NIVEL0;
            TELA = VITORIA_L2;
            snd_pass_lv2.play();
          }
          alterador_de_fases = true;
        }
      }

      if (charY_2 > yCanvas * 1.2 || errado2 == true) {

        // Reinício das posições;
        charX_2 = random(aleatorio_l);
        charY_2 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed6, true);

        // Falseamento do erro
        errado2 = false;
      }

      if (charY_3 > yCanvas * 1.2 || errado3 == true) {

        // Reinício das posições;
        charX_3 = random(aleatorio_l);
        charY_3 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed7, true);

        // Falseamento do erro
        errado3 = false;
      }

      // Apresentação da tela derrota;
      if (qtd_vida === zero) {
        TELA = DERROTA;
      }
    }

    // Terceira resposta: false, false, true, false;
    if (opcao === 3) {

      // Configurações para colisao e erro no level 2, terceira alternativa;
      if (charY_0 > yCanvas * 1.2 || errado2 == true) {

        // Reinício das posições;
        charX_0 = random(aleatorio_l);
        charY_0 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed4, true);

        // Falseamento do erro
        errado2 = false;
      }

      if (charY_1 > yCanvas * 1.2 || errado1 == true) {

        // Reinício das posições;
        charX_1 = random(aleatorio_l);
        charY_1 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed5, true);

        // Falseamento do erro
        errado1 = false;
      }

      if (charY_2 > yCanvas * 1.2 || colisao == true) {

        // Reinício das posições;
        charX_2 = random(aleatorio_l);
        charY_2 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed6, true);

        // Verificação de colisão e mudança de fases;
        if (colisao == true) {
          colisao = false;
          if (TELA === LEVEL4) {
            guardar_tela_atual = LEVEL5;
            TELA = LEVEL5;
          } else if (TELA === LEVEL8) {
            guardar_tela_atual = LEVEL9;
            TELA = LEVEL9;
          }
          alterador_de_fases = true;
        }
      }

      if (charY_3 > yCanvas * 1.2 || errado3 == true) {

        // Reinício das posições;
        charX_3 = random(aleatorio_l);
        charY_3 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed7, true);

        // Falseamento do erro
        errado3 = false;
      }

      // Apresentação da tela derrota;
      if (qtd_vida === zero) {
        TELA = DERROTA;
      }
    }

    // Quarta resposta: false, false, false, true;
    if (opcao === 4) {

      // Configurações para colisao e erro no level 2, quarta alternativa;
      if (charY_0 > yCanvas * 1.2 || errado1 == true) {

        // Reinício das posições;
        charX_0 = random(aleatorio_l);
        charY_0 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed4, true);

        // Falseamento do erro
        errado1 = false;
      }

      if (charY_1 > yCanvas * 1.2 || errado2 == true) {

        // Reinício das posições;
        charX_1 = random(aleatorio_l);
        charY_1 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed5, true);

        // Falseamento do erro
        errado2 = false;
      }

      if (charY_2 > yCanvas * 1.2 || errado3 == true) {

        // Reinício das posições;
        charX_2 = random(aleatorio_l);
        charY_2 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed6, true);

        // Falseamento do erro
        errado3 = false;
      }

      if (charY_3 > yCanvas * 1.2 || colisao == true) {

        // Reinício das posições;
        charX_3 = random(aleatorio_l);
        charY_3 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed7, true);

        // Verificação de colisão e mudança de fases;
        if (colisao == true) {
          colisao = false;
          if (TELA === LEVEL2) {
            guardar_tela_atual = LEVEL3;
            TELA = LEVEL3;
          } else if (TELA === LEVEL6) {
            guardar_tela_atual = LEVEL7;
            TELA = LEVEL7;
          }
          alterador_de_fases = true;
        }
      }

      // Apresentação da tela derrota;
      if (qtd_vida === zero) {
        TELA = DERROTA;
      }
    }
  }

  // Para level 3;
  if (level === 3) {

    // Primeira resposta: true, false, false, false;
    if (opcao === 1) {

      // Configurações para colisao e erro no level 3, primeira alternativa;
      if (charY_0 > yCanvas * 1.2 || colisao == true) {

        // Reinício das posições;
        charX_0 = random(aleatorio_l);
        charY_0 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed8, true);

        // Verificação de colisão e mudança de fases;
        if (colisao == true) {
          colisao = false;
          if (TELA === NIVEL0) {
            guardar_tela_atual = NIVEL1;
            TELA = NIVEL1;
          } else if (TELA === NIVEL3) {
            guardar_tela_atual = NIVEL4;
            TELA = NIVEL4;
          } else if (TELA === NIVEL7) {
            guardar_tela_atual = NIVEL8;
            TELA = NIVEL8;
          }
          alterador_de_fases = true;
        }
      }

      if (charY_1 > yCanvas * 1.2 || errado1 == true) {

        // Reinício das posições;
        charX_1 = random(aleatorio_l);
        charY_1 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed9, true);

        // Falseamento do erro
        errado1 = false;
      }

      if (charY_2 > yCanvas * 1.2 || errado2 == true) {

        // Reinício das posições;
        charX_2 = random(aleatorio_l);
        charY_2 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed10, true);

        // Falseamento do erro
        errado2 = false;
      }

      if (charY_3 > yCanvas * 1.2 || errado3 == true) {

        // Reinício das posições;
        charX_3 = random(aleatorio_l);
        charY_3 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed11, true);

        // Falseamento do erro
        errado3 = false;
      }

      // Apresentação da tela derrota;
      if (qtd_vida === zero) {
        TELA = DERROTA;
      }
    }

    // Segunda resposta: false, true, false, false;
    if (opcao === 2) {

      // Configurações para colisao e erro no level 3, segunda alternativa;
      if (charY_0 > yCanvas * 1.2 || errado1 == true) {

        // Reinício das posições;
        charX_0 = random(aleatorio_l);
        charY_0 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed8, true);

        // Falseamento do erro
        errado1 = false;
      }

      if (charY_1 > yCanvas * 1.2 || colisao == true) {

        // Reinício das posições;
        charX_1 = random(aleatorio_l);
        charY_1 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed9, true);

        // Verificação de colisão e mudança de fases;
        if (colisao == true) {
          colisao = false;
          if (TELA === NIVEL1) {
            guardar_tela_atual = NIVEL2;
            TELA = NIVEL2;
          } else if (TELA === NIVEL5) {
            guardar_tela_atual = NIVEL6;
            TELA = NIVEL6;
          } else if (TELA === NIVEL9) {
            TELA = VITORIA_L3;
            snd_pass_lv3.play();
          }
          alterador_de_fases = true;
        }
      }

      if (charY_2 > yCanvas * 1.2 || errado2 == true) {

        // Reinício das posições;
        charX_2 = random(aleatorio_l);
        charY_2 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed10, true);

        // Falseamento do erro
        errado2 = false;
      }

      if (charY_3 > yCanvas * 1.2 || errado3 == true) {

        // Reinício das posições;
        charX_3 = random(aleatorio_l);
        charY_3 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed11, true);

        // Falseamento do erro
        errado3 = false;
      }

      // Apresentação da tela derrota;
      if (qtd_vida === zero) {
        TELA = DERROTA;
      }
    }

    // Terceira resposta: false, false, true, false;
    if (opcao === 3) {

      // Configurações para colisao e erro no level 3, terceira alternativa;
      if (charY_0 > yCanvas * 1.2 || errado2 == true) {

        // Reinício das posições;
        charX_0 = random(aleatorio_l);
        charY_0 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed8, true);

        // Falseamento do erro
        errado2 = false;
      }

      if (charY_1 > yCanvas * 1.2 || errado1 == true) {

        // Reinício das posições;
        charX_1 = random(aleatorio_l);
        charY_1 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed9, true);

        // Falseamento do erro
        errado1 = false;
      }
      if (charY_2 > yCanvas * 1.2 || colisao == true) {

        // Reinício das posições;
        charX_2 = random(aleatorio_l);
        charY_2 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed10, true);

        // Verificação de colisão e mudança de fases;
        if (colisao == true) {
          colisao = false;
          if (TELA === NIVEL4) {
            guardar_tela_atual = NIVEL5;
            TELA = NIVEL5;
          } else if (TELA === NIVEL8) {
            guardar_tela_atual = NIVEL9;
            TELA = NIVEL9;
          }
          alterador_de_fases = true;
        }
      }

      if (charY_3 > yCanvas * 1.2 || errado3 == true) {

        // Reinício das posições;
        charX_3 = random(aleatorio_l);
        charY_3 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed11, true);

        // Falseamento do erro
        errado3 = false;
      }

      // Apresentação da tela derrota;
      if (qtd_vida === zero) {
        TELA = DERROTA;
      }
    }

    // Quarta resposta: false, false, false, true;
    if (opcao === 4) {

      // Configurações para colisao e erro no level 3, quarta alternativa;
      if (charY_0 > yCanvas * 1.2 || errado1 == true) {

        // Reinício das posições;
        charX_0 = random(aleatorio_l);
        charY_0 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed8, true);

        // Falseamento do erro
        errado1 = false;
      }
      if (charY_1 > yCanvas * 1.2 || errado2 == true) {

        // Reinício das posições;
        charX_1 = random(aleatorio_l);
        charY_1 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed9, true);

        // Falseamento do erro
        errado2 = false;
      }
      if (charY_2 > yCanvas * 1.2 || errado3 == true) {

        // Reinício das posições;
        charX_2 = random(aleatorio_l);
        charY_2 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed10, true);

        // Falseamento do erro
        errado3 = false;
      }
      if (charY_3 > yCanvas * 1.2 || colisao == true) {

        // Reinício das posições;
        charX_3 = random(aleatorio_l);
        charY_3 = zero;

        // Aleatoriedade da velocidade;
        shuffle(vetor_speed11, true);

        // Verificação de colisão e mudança de fases;
        if (colisao == true) {
          colisao = false;
          if (TELA === NIVEL2) {
            guardar_tela_atual = NIVEL3;
            TELA = NIVEL3;
          } else if (TELA === NIVEL6) {
            guardar_tela_atual = NIVEL7;
            TELA = NIVEL7;
          }
          alterador_de_fases = true;
        }
      }

      // Apresentação da tela derrota;
      if (qtd_vida === zero) {
        TELA = DERROTA;
      }
    }
  }
}

// ******** FIM DAS CONFIGURAÇÕES DEPOIS DE APARECER OBJETO ******** //