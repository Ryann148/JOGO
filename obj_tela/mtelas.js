// Função mouseClicked para mudança de telas;

function mouseClicked() {

  // Mudança para tela LEVEL 1;
  if (TELA === INICIAR) {
    if (
      mouseX >= l_rect / 2 - h_rect / 2 &&
      mouseX <= l_rect / 2 + h_rect / 2 &&
      mouseY >= zero &&
      mouseY <= l_rect * 1.4
    ) {
      TELA = FASE0;
      snd_menu.stop();
      console.log("Aqui é a tela fase0");
    }
  }

  // Mudança para tela LEVEL 2;
  if (TELA === INICIAR && liberar_lv2 == true) {
    if (
      mouseX >= l_rect - h_rect / 2 &&
      mouseX <= l_rect + h_rect / 2 &&
      mouseY >= zero &&
      mouseY <= l_rect * 1.4
    ) {
      TELA = LEVEL0;
      console.log("Aqui é a tela level0");
    }
  }

  // Mudança para tela LEVEL 3;
  if (TELA === INICIAR && liberar_lv3 == true) {
    if (
      mouseX >= l_rect * 1.5 - h_rect / 2 &&
      mouseX <= l_rect * 1.5 + h_rect / 2 &&
      mouseY >= zero &&
      mouseY <= l_rect * 1.4
    ) {
      TELA = NIVEL0;
      console.log("Aqui é a tela nivel0");
    }
  }

  // Retornar para tela iniciar
  if (TELA === DERROTA) {
    if (
      mouseX >= xCanvas / 4 &&
      mouseX <= xCanvas / 4 + l_rect &&
      mouseY >= yCanvas / 2 + (h_rect * 3) / 5 &&
      mouseY <= yCanvas / 2 + (h_rect * 8) / 5
    ) {
      reiniciar_jogo("do_jogo");
      console.log("Aqui é a tela de início do jogo");
    }
  }

  ////// ****** INÍCIO DAS CONFIGURAÇÕES DA TELA MENU --- MUDANÇA DE TELAS ****** //////

  // DE MENU PARA INICIAR;
  if (TELA === MENU) {

    // Para tela INICIAR;
    if (
      mouseX >= xCanvas / 2 - l_rect / 2 &&
      mouseX <= xCanvas / 2 + l_rect / 2 &&
      mouseY >= yCanvas / 3.5 - h_rect / 2 &&
      mouseY <= yCanvas / 3.5 + h_rect / 2
    ) {
      TELA = INICIAR;
      console.log("Aqui é o a tela de início do jogo");
    } else if (

      // DE MENU PARA CONTROLES;
      mouseX >= xCanvas / 2 - l_rect / 2 &&
      mouseX <= xCanvas / 2 + l_rect / 2 &&
      mouseY >= yCanvas / 2.2 - h_rect / 2 &&
      mouseY <= yCanvas / 2.2 + h_rect / 2
    ) {
      TELA = CONTROLES_0;
      console.log("Aqui é o a tela de controles do jogo");
    } else if (

      // DE MENU PARA CREDITOS;
      mouseX >= xCanvas / 2 - l_rect / 2 &&
      mouseX <= xCanvas / 2 + l_rect / 2 &&
      mouseY >= yCanvas / 1.6 - h_rect / 2 &&
      mouseY <= yCanvas / 1.6 + h_rect / 2
    ) {
      TELA = CREDITOS_0;
      console.log("Aqui é o a tela de créditos do jogo");
    } else if (

      // DE MENU PARA RANKING;
      mouseX >= l_rect - h_rect - (l_rect * 0.9) / 4 &&
      mouseX <= l_rect - h_rect + (l_rect * 0.9) / 4 &&
      mouseY >= l_rect + h_rect * 2.2 - (h_rect * 4) / 10 &&
      mouseY <= l_rect + h_rect * 2.2 + (h_rect * 4) / 10
    ) {
      TELA = RANKING;
      console.log("Aqui é o a tela de ranking do jogo");
    } else if (

      // DE MENU PARA OPÇÕES;
      mouseX >= l_rect + h_rect - (l_rect * 0.9) / 4 &&
      mouseX <= l_rect + h_rect + (l_rect * 0.9) / 4 &&
      mouseY >= l_rect + h_rect * 2.2 - (h_rect * 4) / 10 &&
      mouseY <= l_rect + h_rect * 2.2 + (h_rect * 4) / 10
    ) {
      TELA = OPCOES_0;
      console.log("Aqui é o a tela de opções do jogo");
    }
  }

  ////// ****** FIM DAS CONFIGURAÇÕES DA TELA MENU --- MUDANÇA DE TELAS ****** //////



  ////// ****** INÍCIO DAS CONFIGURAÇÕES DO CLIQUE RETORNAR --- MUDANÇA DE TELAS ****** //////

  // Para essas telas para retornar ao menu;
  if (
    TELA === INICIAR ||
    TELA === CONTROLES_1 ||
    TELA === CREDITOS_0 ||
    TELA === CREDITOS_1 ||
    TELA === CREDITOS_2 ||
    TELA === CREDITOS_3 ||
    TELA === CREDITOS_4 ||
    TELA === CREDITOS_5 ||
    TELA === RANKING ||
    TELA === OPCOES_0 ||
    TELA === CERTIFICADO
  ) {
    if (
      mouseX >= xCanvas / 1.15 - l_rect / 4 && // 297.83
      mouseX <= xCanvas / 1.15 + l_rect / 4 && // 397.83
      mouseY >= yCanvas / 1.05 - h_rect / 3 && // 364.28
      mouseY <= yCanvas / 1.05 + h_rect / 3 // 397.6
    ) {
      TELA = MENU;
      console.log("Aqui é o menu principal");
    }
  }

  // Para retornar ao menu de outro botão;

  // Tela vitorial_L1 para a tela INICIAR;
  if (TELA === VITORIA_L1) {
    if (
      mouseX >= xCanvas / 4 &&
      mouseX <= xCanvas / 4 + l_rect &&
      mouseY >= yCanvas - h_rect * 1.3 &&
      mouseY <= yCanvas - h_rect / 4
    ) {
      TELA = INICIAR;
      reiniciar_jogo("do_jogo");
      liberar_lv2 = true;
    }
  }

  // Tela vitorial_L2 para a tela INICIAR;
  if (TELA === VITORIA_L2) {
    if (
      mouseX >= xCanvas / 4 &&
      mouseX <= xCanvas / 4 + l_rect &&
      mouseY >= yCanvas - h_rect * 1.3 &&
      mouseY <= yCanvas - h_rect / 4
    ) {
      TELA = INICIAR;
      reiniciar_jogo("do_jogo");
      liberar_lv3 = true;
    }
  }

  // Tela vitoria_L3 para a tela MENU;
  if (TELA === VITORIA_L3) {
    if (
      mouseX >= xCanvas / 4 &&
      mouseX <= xCanvas / 4 + l_rect &&
      mouseY >= yCanvas - h_rect * 1.3 &&
      mouseY <= yCanvas - h_rect / 4
    ) {
      reiniciar_jogo("do_jogo");
      TELA = MENU;
      console.log("Aqui é o menu principal");
    }
  }

  // Para retornar ao pause da tela OPCOES_1;
  if (TELA === OPCOES_1) {
    if (
      mouseX >= l_rect - l_rect / 4 && // 150
      mouseX <= l_rect + l_rect / 4 && // 250;
      mouseY >= yCanvas / 1.05 - h_rect / 2 && // 355.95
      mouseY <= yCanvas / 1.05 + h_rect / 2 // 405.95
    ) {
      TELA = PAUSE;
    }
  }

  ////// ****** FIM DAS CONFIGURAÇÕES DO CLIQUE RETORNAR --- MUDANÇA DE TELAS ****** //////


  ////// ****** INÍCIO DAS CONFIGURAÇÕES DO CLIQUE AVANÇAR --- MUDANÇA DE TELAS ****** //////

  // Avançar tela na TELA CREDITOS =>
  if (TELA === CREDITOS_0) {
    if (
      mouseX >= xCanvas / 1.05 - l_rect / 10 &&
      mouseX <= xCanvas / 1.05 + l_rect / 10 &&
      mouseY >= yCanvas / 2 - (h_rect * 2) / 5 &&
      mouseY <= yCanvas / 2 + (h_rect * 2) / 5
    ) {
      TELA = CREDITOS_1;
      console.log("Aqui é a segunda tela de créditos");
    }
  } else if (TELA === CREDITOS_1) {
    // Tela CREDITOS 2;
    if (
      mouseX >= xCanvas / 1.05 - l_rect / 10 &&
      mouseX <= xCanvas / 1.05 + l_rect / 10 &&
      mouseY >= yCanvas / 2 - (h_rect * 2) / 5 &&
      mouseY <= yCanvas / 2 + (h_rect * 2) / 5
    ) {
      TELA = CREDITOS_2;
      console.log("Aqui é a terceira tela de créditos");
    }
  } else if (TELA === CREDITOS_2) {
    // Tela CREDITOS_3;
    if (
      mouseX >= xCanvas / 1.05 - l_rect / 10 &&
      mouseX <= xCanvas / 1.05 + l_rect / 10 &&
      mouseY >= yCanvas / 2 - (h_rect * 2) / 5 &&
      mouseY <= yCanvas / 2 + (h_rect * 2) / 5
    ) {
      TELA = CREDITOS_3;
      console.log("Aqui é a quarta tela de créditos");
    }
  } else if (TELA === CREDITOS_3) {
    // Tela CREDITOS_4;
    if (
      mouseX >= xCanvas / 1.05 - l_rect / 10 &&
      mouseX <= xCanvas / 1.05 + l_rect / 10 &&
      mouseY >= yCanvas / 2 - (h_rect * 2) / 5 &&
      mouseY <= yCanvas / 2 + (h_rect * 2) / 5
    ) {
      TELA = CREDITOS_4;
      console.log("Aqui é a quinta tela de créditos");
    }
  } else if (TELA === CREDITOS_4) {
    // Tela CREDITOS_5;
    if (
      mouseX >= xCanvas / 1.05 - l_rect / 10 &&
      mouseX <= xCanvas / 1.05 + l_rect / 10 &&
      mouseY >= yCanvas / 2 - (h_rect * 2) / 5 &&
      mouseY <= yCanvas / 2 + (h_rect * 2) / 5
    ) {
      TELA = CREDITOS_5;
      console.log("Aqui é a sexta tela de créditos");
    }
  } else if (TELA === CONTROLES_0) {
    // Avançar tela na TELA CONTROLE =>
    if (
      mouseX >= xCanvas / 1.05 - l_rect / 10 &&
      mouseX <= xCanvas / 1.05 + l_rect / 10 &&
      mouseY >= yCanvas / 2 - (h_rect * 2) / 5 &&
      mouseY <= yCanvas / 2 + (h_rect * 2) / 5
    ) {
      TELA = CONTROLES_1;
      console.log("Aqui é a segunda tela de controles");
    }
  }

  // Clique para avançar para próximo level ou retornar ao início;

  // Avançar para tela LEVEL0;
  if (TELA === VITORIA_L1) {
    if (
      mouseX >= xCanvas / 4 &&
      mouseX <= xCanvas / 4 + l_rect &&
      mouseY >= yCanvas / 2 + (h_rect * 3) / 5 &&
      mouseY <= yCanvas / 2 + (h_rect * 8) / 5
    ) {
      TELA = LEVEL0;
      qtd_vida++;
      mais_vida = true;
      liberar_lv2 = true;
    }
  }

  // Avançar para a tela NIVEL0;
  if (TELA === VITORIA_L2) {
    if (
      mouseX >= xCanvas / 4 &&
      mouseX <= xCanvas / 4 + l_rect &&
      mouseY >= yCanvas / 2 + (h_rect * 3) / 5 &&
      mouseY <= yCanvas / 2 + (h_rect * 8) / 5
    ) {
      TELA = NIVEL0;
      qtd_vida++;
      mais_vida = true;
      liberar_lv3 = true;
    }
  }

  // Avançar para a tela BONUS_JOGO;
  if (TELA === VITORIA_L3) {
    if (
      mouseX >= xCanvas / 4 &&
      mouseX <= xCanvas / 4 + l_rect &&
      mouseY >= yCanvas / 2 + (h_rect * 3) / 5 &&
      mouseY <= yCanvas / 2 + (h_rect * 8) / 5
    ) {
      TELA = CERTIFICADO;
    }
  }

  ////// ****** FIM DAS CONFIGURAÇÕES DO CLIQUE RETORNAR --- MUDANÇA DE TELAS ****** //////


  ////// ****** INÍCIO DAS CONFIGURAÇÕES DA TELA PAUSE --- MUDANÇA DE TELAS ****** //////

  // Continuar o jogo;
  if (TELA === PAUSE) {
    if (
      mouseX >= xCanvas / 2 - l_rect / 2 &&
      mouseX <= xCanvas / 2 + l_rect / 2 &&
      mouseY >= h_rect * 3 - h_rect / 2.5 &&
      mouseY <= h_rect * 3 + h_rect / 2.5
    ) {
      TELA = guardar_tela_atual;
    } else if (

      // Opções;
      mouseX >= xCanvas / 2 - l_rect / 2 &&
      mouseX <= xCanvas / 2 + l_rect / 2 &&
      mouseY >= h_rect * 4 - h_rect / 2.5 &&
      mouseY <= h_rect * 4 + h_rect / 2.5
    ) {
      TELA = OPCOES_1;
    } else if (

      // Sair e salvar;
      mouseX >= xCanvas / 2 - l_rect / 2 &&
      mouseX <= xCanvas / 2 + l_rect / 2 &&
      mouseY >= h_rect * 5 - h_rect / 2.5 &&
      mouseY <= h_rect * 5 + h_rect / 2.5
    ) {
      bolean = true;
      reiniciar_jogo("pause_salvar");
    } else if (

      // Sair;
      mouseX >= xCanvas / 2 - l_rect / 2 &&
      mouseX <= xCanvas / 2 + l_rect / 2 &&
      mouseY >= h_rect * 6 - h_rect / 2.5 &&
      mouseY <= h_rect * 6 + h_rect / 2.5
    ) {
      reiniciar_jogo("do_jogo_pause");
    }
  }
}