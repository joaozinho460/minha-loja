/* ============================================================
   NEXORA · Produtos & Ofertas Online
   ------------------------------------------------------------
   DADOS DA LOJA E DOS PRODUTOS
   ------------------------------------------------------------
   COMO ADICIONAR UM NOVO PRODUTO:
   Copia um dos blocos abaixo, altera os valores e cola-o na
   lista PRODUTOS (a lista termina com "];"). Nada mais precisa
   de ser alterado — a loja gera tudo automaticamente.

   CAMPOS:
   - id              Texto único (usado no URL: produto.html?id=...)
   - nome            Nome do produto
   - categoria       Categoria (aparece nos filtros de navegação)
   - preco           Preço atual (número, ex.: 49.9)
   - precoAnterior   Preço antigo para mostrar desconto (ou null)
   - desconto        Percentagem do desconto. Se for null, é
                     calculado automaticamente a partir de
                     precoAnterior. Deixar null.
   - destaque        true  → aparece em "Produtos em destaque"
   - bestseller      Campo reservado (a secção "Os mais vendidos"
                     foi substituída por "Produtos" com filtro de categoria)
   - imagens         Lista de caminhos de imagem (1.ª = principal)
   - curto           Frase curta com o principal benefício
   - descricao       Descrição completa
   - beneficios      Lista de principais benefícios
   - comoFunciona    Passos de como o produto funciona
   - porqueEscolher  Lista de razões para escolher o produto
   - disponibilidade { texto, nivel }  nivel: "stock" | "baixo" | "esgotado"
   - faq             Perguntas frequentes [{ p, r }]
   - kairosLink      ⚠️  COLOCA AQUI O LINK DA KAIROS DO PRODUTO
   ============================================================ */

const LOJA = {
  nome: 'NEXORA',
  tagline: 'Produtos & Ofertas Online',
  logo: 'NEXORA',
  whatsapp: '',
  email: 'ola@nexora.pt',
  instagram: '#',
  facebook: '#',
  tiktok: '#',
  footerDescricao:
    'A NEXORA seleciona produtos práticos, bonitos e funcionais para o seu dia a dia. Compras simples, seguras e acompanhadas — da escolha à entrega.',
  moeda: 'BRL',
  simboloMoeda: 'R$',
};

