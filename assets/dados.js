/* ==========================================================================
   FAVO RESTAURANTE E CAFÉ
   ARQUIVO CENTRAL DE INFORMAÇÕES

   Este é o único arquivo que você precisa editar para mudar o conteúdo do site.
   Altere apenas o texto entre aspas. Não apague vírgulas, chaves ou colchetes.
   Depois de salvar, atualize a página no navegador (F5).
   ========================================================================== */

window.FAVO = {

  /* ---------------------------------------------------------------- MARCA */
  marca: {
    nome: "Favo Restaurante e Café",
    nomeCurto: "Favo",
    slogan: "Sabores, encontros e momentos para aproveitar sem pressa.",
    descricao: "Um espaço acolhedor em Florianópolis onde boa comida, café e brunch se encontram.",
    cidade: "Florianópolis",
    estado: "Santa Catarina",
    logoClara: "assets/marca/favo-logo-claro.png",   // logo branca (fundos escuros)
    logoEscura: "assets/marca/favo-logo-escuro.png", // logo escura (cabeçalho)
    logoVerde: "assets/marca/favo-logo-verde.png"    // logo verde (destaque no início)
  },

  /* -------------------------------------------------------------- CONTATO */
  contato: {
    // Número no formato internacional, apenas dígitos: 55 + DDD + número
    whatsappNumero: "5548984576220",
    whatsappExibicao: "(48) 98457-6220",
    whatsappMensagem: "Olá! Vim pelo site do Favo e gostaria de mais informações.",
    instagramUsuario: "@favofloripa",
    instagramUrl: "https://www.instagram.com/favofloripa/"
  },

  /* ---------------------------------------------------- ENDEREÇO E MAPA */
  local: {
    logradouro: "R. Des. Pedro Silva, 3078",
    cidadeEstado: "Florianópolis, Santa Catarina",
    cep: "88080-700",
    // Texto usado para montar o mapa e a rota. Mantenha completo.
    buscaMaps: "R. Des. Pedro Silva, 3078, Florianópolis, Santa Catarina, 88080-700",
    // Opcional: cole aqui o link curto da localização no Google Maps.
    // Se deixar vazio, o site monta a rota automaticamente pelo endereço acima.
    linkPersonalizado: ""
  },

  /* ------------------------------------------------------------ HORÁRIOS */
  horarios: [
    { dias: "Segunda a sexta", horas: "9h às 20h" },
    { dias: "Sábados, domingos e feriados", horas: "8h às 20h" }
  ],
  horarioResumo: "Segunda a sexta, 9h às 20h · Fins de semana e feriados, 8h às 20h",

  /* -------------------------------------------------------------- SEÇÕES */
  hero: {
    etiqueta: "Restaurante · Café · Brunch",
    titulo: "Sabores, encontros e momentos para aproveitar",
    tituloDestaque: "sem pressa.",
    texto: "Um espaço acolhedor onde boa comida, café e experiências especiais se encontram.",
    botaoPrimario: "Conhecer o restaurante",
    botaoSecundario: "Falar pelo WhatsApp",
    imagemPrincipal: "assets/fotos/prod-01-risoto-camarao",
    imagemPrincipalAlt: "Risoto cremoso com camarões, finalizado com rodela de limão e flor comestível",
    imagemSecundaria: "assets/fotos/prod-05-croissant",
    imagemSecundariaAlt: "Croissant recheado servido em prato de cerâmica com toque de pesto"
  },

  sobre: {
    etiqueta: "Sobre o Favo",
    titulo: "Uma experiência feita para ser compartilhada.",
    texto: "Cada detalhe foi pensado para proporcionar bons encontros, sabores marcantes e momentos agradáveis em um ambiente acolhedor.",
    textoSecundario: "Do primeiro café da manhã ao jantar sem hora para acabar, o Favo é o tipo de lugar onde a conversa se estende, o prato surpreende e ninguém sente vontade de olhar o relógio.",
    imagem: "assets/fotos/prod-03-torrada-figo",
    imagemAlt: "Torrada artesanal com figo, presunto cru e flores comestíveis servida em prato de cerâmica escura"
  },

  experiencia: {
    etiqueta: "Experiência gastronômica",
    titulo: "Três maneiras de aproveitar o dia.",
    texto: "O mesmo cuidado, em três tempos diferentes.",
    blocos: [
      {
        numero: "01",
        titulo: "Restaurante",
        texto: "Refeições preparadas com atenção aos ingredientes e servidas com o cuidado de quem gosta de receber. Um almoço tranquilo ou um jantar demorado, sempre com a mesma dedicação.",
        imagem: "assets/fotos/prod-01-risoto-camarao",
        imagemAlt: "Risoto de camarão servido em prato branco"
      },
      {
        numero: "02",
        titulo: "Café",
        texto: "Um ambiente agradável para tomar um café, conversar, trabalhar ou simplesmente fazer uma pausa no meio do dia. O tempo aqui corre mais devagar.",
        imagem: "assets/fotos/prod-07-pao-de-queijo",
        imagemAlt: "Pães de queijo dourados acompanhando o café"
      },
      {
        numero: "03",
        titulo: "Brunch",
        texto: "Sabores leves, bebidas e opções especiais para aproveitar a manhã com tranquilidade, sem pressa de começar o dia.",
        imagem: "assets/fotos/prod-06-torrada-ovo-abacate",
        imagemAlt: "Torrada com abacate e ovo, opção do brunch"
      }
    ]
  },

  brunch: {
    etiqueta: "Brunch no Favo",
    titulo: "Manhãs que merecem ser aproveitadas.",
    texto: "Nosso brunch reúne sabores, cuidado e uma atmosfera acolhedora para transformar a manhã em um momento especial.",
    textoSecundario: "Uma mesa posta com calma, café passado na hora e pratos pensados para serem divididos entre conversas longas.",
    botao: "Consultar dias e horários",
    imagem: "assets/fotos/prod-04-omelete-pao",
    imagemAlt: "Omelete com queijo e ervas acompanhado de pão artesanal tostado"
  },

  ambiente: {
    etiqueta: "O ambiente",
    titulo: "Um ambiente para viver bons momentos.",
    texto: "Luz que entra devagar, mesas com espaço para respirar e uma decoração que convida a ficar. O Favo foi pensado para que cada visita pareça um pouco mais longa do que o previsto.",
    qualidades: [
      { titulo: "Luz natural", texto: "Um salão claro, pensado para acompanhar o ritmo do dia." },
      { titulo: "Mesas com espaço", texto: "Distância suficiente para conversar sem pressa e sem ruído." },
      { titulo: "Atendimento próximo", texto: "Gente que conhece o cardápio e gosta de receber bem." }
    ],
    // As fotos abaixo ainda não existem na pasta. Assim que você colocar os
    // arquivos com estes nomes em assets/fotos/, elas aparecem automaticamente
    // no lugar dos espaços reservados.
    fotos: [
      { imagem: "assets/fotos/ambiente-salao", imagemAlt: "Salão do Favo com mesas postas", legenda: "Salão" },
      { imagem: "assets/fotos/ambiente-detalhe", imagemAlt: "Detalhe da decoração do Favo", legenda: "Detalhes" },
      { imagem: "assets/fotos/ambiente-externa", imagemAlt: "Área externa do Favo", legenda: "Área externa" }
    ]
  },

  galeria: {
    etiqueta: "Galeria",
    titulo: "Um pouco do que servimos.",
    texto: "Clique em qualquer imagem para ampliar.",
    itens: [
      { imagem: "assets/fotos/prod-01-risoto-camarao", alt: "Risoto cremoso com camarões e flor comestível", legenda: "Risoto de camarão" },
      { imagem: "assets/fotos/prod-05-croissant", alt: "Croissant recheado com toque de pesto em prato de cerâmica", legenda: "Croissant recheado" },
      { imagem: "assets/fotos/prod-03-torrada-figo", alt: "Torrada com figo, presunto cru e flores comestíveis", legenda: "Torrada de figo" },
      { imagem: "assets/fotos/prod-06-torrada-ovo-abacate", alt: "Torrada com abacate, ovo e temperos", legenda: "Torrada de abacate e ovo" },
      { imagem: "assets/fotos/prod-04-omelete-pao", alt: "Omelete com ervas acompanhado de pão tostado", legenda: "Omelete com pão" },
      { imagem: "assets/fotos/prod-07-pao-de-queijo", alt: "Pães de queijo dourados servidos quentes", legenda: "Pão de queijo" }
    ]
  },

  localizacao: {
    etiqueta: "Horários e localização",
    titulo: "Estamos esperando você.",
    botaoRota: "Como chegar"
  },

  chamadaFinal: {
    titulo: "Venha conhecer e viver essa experiência.",
    texto: "Boa comida, café, brunch e um ambiente preparado para receber você.",
    botaoPrimario: "Falar pelo WhatsApp",
    botaoSecundario: "Ver localização"
  },

  rodape: {
    descricao: "Restaurante e café em Florianópolis. Um espaço acolhedor para almoçar, tomar um café ou aproveitar o brunch com calma."
  },

  /* ---------------------------------------------------------- NAVEGAÇÃO */
  navegacao: [
    { rotulo: "Início", alvo: "inicio" },
    { rotulo: "Sobre", alvo: "sobre" },
    { rotulo: "Experiência", alvo: "experiencia" },
    { rotulo: "Brunch", alvo: "brunch" },
    { rotulo: "Galeria", alvo: "galeria" },
    { rotulo: "Localização", alvo: "localizacao" }
  ]
};