const PRODUTOS = [
  {
    id: 'luminaria-solar-jardim',
    nome: 'Luminária Solar de Parede para Jardim',
    categoria: 'Iluminação',
    preco: 76.88,
    precoAnterior: 88.41,
    desconto: null,
    destaque: true,
    bestseller: true,
    imagens: [
      'images/produtos/lumiraria solar 1.jpg',
      'images/produtos/lumiraria solar 2.jpg',
      'images/produtos/lumiraria solar 3.jpg',
      'images/produtos/lumiraria solar 4.jpg',
    ],
    curto: 'Ilumine o seu jardim, varanda ou entrada com uma luminária solar elegante, sem fios e sem gastar energia.',
    descricao:
      'A Luminária Solar de Parede para Jardim é uma solução prática e elegante para iluminar áreas externas da sua casa. Com iluminação direcionada para cima e para baixo, cria um efeito luminoso moderno e aconchegante. Funciona com energia solar, sem necessidade de ligação elétrica, tornando-se uma opção sustentável e económica para jardins, varandas, entradas, muros e corredores externos.',
    beneficios: [
      'Funcionamento alimentado por energia solar — sem custos de electricidade',
      'Não precisa de fios ou ligação elétrica — instalação simples',
      'Iluminação para cima e para baixo — efeito visual profissional',
      'Ideal para jardins, varandas, entradas e áreas externas',
      'Design moderno em plástico ABS resistente — durável e elegante',
      'Bateria recarregável Ni-MH 600mAh — até 8 horas de iluminação',
      'LEDs SMD brancos — luz quente e aconchegante',
    ],
    comoFunciona: [
      { titulo: 'Instale na parede', texto: 'Escolha um local externo adequado e fixe a luminária na parede com parafusos ou fita dupla face.' },
      { titulo: 'Deixe carregar durante o dia', texto: 'O painel solar aproveita a luz do sol para carregar a bateria interna (mais de 6 horas sob luz solar direta).' },
      { titulo: 'Aproveite à noite', texto: 'Após o carregamento, a luminária utiliza a energia armazenada para iluminar o ambiente durante toda a noite.' },
    ],
    porqueEscolher: [
      'Ajuda a iluminar áreas externas sem precisar de uma tomada — solução sustentável',
      'Visual moderno com iluminação direcionada para cima e para baixo — cria atmosfera',
      'Painel solar 2V/200mA com bateria 600mAh — eficiente e duradouro',
      'Pode ser utilizada em diferentes espaços externos — versátil',
      'Uma forma simples e ecológica de valorizar a aparência da sua casa',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'A luminária precisa ser ligada na tomada?',
        r: 'Não. O produto utiliza energia solar e possui bateria interna recarregável. É 100% autossuficiente.',
      },
      {
        p: 'Onde posso instalar?',
        r: 'Pode ser utilizada em áreas externas como jardins, varandas, entradas, muros, corredores e fachadas. Qualquer local onde receba luz solar durante o dia.',
      },
      {
        p: 'Ela possui iluminação para cima e para baixo?',
        r: 'Sim. O modelo foi desenvolvido especificamente para criar iluminação direcionada para cima e para baixo, criando um efeito visual único.',
      },
      {
        p: 'Quanto tempo dura a bateria?',
        r: 'Com a bateria completamente carregada, a luminária funciona entre 8 a 10 horas de iluminação contínua durante a noite.',
      },
      {
        p: 'Qual é o tipo de luz?',
        r: 'A luminária emite luz branca quente (warm white), ideal para criar uma atmosfera aconchegante e acolhedora.',
      },
      {
        p: 'Qual é o prazo de entrega?',
        r: 'O prazo de entrega é de 7 a 15 dias úteis após a confirmação do pagamento, dependendo da sua localização.',
      },
    ],
    kairosLink: 'https://pay.kaiross.com.br/HGRkX1GgMKmU',
  },

  {
    id: 'luz-noturna-usb',
    nome: 'Luz Noturna USB Criativa para Quarto e Cabeceira',
    categoria: 'Iluminação',
    preco: 60.00,
    precoAnterior: 69.00,
    desconto: null,
    destaque: true,
    bestseller: true,
    imagens: [
      'images/produtos/LED usb 1.jpg',
      'images/produtos/LED usb 2.jpg',
      'images/produtos/LED usb 3.jpg',
      'images/produtos/LED usb 4.jpg',
    ],
    curto: 'Luz noturna criativa com ligação USB, ideal para o quarto e a mesa de cabeceira.',
    descricao:
      'A Luz Noturna USB Criativa traz um toque aconchegante e funcional para o quarto e a cabeceira. Basta ligá-la a uma porta USB para ter uma iluminação suave e agradável, perfeita como luz de apoio durante a noite, para leitura ou para criar um ambiente acolhedor. Compacta, leve e com design criativo, é a solução simples para quem procura praticidade e estilo.',
    beneficios: [
      'Ligação USB simples — usa o carregador do telemóvel ou um adaptador',
      'Luz suave e aconchegante, ideal para o quarto e a cabeceira',
      'Compacta e leve — fácil de transportar e guardar',
      'Baixo consumo de energia com tecnologia LED',
      'Design criativo que combina com qualquer decoração',
    ],
    comoFunciona: [
      { titulo: 'Liga à porta USB', texto: 'Conecta o cabo USB a um carregador, computador ou power bank.' },
      { titulo: 'Coloca onde quiseres', texto: 'Posiciona na cabeceira, na estante ou em qualquer superfície próxima.' },
      { titulo: 'Aproveita a luz', texto: 'Acende e desliga com facilidade para criar um ambiente acolhedor.' },
    ],
    porqueEscolher: [
      'Simples de utilizar — liga e funciona de imediato',
      'Consumo energético reduzido com LED de longa duração',
      'Perfeita para quartos, cabeceiras, escritórios e salas',
      'Uma forma económica e prática de valorizar o ambiente',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Preciso de uma tomada especial?',
        r: 'Não. A luz funciona através de qualquer porta USB, como o carregador do telemóvel ou um adaptador USB.',
      },
      {
        p: 'Posso usar no quarto durante a noite?',
        r: 'Sim. A luz é suave e aconchegante, ideal para a cabeceira ou como luz de apoio durante a noite.',
      },
      {
        p: 'Qual é o prazo de entrega?',
        r: 'O prazo de entrega é de 7 a 15 dias úteis após a confirmação do pagamento, dependendo da sua localização.',
      },
    ],
    kairosLink: 'https://pay.kaiross.com.br/Ht93RukEdoxC',
  },

  {
    id: 'projetor-astronauta-luz-estelar',
    nome: 'Mini Projetor Astronauta Luz Estelar com Controle Remoto',
    categoria: 'Iluminação',
    preco: 75.00,
    precoAnterior: 86.25,
    desconto: null,
    destaque: true,
    bestseller: false,
    imagens: [
      'images/produtos/Espaço1.jpg',
      'images/produtos/espaço2.jpg',
      'images/produtos/espaço3.jpg',
      'images/produtos/espaço4.jpg',
      'images/produtos/espaço5.jpg',
    ],
    curto: 'Projeta estrelas e luzes coloridas no teto e nas paredes para criar uma atmosfera mágica.',
    descricao:
      'O Mini Projetor Astronauta Luz Estelar transforma qualquer quarto num céu de estrelas. Com design de astronauta e projeção em várias cores, cria um efeito imersivo no teto e nas paredes, perfeito para relaxar, para o quarto das crianças, para festas ou para momentos de lazer. O controle remoto permite escolher a cor, o modo e o movimento da projeção com facilidade.',
    beneficios: [
      'Projeção de estrelas e luzes coloridas no teto e nas paredes',
      'Controle remoto com várias cores e modos de luz',
      'Design de astronauta decorativo e versátil',
      'Alimentação USB simples — liga e funciona',
      'Efeito imersivo com projeção em movimento',
      'Ideal para quartos, salas, festas e relaxamento',
      'Baixo consumo de energia com tecnologia LED',
    ],
    comoFunciona: [
      { titulo: 'Liga à porta USB', texto: 'Conecta o cabo USB a um carregador, computador ou power bank.' },
      { titulo: 'Escolhe o modo', texto: 'Usa o controle remoto para selecionar a cor e o efeito pretendido.' },
      { titulo: 'Aproveita a atmosfera', texto: 'Projeta estrelas no teto e nas paredes para criar o ambiente perfeito.' },
    ],
    porqueEscolher: [
      'Transforma o quarto num ambiente mágico e acolhedor',
      'Fácil de usar com controle remoto incluído',
      'Presente perfeito para crianças e adultos',
      'Versátil para relaxar, festas e momentos especiais',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Preciso de instalação?',
        r: 'Não. O projetor funciona ligado a uma porta USB, sem necessidade de instalação.',
      },
      {
        p: 'Que efeitos de luz posso escolher?',
        r: 'O controle remoto permite escolher entre várias cores e modos de projeção, incluindo efeito de movimento.',
      },
      {
        p: 'Qual é o prazo de entrega?',
        r: 'O prazo de entrega é de 7 a 15 dias úteis após a confirmação do pagamento, dependendo da sua localização.',
      },
    ],
    kairosLink: 'https://pay.kaiross.com.br/kwaJx8yBqy0B',
  },

  {
    id: 'filtro-agua-dispenser-automatico',
    nome: 'Filtro de Água Dispenser Automático Alta Potência Bivolt (Cores Sortidas)',
    categoria: 'Cozinha',
    preco: 24.34,
    precoAnterior: 27.99,
    desconto: null,
    destaque: true,
    bestseller: false,
    imagens: [
      'images/produtos/bomba_de_agua1.jpg',
      'images/produtos/bomba_de_agua2.jpg',
      'images/produtos/bomba_de_agua3.jpg',
      'images/produtos/bomba_de_agua4.jpg',
      'images/produtos/bomba_de_agua5.jpg',
    ],
    curto: 'Filtra e dispensa água de forma prática e automática, com alta potência e bivolt.',
    descricao:
      'O Filtro de Água Dispenser Automático traz praticidade para o seu dia a dia. Com alta potência e funcionamento bivolt, dispensa água filtrada de forma automática e rápida, ideal para a cozinha, o escritório ou a área de serviço. Disponível em cores sortidas, combina com diferentes ambientes e torna o momento de beber água muito mais cômodo.',
    beneficios: [
      'Dispensa água de forma automática e prática',
      'Alta potência com funcionamento bivolt (110V e 220V)',
      'Filtra a água, deixando-a mais limpa e saborosa',
      'Fácil de instalar e usar no dia a dia',
      'Compacto e discreto para diversos ambientes',
      'Economia e comodidade na hora de beber água',
    ],
    comoFunciona: [
      { titulo: 'Instala o filtro', texto: 'Conecta o dispenser à entrada de água seguindo as instruções do manual.' },
      { titulo: 'Liga o aparelho', texto: 'Conecta à tomada; o bivolt funciona em 110V ou 220V automaticamente.' },
      { titulo: 'Dispensa água filtrada', texto: 'Pressiona para obter água filtrada de forma rápida e automática.' },
    ],
    porqueEscolher: [
      'Água limpa e fresca sempre à mão',
      'Dispensação automática sem esforço',
      'Design prático para cozinha e escritório',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'O aparelho funciona em qualquer tomada?',
        r: 'Sim. O dispenser é bivolt, funcionando em 110V e 220V automaticamente.',
      },
      {
        p: 'Precisa de instalação profissional?',
        r: 'Não. A instalação é simples e pode ser feita seguindo as instruções do manual.',
      },
      {
        p: 'Qual é o prazo de entrega?',
        r: 'O prazo de entrega é de 7 a 15 dias úteis após a confirmação do pagamento, dependendo da sua localização.',
      },
    ],
    kairosLink: 'https://pay.kaiross.com.br/fN89KcMEQjJG',
  },

  {
    id: 'lampada-emergencia-led-15w',
    nome: 'Lâmpada de Emergência LED 15W',
    categoria: 'Iluminação',
    preco: 45.99,
    precoAnterior: 52.89,
    desconto: null,
    destaque: true,
    bestseller: false,
    imagens: [
      'images/produtos/lampada1.jpg',
      'images/produtos/lampada2.jpg',
      'images/produtos/lampada3.jpg',
    ],
    curto: 'Luz de emergência LED que mantém o ambiente iluminado durante quedas de energia.',
    descricao:
      'A Lâmpada de Emergência LED 15W garante iluminação imediata quando falta energia. Com tecnologia LED de alto rendimento, acende automaticamente na queda de energia e oferece boa autonomia, sendo perfeita para casa, comércio, corredores e áreas externas. Recarregável e eficiente, é uma solução prática para nunca ficar no escuro.',
    beneficios: [
      'Acende automaticamente durante quedas de energia',
      'Tecnologia LED 15W de alto rendimento',
      'Recarregável e eficiente no consumo',
      'Instalação simples, como uma lâmpada comum',
      'Ideal para casa, comércio e áreas externas',
      'Boas horas de autonomia com bateria interna',
    ],
    comoFunciona: [
      { titulo: 'Instala', texto: 'Enrosca no bocal como uma lâmpada comum, com a tomada conectada.' },
      { titulo: 'Recarrega', texto: 'Fica carregando enquanto há energia na rede elétrica.' },
      { titulo: 'Ilumina na queda', texto: 'Acende automaticamente quando a energia acaba.' },
    ],
    porqueEscolher: [
      'Nunca fica no escuro durante quedas de energia',
      'Economia com tecnologia LED',
      'Fácil de instalar e usar',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Acende sozinha quando falta energia?',
        r: 'Sim. A lâmpada acende automaticamente assim que a energia elétrica é interrompida.',
      },
      {
        p: 'Precisa de instalação especial?',
        r: 'Não. Ela instala como uma lâmpada comum e recarrega enquanto está ligada à rede.',
      },
      {
        p: 'Qual é o prazo de entrega?',
        r: 'O prazo de entrega é de 7 a 15 dias úteis após a confirmação do pagamento, dependendo da sua localização.',
      },
    ],
    kairosLink: 'https://pay.kaiross.com.br/TUEmiSpNMMlv',
  },

  {
    id: 'luminaria-solar-foguete-alta-potencia',
    nome: 'Luminária Solar LED Tipo Foguete – 12 Divisões de Alta Potência – Sensor de Presença',
    categoria: 'Iluminação',
    preco: 332.04,
    precoAnterior: 381.85,
    desconto: null,
    destaque: true,
    bestseller: false,
    imagens: [
      'images/produtos/luminaria_de_altapressao1.jpg',
      'images/produtos/luminaria_de_altapressao2.jpg',
      'images/produtos/luminaria_de_altapressao3.jpg',
      'images/produtos/luminaria_de_altapressao4.jpg',
    ],
    curto: 'Iluminação solar potente com sensor de presença para áreas externas sem fiação.',
    descricao:
      'A Luminária Solar LED Tipo Foguete ilumina grandes áreas externas sem necessidade de fiação elétrica. Com 12 divisões de alta potência e sensor de presença, acende automaticamente quando detecta movimento, garantindo segurança e economia de energia. Carrega durante o dia com energia solar e funciona à noite, perfeita para quintais, garagens, jardins e fachadas.',
    beneficios: [
      'Alta potência com 12 divisões de LEDs',
      'Sensor de presença com acendimento automático',
      'Carregamento por energia solar, sem fiação',
      'Resistente à chuva e ao clima externo',
      'Economia total na conta de luz',
      'Ideal para quintais, garagens, jardins e fachadas',
    ],
    comoFunciona: [
      { titulo: 'Instala', texto: 'Fixa em local externo com boa incidência de sol.' },
      { titulo: 'Carrega', texto: 'As placas solares carregam a bateria durante o dia.' },
      { titulo: 'Acende', texto: 'O sensor de presença liga a luz automaticamente à noite.' },
    ],
    porqueEscolher: [
      'Segurança e iluminação sem custo de energia',
      'Instalação fácil sem fiação elétrica',
      'Potência para áreas externas amplas',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Precisa de fiação elétrica?',
        r: 'Não. A luminária funciona com energia solar, sem necessidade de fiação.',
      },
      {
        p: 'Funciona em dias nublados?',
        r: 'Sim. Ela armazena energia ao longo do dia e acende à noite, mesmo em dias de menos sol.',
      },
      {
        p: 'Qual é o prazo de entrega?',
        r: 'O prazo de entrega é de 7 a 15 dias úteis após a confirmação do pagamento, dependendo da sua localização.',
      },
    ],
    kairosLink: 'https://pay.kaiross.com.br/lPlDxDUJJkyy',
  },

  {
    id: 'mini-camera-seguranca-a9-wifi',
    nome: 'Mini Câmera de Segurança Fixa Espiã A9 Wi-Fi FullHD 90° com Suporte de Parede',
    categoria: 'Decoração',
    preco: 35.27,
    precoAnterior: 40.56,
    desconto: null,
    destaque: true,
    bestseller: false,
    imagens: [
      'images/produtos/camera1.jpg',
      'images/produtos/camera2.jpg',
      'images/produtos/camera3.jpg',
      'images/produtos/camera4.jpg',
      'images/produtos/camera5.jpg',
    ],
    curto: 'Câmera Wi-Fi compacta em FullHD com ângulo de 90° e suporte de parede.',
    descricao:
      'A Mini Câmera de Segurança Fixa Espiã A9 monitora seu ambiente em FullHD com ângulo de visão de 90°. Conectada via Wi-Fi, permite acompanhar o espaço em tempo real pelo celular. Compacta e discreta, vem com suporte de parede para fácil instalação em casa, comércio ou escritório, trazendo mais segurança e tranquilidade ao seu dia a dia.',
    beneficios: [
      'Gravação em FullHD com visão de 90°',
      'Conexão Wi-Fi com visualização pelo celular',
      'Design compacto e discreto',
      'Suporte de parede incluído',
      'Fácil de instalar e configurar',
      'Monitoramento em tempo real onde estiver',
    ],
    comoFunciona: [
      { titulo: 'Instala', texto: 'Fixa a câmera no suporte de parede no local desejado.' },
      { titulo: 'Conecta', texto: 'Vincula a câmera ao Wi-Fi e configura no aplicativo do celular.' },
      { titulo: 'Monitora', texto: 'Acompanha o ambiente em tempo real pelo celular, de onde estiver.' },
    ],
    porqueEscolher: [
      'Mais segurança em casa, comércio ou escritório',
      'Imagem FullHD e acesso remoto pelo celular',
      'Instalação rápida com suporte de parede',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Como acesso as imagens?',
        r: 'Pelo aplicativo no celular, após conectar a câmera à sua rede Wi-Fi.',
      },
      {
        p: 'Precisa de fiação?',
        r: 'A câmera é conectada à energia e transmite as imagens pela rede Wi-Fi.',
      },
      {
        p: 'Qual é o prazo de entrega?',
        r: 'O prazo de entrega é de 7 a 15 dias úteis após a confirmação do pagamento, dependendo da sua localização.',
      },
    ],
    kairosLink: 'https://pay.kaiross.com.br/q537SCj8v0OZ',
  },

  {
    id: 'luminaria-abajur-cristal-touch-retro',
    nome: 'RETRÔ - Luminária Abajur Cristal Led Touch Recarregável USB',
    categoria: 'Iluminação',
    preco: 49.99,
    precoAnterior: 57.49,
    desconto: null,
    destaque: true,
    bestseller: false,
    imagens: [
      'images/produtos/retrô_luz1.jpg',
      'images/produtos/retrô_luz2.jpg',
      'images/produtos/retrô_luz3.jpg',
      'images/produtos/retrô_luz4.jpg',
    ],
    curto: 'Abajur de cristal com luz LED touch, recarregável via USB e toque retrô.',
    descricao:
      'A Luminária Abajur Cristal Led Touch une o charme retrô à praticidade moderna. Com luz LED ajustável por toque, é recarregável via USB e pode ser usada em qualquer lugar, sem depender de tomada. O design de cristal cria um efeito sofisticado na decoração, ideal para mesas de cabeceira, salas, home offices e pontos de destaque da casa.',
    beneficios: [
      'Controle de luz por toque',
      'Recarregável via USB, sem fios',
      'Design de cristal sofisticado',
      'Luz LED ajustável em várias intensidades',
      'Portátil para usar em qualquer ambiente',
      'Toque retrô que valoriza a decoração',
    ],
    comoFunciona: [
      { titulo: 'Carrega', texto: 'Conecta o cabo USB para recarregar a bateria interna.' },
      { titulo: 'Acende por toque', texto: 'Toca no corpo da luminária para ligar e ajustar a luz.' },
      { titulo: 'Leva aonde quiser', texto: 'Usa em qualquer lugar, sem precisar de tomada por perto.' },
    ],
    porqueEscolher: [
      'Iluminação charmosa e sem fios',
      'Design retrô de cristal que encanta',
      'Portátil e prática para toda a casa',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Funciona sem tomada?',
        r: 'Sim. A luminária é recarregável via USB e funciona por horas sem estar conectada.',
      },
      {
        p: 'Como ajusto a luz?',
        r: 'Basta tocar no corpo da luminária para ligar, desligar e alternar as intensidades da luz LED.',
      },
      {
        p: 'Qual é o prazo de entrega?',
        r: 'O prazo de entrega é de 7 a 15 dias úteis após a confirmação do pagamento, dependendo da sua localização.',
      },
    ],
    kairosLink: 'https://pay.kaiross.com.br/0ELjPIanFLmk',
  },

  {
    id: 'luminaria-branca-mesa-6w',
    nome: 'Luminária Branca Mesa 6W',
    categoria: 'Iluminação',
    preco: 55.50,
    precoAnterior: 63.82,
    desconto: null,
    destaque: true,
    bestseller: false,
    imagens: [
      'images/produtos/luminaria-mesa-branca4.jpg',
      'images/produtos/luminaria-mesa-branca3.jpg',
      'images/produtos/luminaria-mesa-branca2.jpg',
      'images/produtos/luminaria-mesa-branca1.jpg',
    ],
    curto: 'Luminária de mesa com luz LED de 6W, elegante e compacta para qualquer ambiente.',
    descricao:
      'A Luminária Branca Mesa 6W traz iluminação LED eficiente e um design limpo e moderno para mesas de cabeceira, escrivaninhas e mesas de apoio. Compacta e leve, ilumina bem o espaço de trabalho ou leitura com baixo consumo de energia, sendo uma peça prática e decorativa para qualquer divisão da casa.',
    beneficios: [
      'Luz LED de 6W com baixo consumo',
      'Design branco moderno e discreto',
      'Compacta, ideal para mesas e escrivaninhas',
      'Perfeita para leitura e trabalho',
      'Fácil de usar e transportar entre ambientes',
    ],
    comoFunciona: [
      { titulo: 'Posiciona', texto: 'Coloca a luminária sobre a mesa ou escrivaninha no local desejado.' },
      { titulo: 'Liga', texto: 'Conecta à tomada e acende a luz LED.' },
      { titulo: 'Ajusta', texto: 'Posiciona o braço ou o difusor para iluminar exatamente o que precisa.' },
    ],
    porqueEscolher: [
      'Iluminação eficiente e econômica',
      'Design moderno que valoriza o ambiente',
      'Praticidade para o dia a dia',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'É adequada para leitura?',
        r: 'Sim. A luz LED de 6W oferece boa iluminação para leitura, estudo e trabalho.',
      },
      {
        p: 'Ocupa muito espaço?',
        r: 'Não. O design compacto se adapta bem a mesas de cabeceira, escrivaninhas e mesas de apoio.',
      },
      {
        p: 'Qual é o prazo de entrega?',
        r: 'O prazo de entrega é de 7 a 15 dias úteis após a confirmação do pagamento, dependendo da sua localização.',
      },
    ],
    kairosLink: 'https://pay.kaiross.com.br/458JMDEXF1Go',
  },

  {
    id: 'luminaria-mata-mosquito-uv',
    nome: 'Luminária Mata Mosquito Elétrica com Luz Ultravioleta',
    categoria: 'Iluminação',
    preco: 28.99,
    precoAnterior: null,
    desconto: null,
    destaque: true,
    bestseller: false,
    imagens: [
      'images/produtos/mata-mosquito-1.jpg',
      'images/produtos/mata-mosquito-2.jpg',
      'images/produtos/mata-mosquito-3.jpg',
      'images/produtos/mata-mosquito-4.jpg',
      'images/produtos/mata-mosquito-5.jpg',
      'images/produtos/mata-mosquito-6.jpg',
      'images/produtos/mata-mosquito-7.jpg',
      'images/produtos/mata-mosquito-8.jpg',
    ],
    curto: 'Armadilha elétrica com luz UV que atrai, captura e elimina mosquitos — e ainda ilumina o ambiente.',
    descricao:
      'A Luminária Mata Mosquito Elétrica com Luz Ultravioleta é um abajur inseticida com design moderno em ABS e PC, disponível nas cores cinza e verde. A luz LED ultravioleta atrai mosquitos e insetos voadores, que ficam presos na estrutura interna e são eliminados de forma eficaz — sem produtos químicos, sem gases tóxicos e sem cheiro. Além de proteger o ambiente, funciona como luminária decorativa, com iluminação suave e agradável. Basta conectar na tomada via cabo USB (5V / 5W) e ligar.',
    beneficios: [
      'Elimina mosquitos e insetos voadores com luz ultravioleta — sem produtos químicos',
      'Sem substâncias tóxicas ou gases prejudiciais à saúde — seguro para ambientes fechados',
      'Funciona também como luminária decorativa com luz suave e agradável',
      'Alimentação via USB com 5V e 5W de potência — fácil de usar',
      'Design moderno em ABS e PC, nas cores cinza e verde',
      'Dimensões compactas de 16,2 x 9 x 6,2 cm — cabe em qualquer divisão',
      'Ideal para quartos, salas e ambientes de até 50 m²',
    ],
    comoFunciona: [
      { titulo: 'Conecta o cabo USB', texto: 'Liga o cabo USB a um carregador, computador ou power bank.' },
      { titulo: 'Liga a luminária', texto: 'Acende a luz ultravioleta que atrai mosquitos e insetos voadores.' },
      { titulo: 'Mantém o ambiente livre', texto: 'Os insetos ficam presos na estrutura interna e são eliminados, enquanto a luz também ilumina o espaço.' },
    ],
    porqueEscolher: [
      'Proteção eficaz contra mosquitos sem cheiro nem produtos químicos',
      'Dupla função: repelente e luminária decorativa',
      'Seguro para uso em ambientes fechados, incluindo quartos',
      'Simples de usar — basta ligar na porta USB',
      'Design compacto e moderno que combina com a decoração',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'O aparelho usa produtos químicos?',
        r: 'Não. A luminária elimina os mosquitos através da luz ultravioleta e da estrutura interna, sem produtos químicos, gases tóxicos ou cheiro.',
      },
      {
        p: 'É seguro para usar em ambientes fechados?',
        r: 'Sim. Não emite substâncias tóxicas nem gases prejudiciais à saúde, sendo seguro para quartos, salas e outros ambientes internos.',
      },
      {
        p: 'Preciso de tomada especial?',
        r: 'Não. O produto funciona com alimentação via USB (5V / 5W), podendo ser conectado a um carregador, computador ou power bank.',
      },
      {
        p: 'Para que área ele é indicado?',
        r: 'É indicado para ambientes de até 50 m², como quartos, salas e escritórios.',
      },
      {
        p: 'Quais são as dimensões?',
        r: 'O produto mede 16,2 x 9 x 6,2 cm, um tamanho compacto que se adapta a qualquer ambiente.',
      },
      {
        p: 'Qual é o prazo de entrega?',
        r: 'O prazo de entrega é de 7 a 15 dias úteis após a confirmação do pagamento, dependendo da sua localização.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },
  {
    id: 'tabua-descongelar-ultra-rapida',
    nome: 'Tábua Mágica para Descongelar Carnes e Legumes para Cozinha, Bandeja para Descongelamento Ultra Rápido',
    categoria: 'Cozinha',
    preco: 40.53,
    precoAnterior: 46.61,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/tabua_descongelar-1.jpg',
      'images/produtos/tabua_descongelar-2.jpg',
      'images/produtos/tabua_descongelar-3.jpg',
      'images/produtos/tabua_descongelar-4.jpg',
      'images/produtos/tabua_descongelar-5.jpg',
      'images/produtos/tabua_descongelar-6.jpg',
    ],
    curto: 'Bandeja que descongela carnes e legumes até 3 vezes mais rápido, preservando o sabor original dos alimentos.',
    descricao:
      'A Tábua Mágica para Descongelar Carnes e Legumes é a bandeja para descongelamento ultra rápido que transforma a sua rotina na cozinha. Feita para acelerar o processo de descongelamento, ela descongela os alimentos até 3 vezes mais rápido do que o método tradicional, mantendo a qualidade original dos alimentos. Basta colocar o alimento congelado sobre a bandeja e esperar — sem precisar de micro-ondas, água quente ou eletricidade. Perfeita para carnes, peixes, frangos, legumes e qualquer outro tipo de alimento, é a solução prática para quem quer economizar tempo na hora de preparar as refeições.',
    beneficios: [
      'Descongelamento ultrarrápido: até 3 vezes mais rápido que o método tradicional',
      'Sabor preservado: mantém a qualidade original dos alimentos',
      'Economize tempo: prepare suas refeições rapidamente',
      'Para todos os tamanhos: perfeita para qualquer tipo de alimento',
      'Uso simples: basta colocar o alimento sobre a bandeja e esperar',
      'Sem micro-ondas, água quente ou eletricidade',
    ],
    comoFunciona: [
      { titulo: 'Coloca o alimento', texto: 'Retira o alimento congelado e coloca-o sobre a bandeja de descongelamento.' },
      { titulo: 'Espera', texto: 'A bandeja acelera o descongelamento sem alterar a qualidade do alimento.' },
      { titulo: 'Prepara a refeição', texto: 'Em pouco tempo o alimento está pronto para ser temperado e cozinhado.' },
    ],
    porqueEscolher: [
      'Descongela alimentos até 3 vezes mais rápido, poupando tempo na cozinha',
      'Preserva o sabor e a qualidade original dos alimentos',
      'Funciona para carnes, peixes, frangos, legumes e mais',
      'Sem eletricidade, sem micro-ondas e sem água quente',
      'Uso simples e intuitivo para qualquer pessoa',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Como funciona a tábua mágica?',
        r: 'Basta colocar o alimento congelado sobre a bandeja e esperar. A tábua acelera o processo de descongelamento sem precisar de eletricidade, micro-ondas ou água quente.',
      },
      {
        p: 'Que tipo de alimentos posso descongelar?',
        r: 'A tábua é perfeita para qualquer tipo de alimento, incluindo carnes, peixes, frangos, legumes e outros alimentos congelados.',
      },
      {
        p: 'O produto preserva o sabor dos alimentos?',
        r: 'Sim. A tábua mantém a qualidade original dos alimentos, preservando o sabor durante o descongelamento.',
      },
      {
        p: 'Quanto tempo demora a descongelar?',
        r: 'O tempo varia conforme o tamanho e o tipo do alimento, mas a tábua descongela até 3 vezes mais rápido do que o método tradicional.',
      },
      {
        p: 'Preciso de eletricidade?',
        r: 'Não. O produto funciona sem eletricidade, sem micro-ondas e sem água quente — uso simples e seguro.',
      },
      {
        p: 'Qual é o prazo de entrega?',
        r: 'O prazo de entrega é de 7 a 15 dias úteis após a confirmação do pagamento, dependendo da sua localização.',
      },
    ],
    kairosLink: 'https://pay.kaiross.com.br/q2deCZYKikNA',
  },
  {
    id: 'conjunto-facas-6-pecas',
    nome: 'Conjunto de Facas 6 Peças, Aço Inoxidável com Revestimento Antiaderente, Cabo Ergonômico, Inclui Faca do Chef, Cutelo, Tesoura Multifuncional e Estojo',
    categoria: 'Cozinha',
    preco: 40.00,
    precoAnterior: 46.00,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/facas-1.jpg',
      'images/produtos/facas-2.jpg',
      'images/produtos/facas-3.jpg',
      'images/produtos/facas-4.jpg',
      'images/produtos/facas-5.jpg',
      'images/produtos/facas-6.jpg',
      'images/produtos/facas-7.jpg',
      'images/produtos/facas-8.jpg',
    ],
    curto: 'Kit profissional com 6 facas de aço inoxidável antiaderente, cabo ergonômico e estojo organizador.',
    descricao:
      'O Conjunto de Facas 6 Peças é um kit profissional completo para a sua cozinha. As lâminas são em aço inoxidável com revestimento antiaderente, garantindo maior durabilidade e desempenho superior no corte. O cabo com textura em borracha macia e formato anatômico proporciona conforto e precisão durante o uso prolongado. O kit inclui faca do chef, faca de carne, cutelo, faca para descascar, descascador de cerâmica e tesoura multifuncional — com funções de corte, abridor de garrafas e quebra-nozes. Tudo acompanhado de um estojo organizador para guardar os utensílios de forma segura e organizada.',
    beneficios: [
      'Conjunto completo: kit profissional com 6 peças para todas as tarefas da cozinha',
      'Material premium: lâminas em aço inoxidável com revestimento antiaderente',
      'Design ergonômico: cabo com textura em borracha macia e formato anatômico',
      'Versatilidade: tesoura multifuncional com corte, abridor de garrafas e quebra-nozes',
      'Armazenamento prático: acompanha estojo organizador para guardar os utensílios',
      'Inclui faca do chef, faca de carne, cutelo, faca para descascar e descascador de cerâmica',
    ],
    comoFunciona: [
      { titulo: 'Escolhe a faca certa', texto: 'Cada peça do conjunto tem uma função: chef, carne, cutelo, descascar ou tesoura.' },
      { titulo: 'Corta com precisão', texto: 'As lâminas em aço inoxidável antiaderente garantem cortes precisos e duradouros.' },
      { titulo: 'Guarda no estojo', texto: 'Depois de usar e lavar à mão, guarda todas as peças no estojo organizador.' },
    ],
    porqueEscolher: [
      'Kit completo com 6 peças para todas as necessidades da cozinha',
      'Aço inoxidável com revestimento antiaderente para maior durabilidade',
      'Cabo ergonômico com borracha macia para conforto no uso prolongado',
      'Tesoura multifuncional versátil: corta, abre garrafas e quebra nozes',
      'Estojo organizador inclusivo para armazenamento seguro',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Quantas peças tem o conjunto?',
        r: 'O conjunto tem 6 peças: faca do chef, faca de carne, cutelo, faca para descascar, descascador de cerâmica e tesoura multifuncional.',
      },
      {
        p: 'Qual é o material das lâminas?',
        r: 'As lâminas são em aço inoxidável com revestimento antiaderente, garantindo maior durabilidade e desempenho superior no corte.',
      },
      {
        p: 'O cabo é confortável?',
        r: 'Sim. O cabo tem textura em borracha macia e formato anatômico, proporcionando conforto e precisão durante o uso prolongado.',
      },
      {
        p: 'O que a tesoura multifuncional faz?',
        r: 'Além de cortar, a tesoura funciona como abridor de garrafas e quebra-nozes, sendo ideal para diversas tarefas na cozinha.',
      },
      {
        p: 'Vem estojo para guardar?',
        r: 'Sim. O kit acompanha um estojo organizador para guardar todos os utensílios de forma segura e organizada.',
      },
      {
        p: 'Como devo cuidar das facas?',
        r: 'Recomenda-se lavar à mão após o uso e secar antes de guardar no estojo.',
      },
      {
        p: 'Qual é o prazo de entrega?',
        r: 'O prazo de entrega é de 7 a 15 dias úteis após a confirmação do pagamento, dependendo da sua localização.',
      },
    ],
    kairosLink: 'https://pay.kaiross.com.br/Y7VabRy5REws',
  },
  {
    id: 'joelheiras-compressao-ortopedica',
    nome: 'PAR de Joelheiras de Compressão Ortopédica - MWKS 6906',
    categoria: 'Saúde & Bem-estar',
    preco: 39.05,
    precoAnterior: 44.91,
    desconto: null,
    destaque: true,
    bestseller: false,
    imagens: [
      'images/produtos/joelheira-41AJd4h8VtL.jpg',
      'images/produtos/joelheira-51zMu6a7TJL.jpg',
      'images/produtos/joelheira-51voTcr3ApL.jpg',
      'images/produtos/joelheira-51Z6lJVYNkL.jpg',
      'images/produtos/joelheira-51VXK8sNipL.jpg',
      'images/produtos/joelheira-51sFjP31BYL.jpg',
      'images/produtos/joelheira-51Mn1Q8kkFL.jpg',
    ],
    curto: 'Kit com 2 joelheiras de compressão ortopédica que aliviam dores, dão firmeza ao joelho e ajudam a prevenir lesões durante os esportes.',
    descricao:
      'O PAR de Joelheiras de Compressão Ortopédica MWKS 6906 oferece modelagem anatômica e ajuste preciso, auxiliando na prevenção do desgaste muscular. Durante atividades físicas como a corrida, o ponto de fadiga tende a ser postergado, resultando em melhor desempenho atlético e menor impacto muscular. A alta elasticidade proporciona aquecimento constante e compressão na área aplicada, contribuindo para a redução da dor e uma recuperação mais eficiente. O fecho de velcro permite um ajuste seguro e confortável, sem restringir os movimentos, e o design unissex serve para homens e mulheres.',
    beneficios: [
      'Alivia dores e desconfortos no joelho com compressão ortopédica',
      'Ajuda a prevenir lesões e a recuperar de problemas anteriores',
      'Otimiza o fornecimento de oxigênio aos músculos e reduz o acúmulo de lactato',
      'Minimiza câimbras e atenua a fadiga muscular',
      'Fecho de velcro com ajuste rápido, seguro e confortável',
      'Material antistático de alta elasticidade com aquecimento constante',
      'Ideal para futebol, vôlei, basquete, tênis, corrida, ciclismo e skate',
    ],
    comoFunciona: [
      { titulo: 'Coloca a joelheira', texto: 'Desliza a joelheira sobre o joelho e posiciona na área que precisa de suporte.' },
      { titulo: 'Ajusta o velcro', texto: 'Regula o fecho de velcro até obter a compressão ideal, sem restringir os movimentos.' },
      { titulo: 'Treina protegido', texto: 'Durante a atividade, a compressão aquece e dá firmeza ao joelho, aliviando dores e prevenindo lesões.' },
    ],
    porqueEscolher: [
      'Kit com 2 joelheiras de compressão ortopédica',
      'Alivia dores e dá firmeza ao joelho durante os esportes',
      'Fecho de velcro com ajuste rápido e seguro',
      'Alta elasticidade com aquecimento constante na área aplicada',
      'Material antistático, confortável e durável',
      'Tamanho único: perna de 45 a 55 cm · peso de 60 a 85 kg',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Quantas joelheiras vem no kit?',
        r: 'O kit inclui 2 joelheiras de compressão ortopédica.',
      },
      {
        p: 'Para que serve a joelheira de compressão?',
        r: 'Ela ajuda a aliviar dores, dar firmeza ao joelho, prevenir lesões e melhorar o desempenho durante atividades físicas.',
      },
      {
        p: 'Qual é o tamanho?',
        r: 'Tamanho único. Altura de 27 cm, largura de 17 cm, recomendada para circunferência de perna de 45 a 55 cm e peso de 60 a 85 kg.',
      },
      {
        p: 'Posso usar em qualquer esporte?',
        r: 'Sim. É ideal para futebol, vôlei, basquete, tênis, corrida, ciclismo, skate, entre outros esportes.',
      },
      {
        p: 'O produto é unissex?',
        r: 'Sim. O design unissex serve para homens e mulheres.',
      },
      {
        p: 'Como devo cuidar das joelheiras?',
        r: 'Recomenda-se lavar à mão e deixar secar à sombra, evitando produtos químicos agressivos.',
      },
      {
        p: 'Qual é o prazo de entrega?',
        r: 'O prazo de entrega é de 7 a 15 dias úteis após a confirmação do pagamento, dependendo da sua localização.',
      },
    ],
    kairosLink: 'https://pay.kaiross.com.br/SIY21eerG4JN',
  },
];

/* ============================================================
   FUNÇÕES AUXILIARES — não é preciso alterar
   ============================================================ */

function formatarPreco(valor) {
  if (typeof valor === 'number') {
    return LOJA.simboloMoeda + ' ' + valor.toFixed(2).replace('.', ',');
  }
  return valor;
}

function calcularDesconto(produto) {
  if (produto.desconto !== null && produto.desconto !== undefined) return produto.desconto;
  if (produto.precoAnterior && produto.precoAnterior > produto.preco) {
    return Math.round((1 - produto.preco / produto.precoAnterior) * 100);
  }
  return 0;
}

function produtoPorId(id) {
  return PRODUTOS.find((p) => p.id === id);
}

function produtosBestsellers() {
  return PRODUTOS.filter((p) => p.bestseller);
}

function produtosRelacionados(produto, limite) {
  const mesmos = PRODUTOS.filter((p) => p.categoria === produto.categoria && p.id !== produto.id);
  const restantes = PRODUTOS.filter((p) => p.categoria !== produto.categoria && p.id !== produto.id);
  return [...mesmos, ...restantes].slice(0, limite || 3);
}
