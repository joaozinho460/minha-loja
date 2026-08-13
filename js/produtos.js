/* ============================================================
   MAXIMIANO · Casa & Lifestyle
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
  nome: 'MAXIMIANO',
  tagline: 'Casa & Lifestyle',
  logo: 'MAXIMIANO',
  whatsapp: '',
  email: 'ola@maximiano.pt',
  instagram: '#',
  facebook: '#',
  tiktok: '#',
  footerDescricao:
    'Produtos selecionados para tornar a tua casa mais confortável, bonita e funcional. Compra simples, segura e acompanhada.',
  moeda: 'BRL',
  simboloMoeda: 'R$',
};

const PRODUTOS = [
  {
    id: 'luminaria-solar-jardim',
    nome: 'Luminária Solar de Parede para Jardim',
    categoria: 'Iluminação',
    preco: 104.00,
    precoAnterior: 119.60,
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
    id: 'luminaria-aurora',
    nome: 'Luminária LED Aurora',
    categoria: 'Iluminação',
    preco: 49.9,
    precoAnterior: 69.9,
    desconto: null,
    destaque: true,
    bestseller: true,
    imagens: [
      'images/produtos/luminaria-aurora.svg',
      'images/produtos/luminaria-aurora-2.svg',
      'images/produtos/luminaria-aurora-3.svg',
    ],
    curto: 'Iluminação quente e regulável para criar o ambiente perfeito em qualquer divisão.',
    descricao:
      'A Luminária LED Aurora combina um design minimalista com tecnologia de regulação tátil. Com três temperaturas de luz e intensidade ajustável, adapta-se à tua secretária, sala ou quarto.',
    beneficios: [
      'Controlo tátil simples: um toque liga, um deslize regula a intensidade',
      '3 temperaturas de luz: branca, neutra e quente',
      'Sem cintilação, suave para a leitura e o trabalho',
      'Carregamento rápido via USB-C e grande autonomia',
      'Design compacto e elegante que combina com qualquer decoração',
    ],
    comoFunciona: [
      { titulo: 'Liga via USB-C', texto: 'Carrega a base com o cabo incluído em poucas horas.' },
      { titulo: 'Um toque, luz acesa', texto: 'Toca no corpo da luminária para ligar ou desligar.' },
      { titulo: 'Desliza para regular', texto: 'Arrasta o dedo para ajustar a intensidade à tua preferência.' },
    ],
    porqueEscolher: [
      'Construção em alumínio e base antiderrapante, estável em qualquer superfície',
      'Consumo energético reduzido com tecnologia LED de longa duração',
      'Ideal para secretárias, mesas de cabeceira e prateleiras',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Quanto tempo dura a bateria?',
        r: 'Em intensidade média, a autonomia é de cerca de 8 a 10 horas. Na intensidade mínima pode chegar às 14 horas.',
      },
      {
        p: 'Preciso de uma tomada específica?',
        r: 'Não. Carrega em qualquer porta USB-C, como o carregador do telemóvel.',
      },
      {
        p: 'Qual é a temperatura de cor da luz?',
        r: 'Tem três modos: branco frio (6500K), neutro (4000K) e quente (2700K).',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'luz-noturna-usb',
    nome: 'Luz Noturna USB Criativa para Quarto e Cabeceira',
    categoria: 'Iluminação',
    preco: 76.70,
    precoAnterior: 88.21,
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
    id: 'difusor-aromas',
    nome: 'Difusor de Aromas Casa Serena',
    categoria: 'Aromas',
    preco: 34.9,
    precoAnterior: 44.9,
    desconto: null,
    destaque: true,
    bestseller: true,
    imagens: [
      'images/produtos/difusor-aromas.svg',
      'images/produtos/difusor-aromas-2.svg',
      'images/produtos/difusor-aromas-3.svg',
    ],
    curto: 'Névoa fina e silenciosa para uma casa tranquila e com aroma a descanso.',
    descricao:
      'O Difusor Casa Serena transforma o teu espaço num refúgio de calma. A tecnologia ultra-sónica liberta uma névoa fina e silenciosa que humedece o ambiente enquanto difunde o aroma do teu óleo essencial favorito.',
    beneficios: [
      'Funcionamento ultra-sónico quase silencioso',
      'Luz ambiente regulável em várias cores',
      'Desligamento automático quando a água termina',
      'Capacidade de 300 ml — até 8 horas de difusão contínua',
      'Fácil de limpar e simples de utilizar',
    ],
    comoFunciona: [
      { titulo: 'Enche com água', texto: 'Adiciona água até à marca indicada no depósito.' },
      { titulo: 'Adiciona o aroma', texto: 'Coloca 3 a 5 gotas do teu óleo essencial.' },
      { titulo: 'Liga e relaxa', texto: 'Escolhe o modo contínuo ou intermitente e aprecia.' },
    ],
    porqueEscolher: [
      'Fabricado em materiais seguros, sem BPA',
      'Consumo eficiente, ideal para deixar ligado durante a noite',
      'Design compacto que se integra em qualquer divisão',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Que tipo de óleos posso utilizar?',
        r: 'Qualquer óleo essencial puro. Evita óleos sintéticos muito espessos para prolongar a vida do aparelho.',
      },
      {
        p: 'Quanto tempo difunde uma carga?',
        r: 'Com o depósito cheio (300 ml), funciona entre 6 a 8 horas em modo contínuo.',
      },
      {
        p: 'Faz ruído?',
        r: 'É praticamente silencioso, ideal para usar durante a noite.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'caneca-termica',
    nome: 'Caneca Térmica ThermalKeep',
    categoria: 'Cozinha',
    preco: 24.9,
    precoAnterior: null,
    desconto: null,
    destaque: true,
    bestseller: false,
    imagens: [
      'images/produtos/caneca-termica.svg',
      'images/produtos/caneca-termica-2.svg',
      'images/produtos/caneca-termica-3.svg',
    ],
    curto: 'O teu café quente durante horas, na mesa ou em movimento.',
    descricao:
      'A Caneca Térmica ThermalKeep usa parede dupla em aço inoxidável para manter a temperatura ideal do teu café ou chá muito mais tempo. A tampa anti-derrame fecha em rotação e o acabamento mate oferece um design elegante.',
    beneficios: [
      'Mantém bebidas quentes até 6 horas e frias até 12',
      'Parede dupla em aço inoxidável, sem condensação exterior',
      'Tampa anti-derrame com abertura em rotação',
      'Acabamento mate, elegante e antideslizante',
      'Capacidade generosa de 400 ml',
    ],
    comoFunciona: [
      { titulo: 'Enche a caneca', texto: 'Adiciona a tua bebida quente ou fria.' },
      { titulo: 'Fechas a tampa', texto: 'Roda a tampa até encaixar na posição fechada.' },
      { titulo: 'Leva contigo', texto: 'Podes transportar sem medo de derrames.' },
    ],
    porqueEscolher: [
      'Aço inoxidável de qualidade alimentar, sem sabores',
      'Sem condensação — não deixa anéis de água na mesa',
      'Design pensado para o dia a dia e para o escritório',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Posso colocar na máquina de lavar loiça?',
        r: 'Recomendamos lavagem à mão para preservar o acabamento mate.',
      },
      {
        p: 'Serve para bebidas geladas?',
        r: 'Sim, mantém bebidas frias até 12 horas sem condensação exterior.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'cobertor-plush',
    nome: 'Cobertor Plush Comfort',
    categoria: 'Decoração',
    preco: 39.9,
    precoAnterior: 54.9,
    desconto: null,
    destaque: false,
    bestseller: true,
    imagens: [
      'images/produtos/cobertor-plush.svg',
      'images/produtos/cobertor-plush-2.svg',
      'images/produtos/cobertor-plush-3.svg',
    ],
    curto: 'Toque macio e aconchego imediato para o sofá ou a cama.',
    descricao:
      'O Cobertor Plush Comfort envolve-te numa camada de conforto suave. Feito em microfibra plush, é leve, quente e agradável ao toque — perfeito para tardes no sofá, noites frias ou uma sesta relaxante.',
    beneficios: [
      'Microfibra plush extra macia ao toque',
      'Leve e térmico, ideal para todas as estações',
      'Lavável na máquina sem perder a suavidade',
      'Várias medidas disponíveis',
      'Acabamento de qualidade com costuras reforçadas',
    ],
    comoFunciona: [
      { titulo: 'Estende e usa', texto: 'Coloca no sofá, na cama ou sobre as pernas.' },
      { titulo: 'Lava quando precisares', texto: 'Máquina a 30°C e secagem natural.' },
      { titulo: 'Mantém a suavidade', texto: 'A microfibra recupera o toque original lavagem após lavagem.' },
    ],
    porqueEscolher: [
      'Alternativa elegante e versátil a um edredão',
      'Combina com qualquer decoração, em cores neutras',
      'Presente perfeito para quem valoriza o conforto',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Qual é o tamanho disponível?',
        r: 'Está disponível na medida 130 x 170 cm, ideal para sofá e cama individual.',
      },
      {
        p: 'Solta pelos?',
        r: 'Não. A microfibra é tecida e tratada para não largar pelos.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'vela-aromatica',
    nome: 'Vela Aromática Baunilha & Âmbar',
    categoria: 'Aromas',
    preco: 19.9,
    precoAnterior: null,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/vela-aromatica.svg',
      'images/produtos/vela-aromatica-2.svg',
      'images/produtos/vela-aromatica-3.svg',
    ],
    curto: 'Um aroma suave de baunilha e âmbar para uma casa acolhedora.',
    descricao:
      'A Vela Aromática Baunilha & Âmbar foi criada para envolver a tua casa num aroma quente e reconfortante. Produzida com cera vegetal e pavio de algodão, queima de forma limpa e uniforme durante horas.',
    beneficios: [
      'Cera vegetal, combustão limpa e duradoura',
      'Pavio de algodão, sem fumo residual',
      'Aroma quente de baunilha e âmbar',
      'Até 40 horas de queima',
      'Frasco de vidro reutilizável como objeto de decoração',
    ],
    comoFunciona: [
      { titulo: 'Acende', texto: 'Acende o pavio num local estável e seguro.' },
      { titulo: 'Aproveita o aroma', texto: 'Deixa queimar durante 2 a 3 horas para difundir o aroma.' },
      { titulo: 'Reutiliza o frasco', texto: 'Depois de queimar, lava o frasco e dá-lhe nova vida.' },
    ],
    porqueEscolher: [
      'Composição natural e segura para o interior',
      'Ideal para presentear ou para uso diário',
      'Marca um toque pessoal em qualquer divisão',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Quanto tempo dura?',
        r: 'Tem uma duração média de 40 horas de queima.',
      },
      {
        p: 'Preciso de materiais especiais para a reutilizar?',
        r: 'Não. Depois de queimar, o frasco pode ser limpo e usado como suporte, vaso ou decoração.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'organizador-mesa',
    nome: 'Organizador de Mesa Minimalist',
    categoria: 'Organização',
    preco: 29.9,
    precoAnterior: 39.9,
    desconto: null,
    destaque: true,
    bestseller: false,
    imagens: [
      'images/produtos/organizador-mesa.svg',
      'images/produtos/organizador-mesa-2.svg',
      'images/produtos/organizador-mesa-3.svg',
    ],
    curto: 'Uma secretária impecável, sem esforço. Tudo no seu lugar.',
    descricao:
      'O Organizador de Mesa Minimalist coloca ordem no teu espaço de trabalho. Com compartimentos pensados para telemóvel, canetas, post-its e pequenos acessórios, mantém tudo acessível e visível.',
    beneficios: [
      'Múltiplos compartimentos para arrumar de tudo',
      'Suporte dedicado para telemóvel e utensílios',
      'Base antiderrapante que não risca a mesa',
      'Acabamento premium em tons neutros',
      'Tamanho compacto que poupa espaço',
    ],
    comoFunciona: [
      { titulo: 'Coloca na secretária', texto: 'Assenta sobre a mesa sem necessidade de montagem.' },
      { titulo: 'Organiza por compartimento', texto: 'Atribui um espaço a cada tipo de acessório.' },
      { titulo: 'Mantém tudo à mão', texto: 'Cada coisa no seu lugar, sem procurar.' },
    ],
    porqueEscolher: [
      'Feito para quem trabalha e estuda em casa',
      'Transforma qualquer secretária num espaço mais funcional',
      'Design minimalista que combina com tudo',
    ],
    disponibilidade: { texto: 'Últimas unidades', nivel: 'baixo' },
    faq: [
      {
        p: 'Precisa de montagem?',
        r: 'Não. Chega pronto a usar, é só colocar na secretária.',
      },
      {
        p: 'Que materiais usa?',
        r: 'Combinações de madeira e materiais resistentes com acabamento antiderrapante.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  /* ---------- ILUMINAÇÃO (completar 7) ---------- */

  {
    id: 'fita-led-usb',
    nome: 'Fita LED USB com Controlo Remoto',
    categoria: 'Iluminação',
    preco: 59.9,
    precoAnterior: 74.9,
    desconto: null,
    destaque: true,
    bestseller: false,
    imagens: [
      'images/produtos/fita-led-usb.svg',
      'images/produtos/fita-led-usb-2.svg',
      'images/produtos/fita-led-usb-3.svg',
    ],
    curto: 'Luz ambiente em milhares de cores, controlada pelo comando ou pelo telemóvel.',
    descricao:
      'A Fita LED USB transforma qualquer divisão com iluminação personalizável. Alimentada por USB, é fácil de instalar em mesas, prateleiras, televisores e camas. Com controlo remoto e aplicação, escolhes a cor, a intensidade e até efeitos dinâmicos.',
    beneficios: [
      'Milhares de cores e efeitos dinâmicos à tua escolha',
      'Controlo por comando e por aplicação no telemóvel',
      'Alimentação USB simples — liga e funciona',
      'Instalação fácil com fita adesiva incluída',
      'Baixo consumo de energia com tecnologia LED',
    ],
    comoFunciona: [
      { titulo: 'Liga à porta USB', texto: 'Conecta a fita a um carregador, TV ou power bank.' },
      { titulo: 'Cola onde quiseres', texto: 'Fixa a fita com o adesivo incluído em qualquer superfície.' },
      { titulo: 'Personaliza a luz', texto: 'Usa o comando ou a aplicação para mudar cores e efeitos.' },
    ],
    porqueEscolher: [
      'Perfeita para quartos, salas, escritórios e setups',
      'Instalação sem ferramentas em poucos minutos',
      'Cria ambientes diferentes sem trocar de lâmpadas',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Preciso de instalação elétrica?',
        r: 'Não. A fita é alimentada por USB e fixada com adesivo, sem necessidade de instalação elétrica.',
      },
      {
        p: 'Posso cortar a fita no tamanho que quiser?',
        r: 'Sim. A fita tem marcas de corte indicadas, podendo ser ajustada ao comprimento pretendido.',
      },
      {
        p: 'Qual é o prazo de entrega?',
        r: 'O prazo de entrega é de 7 a 15 dias úteis após a confirmação do pagamento.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'luz-leitura-clipe',
    nome: 'Luz de Leitura Recarregável com Clipe',
    categoria: 'Iluminação',
    preco: 45.9,
    precoAnterior: null,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/luz-leitura-clipe.svg',
      'images/produtos/luz-leitura-clipe-2.svg',
      'images/produtos/luz-leitura-clipe-3.svg',
    ],
    curto: 'Luz focada e recarregável para leitura, bordados e trabalho à noite.',
    descricao:
      'A Luz de Leitura Recarregável com Clipe fixa-se em livros, secretárias, camas e cavaletes. Com luz LED regulável em várias intensidades e tons, permite ler e trabalhar sem cansar a vista. A bateria recarregável oferece grande autonomia sem cabos.',
    beneficios: [
      'Clipe universal que fixa em livros, mesas e secretárias',
      'Intensidade e temperatura de luz reguláveis',
      'Bateria recarregável com grande autonomia',
      'Luz focada que não incomoda quem está ao lado',
      'Leve e portátil — leva para qualquer lado',
    ],
    comoFunciona: [
      { titulo: 'Fixa o clipe', texto: 'Prende a luz ao livro, mesa ou superfície pretendida.' },
      { titulo: 'Carrega por USB', texto: 'Recarrega a bateria com o cabo USB incluído.' },
      { titulo: 'Lê sem esforço', texto: 'Ajusta a intensidade e a temperatura de luz à tua preferência.' },
    ],
    porqueEscolher: [
      'Ideal para leituras noturnas e trabalhos de precisão',
      'Autonomia generosa para longas sessões',
      'Design compacto que cabe na mala ou mochila',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Quanto tempo dura a bateria?',
        r: 'Em intensidade média, a bateria oferece várias horas de luz contínua, dependendo do modo escolhido.',
      },
      {
        p: 'Serve para qualquer tipo de livro?',
        r: 'Sim. O clipe ajusta-se a livros, leitores eletrónicos, mesas e outras superfícies finas.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'candeeiro-mesa-wireless',
    nome: 'Candeeiro de Mesa com Carregamento Sem Fios',
    categoria: 'Iluminação',
    preco: 129.9,
    precoAnterior: 159.9,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/candeeiro-mesa-wireless.svg',
      'images/produtos/candeeiro-mesa-wireless-2.svg',
      'images/produtos/candeeiro-mesa-wireless-3.svg',
    ],
    curto: 'Luz quente regulável e carregador sem fios num só objeto elegante.',
    descricao:
      'O Candeeiro de Mesa com Carregamento Sem Fios combina iluminação quente e regulável com base de carregamento por indução para o teu telemóvel. Design minimalista em tons neutros que valoriza qualquer secretária, mesa de cabeceira ou sala.',
    beneficios: [
      'Carregamento sem fios compatível com telemóveis Qi',
      'Luz quente com intensidade regulável por toque',
      'Base antiderrapante e estável',
      'Design minimalista em tons neutros',
      'Economia de espaço — luz e carregador no mesmo objeto',
    ],
    comoFunciona: [
      { titulo: 'Liga à corrente', texto: 'Conecta o candeeiro à tomada com o adaptador incluído.' },
      { titulo: 'Carrega o telemóvel', texto: 'Coloca o telemóvel na base para carregamento sem fios.' },
      { titulo: 'Regula a luz', texto: 'Toca no sensor para ajustar a intensidade à tua preferência.' },
    ],
    porqueEscolher: [
      'Dois usos num só objeto — menos cabos na secretária',
      'Iluminação quente que cria um ambiente acolhedor',
      'Acabamento premium que combina com qualquer decoração',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Funciona com qualquer telemóvel?',
        r: 'Funciona com qualquer telemóvel compatível com carregamento sem fios Qi, incluindo modelos iPhone e Android mais recentes.',
      },
      {
        p: 'O carregamento é rápido?',
        r: 'O carregamento sem fios tem a potência padrão da tecnologia Qi, adequada para carregamento noturno na mesa de cabeceira.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'luminaria-solar-caminho',
    nome: 'Luminária Solar de Caminho para Jardim',
    categoria: 'Iluminação',
    preco: 89.9,
    precoAnterior: 109.9,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/luminaria-solar-caminho.svg',
      'images/produtos/luminaria-solar-caminho-2.svg',
      'images/produtos/luminaria-solar-caminho-3.svg',
    ],
    curto: 'Ilumina passagens e canteiros com energia solar, sem fios e sem conta de luz.',
    descricao:
      'A Luminária Solar de Caminho foi pensada para valorizar jardins, passagens e canteiros. Funciona 100% com energia solar, carregando durante o dia e acendendo automaticamente ao anoitecer. Instalação simples, sem cabos e sem custos de eletricidade.',
    beneficios: [
      'Energia solar — sem custos de eletricidade',
      'Acendimento automático ao anoitecer',
      'Resistente à chuva e ao calor',
      'Instalação simples, sem cabos',
      'Luz quente e convidativa para passagens',
    ],
    comoFunciona: [
      { titulo: 'Coloca no local', texto: 'Fixa a luminária no solo ou no caminho pretendido.' },
      { titulo: 'Deixa carregar de dia', texto: 'O painel solar capta a luz do sol e carrega a bateria interna.' },
      { titulo: 'Acende sozinha à noite', texto: 'Ao escurecer, a luminária acende automaticamente.' },
    ],
    porqueEscolher: [
      'Ideal para jardins, passagens, canteiros e entradas',
      'Solução sustentável e sem fios',
      'Valoriza a aparência da casa com pouco esforço',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Precisa de tomada?',
        r: 'Não. Funciona apenas com energia solar, sem qualquer ligação elétrica.',
      },
      {
        p: 'Resiste à chuva?',
        r: 'Sim. A estrutura é resistente à água, adequada para uso externo.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'projetor-astronauta-luz-estelar',
    nome: 'Mini Projetor Astronauta Luz Estelar com Controle Remoto',
    categoria: 'Iluminação',
    preco: 120.99,
    precoAnterior: 139.14,
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

  /* ---------- AROMAS (completar 7) ---------- */

  {
    id: 'difusor-aromas-zen',
    nome: 'Difusor de Aromas Zen com Luz',
    categoria: 'Aromas',
    preco: 39.9,
    precoAnterior: 49.9,
    desconto: null,
    destaque: true,
    bestseller: false,
    imagens: [
      'images/produtos/difusor-aromas-zen.svg',
      'images/produtos/difusor-aromas-zen-2.svg',
      'images/produtos/difusor-aromas-zen-3.svg',
    ],
    curto: 'Névoa fina e luz ambiente para uma casa tranquila em qualquer divisão.',
    descricao:
      'O Difusor de Aromas Zen com Luz une difusão ultra-sónica e iluminação ambiente regulável. Liberta uma névoa fina e silenciosa enquanto espalha o aroma do teu óleo essencial, criando um refúgio de calma no quarto, na sala ou no escritório.',
    beneficios: [
      'Difusão ultra-sónica silenciosa',
      'Luz ambiente em várias cores reguláveis',
      'Desligamento automático quando a água termina',
      'Capacidade generosa para horas de difusão',
      'Fácil de limpar e simples de utilizar',
    ],
    comoFunciona: [
      { titulo: 'Enche com água', texto: 'Adiciona água até à marca indicada no depósito.' },
      { titulo: 'Adiciona o aroma', texto: 'Coloca algumas gotas do teu óleo essencial.' },
      { titulo: 'Liga e relaxa', texto: 'Escolhe o modo contínuo ou intermitente e a cor da luz.' },
    ],
    porqueEscolher: [
      'Praticamente silencioso — ideal para a noite',
      'Cria uma atmosfera de relaxamento em minutos',
      'Design compacto que se integra em qualquer divisão',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Faz barulho?',
        r: 'Não. A difusão ultra-sónica é praticamente silenciosa.',
      },
      {
        p: 'Que óleos posso usar?',
        r: 'Qualquer óleo essencial puro. Evita óleos sintéticos muito espessos.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'vela-aromatica-lavanda',
    nome: 'Vela Aromática Lavanda & Eucalipto',
    categoria: 'Aromas',
    preco: 21.9,
    precoAnterior: null,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/vela-aromatica-lavanda.svg',
      'images/produtos/vela-aromatica-lavanda-2.svg',
      'images/produtos/vela-aromatica-lavanda-3.svg',
    ],
    curto: 'Aroma relaxante de lavanda e eucalipto para momentos de descanso.',
    descricao:
      'A Vela Aromática Lavanda & Eucalipto foi criada para promover o descanso e o bem-estar. Produzida com cera vegetal e pavio de algodão, queima de forma limpa e uniforme, espalhando uma fragrância suave e revigorante.',
    beneficios: [
      'Cera vegetal, combustão limpa e duradoura',
      'Pavio de algodão, sem fumo residual',
      'Aroma relaxante de lavanda e eucalipto',
      'Horas de queima contínua',
      'Frasco de vidro reutilizável',
    ],
    comoFunciona: [
      { titulo: 'Acende', texto: 'Acende o pavio num local estável e seguro.' },
      { titulo: 'Aproveita o aroma', texto: 'Deixa queimar para espalhar a fragrância pela divisão.' },
      { titulo: 'Reutiliza o frasco', texto: 'Depois de queimar, lava e reutiliza o frasco como decoração.' },
    ],
    porqueEscolher: [
      'Fragrância pensada para relaxar após um dia cansativo',
      'Composição natural e segura para interiores',
      'Ideal para o quarto e a casa de banho',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Quanto tempo dura?',
        r: 'A vela tem uma duração média de várias horas de queima contínua.',
      },
      {
        p: 'É segura para usar em casa?',
        r: 'Sim. Usa cera vegetal e pavio de algodão, com combustão limpa e segura.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'difusor-varetas',
    nome: 'Difusor de Varetas de Bambu',
    categoria: 'Aromas',
    preco: 27.9,
    precoAnterior: 34.9,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/difusor-varetas.svg',
      'images/produtos/difusor-varetas-2.svg',
      'images/produtos/difusor-varetas-3.svg',
    ],
    curto: 'Fragrância contínua sem chama nem eletricidade, pronta a usar.',
    descricao:
      'O Difusor de Varetas de Bambu perfuma a tua casa de forma contínua e elegante, sem chama e sem eletricidade. As varetas de bambu absorvem o óleo perfumado e libertam a fragrância gradualmente, mantendo o ambiente fresco por semanas.',
    beneficios: [
      'Perfuma continuamente sem chama nem eletricidade',
      'Fragrância que dura várias semanas',
      'Design elegante que decora a divisão',
      'Sem montagem — pronto a usar',
      'Aroma suave e constante',
    ],
    comoFunciona: [
      { titulo: 'Abre o frasco', texto: 'Remove a tampa do frasco com o óleo perfumado.' },
      { titulo: 'Coloca as varetas', texto: 'Insere as varetas de bambu no frasco.' },
      { titulo: 'Inverte as varetas', texto: 'Vira as varetas de vez em quando para renovar o aroma.' },
    ],
    porqueEscolher: [
      'Alternativa segura às velas e à eletricidade',
      'Perfume constante em qualquer divisão',
      'Aparência sofisticada como peça decorativa',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Quanto tempo dura a fragrância?',
        r: 'Com o frasco cheio, a fragrância pode durar várias semanas, dependendo da ventilação do local.',
      },
      {
        p: 'Precisa de eletricidade ou chama?',
        r: 'Não. Funciona apenas com as varetas a absorver o óleo perfumado.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'perfume-ambiente',
    nome: 'Perfume de Ambiente Algodão Fresco',
    categoria: 'Aromas',
    preco: 18.9,
    precoAnterior: null,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/perfume-ambiente.svg',
      'images/produtos/perfume-ambiente-2.svg',
      'images/produtos/perfume-ambiente-3.svg',
    ],
    curto: 'Aroma limpo e suave que renova o ar de qualquer divisão.',
    descricao:
      'O Perfume de Ambiente Algodão Fresco traz a sensação de roupa lavada e quartos arejados para tua casa. Com uma fragrância leve e duradoura, neutraliza odores e deixa o ambiente fresco e acolhedor em qualquer divisão.',
    beneficios: [
      'Aroma limpo e suave, inspirado no algodão fresco',
      'Neutraliza odores do dia a dia',
      'Fácil de aplicar em qualquer divisão',
      'Fragrância duradoura sem ser intensa',
      'Ideal para quartos, salas e casas de banho',
    ],
    comoFunciona: [
      { titulo: 'Agita', texto: 'Agita o frasco antes de usar.' },
      { titulo: 'Aplica', texto: 'Borra a fragrância em cortinas, almofadas ou no ar.' },
      { titulo: 'Desfruta', texto: 'Repete sempre que quiseres renovar o ambiente.' },
    ],
    porqueEscolher: [
      'Renova o ambiente em segundos',
      'Aroma agradável que agrada a toda a família',
      'Uso versátil em várias divisões',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Pode ser usado em tecidos?',
        r: 'Sim, pode ser aplicado em cortinas e almofadas, mas testa numa pequena área primeiro.',
      },
      {
        p: 'O aroma é muito forte?',
        r: 'Não. A fragrância é suave e equilibrada, sem ser intensa.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'kit-incenso-natural',
    nome: 'Kit de Incenso Natural com Suporte',
    categoria: 'Aromas',
    preco: 16.9,
    precoAnterior: null,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/kit-incenso-natural.svg',
      'images/produtos/kit-incenso-natural-2.svg',
      'images/produtos/kit-incenso-natural-3.svg',
    ],
    curto: 'Vários aromas naturais e suporte incluído para purificar o ambiente.',
    descricao:
      'O Kit de Incenso Natural inclui um conjunto de varas de incenso em aromas selecionados e um suporte decorativo para queimar em segurança. Perfeito para meditação, relaxamento ou simplesmente para perfumar a tua casa com aromas naturais.',
    beneficios: [
      'Vários aromas naturais num só kit',
      'Suporte decorativo incluído para queimar em segurança',
      'Ideal para meditação e relaxamento',
      'Embalagem prática para dar de presente',
      'Aromas que purificam e acalmam o ambiente',
    ],
    comoFunciona: [
      { titulo: 'Posiciona', texto: 'Coloca a vara no suporte incluído.' },
      { titulo: 'Acende', texto: 'Acende a ponta e deixa a chama apagar para libertar o fumo.' },
      { titulo: 'Aproveita o aroma', texto: 'Espalha o aroma pela divisão e renova quando necessário.' },
    ],
    porqueEscolher: [
      'Ideal para momentos de relaxamento e meditação',
      'Variedade de aromas para diferentes ocasiões',
      'Suporte seguro incluído no kit',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Quantos aromas estão incluídos?',
        r: 'O kit inclui uma seleção de aromas naturais, ideal para alternar consoante a ocasião.',
      },
      {
        p: 'Como usar com segurança?',
        r: 'Utiliza sempre o suporte incluído, em superfície estável e afastado de materiais inflamáveis.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  /* ---------- COZINHA (completar 7) ---------- */

  {
    id: 'jogo-utensilios-silicone',
    nome: 'Jogo de Utensílios de Cozinha em Silicone',
    categoria: 'Cozinha',
    preco: 34.9,
    precoAnterior: 44.9,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/jogo-utensilios-silicone.svg',
      'images/produtos/jogo-utensilios-silicone-2.svg',
      'images/produtos/jogo-utensilios-silicone-3.svg',
    ],
    curto: 'Conjunto completo de utensílios resistentes ao calor que não riscam as panelas.',
    descricao:
      'O Jogo de Utensílios de Cozinha em Silicone inclui as peças essenciais para cozinhar com conforto. O silicone de qualidade alimentar não risca panelas e frigideiras, resiste ao calor e lava-se facilmente. Cabos ergonómicos que oferecem uma pega confortável.',
    beneficios: [
      'Conjunto completo com as peças essenciais',
      'Silicone que não risca panelas e frigideiras',
      'Resistente a altas temperaturas',
      'Cabos ergonómicos e confortáveis',
      'Fácil de lavar, à mão ou na máquina',
    ],
    comoFunciona: [
      { titulo: 'Usa no dia a dia', texto: 'Mistura, serve e prepara os teus pratos com as peças incluídas.' },
      { titulo: 'Lava', texto: 'Lava à mão ou na máquina de lavar loiça.' },
      { titulo: 'Guarda', texto: 'Guarda no suporte ou na gaveta sem ocupar espaço.' },
    ],
    porqueEscolher: [
      'Protege as tuas panelas antiaderentes',
      'Material seguro para alimentos',
      'Conjunto versátil para qualquer cozinha',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Pode ir à máquina de lavar loiça?',
        r: 'Sim, os utensílios podem ser lavados na máquina de lavar loiça.',
      },
      {
        p: 'Resiste ao calor?',
        r: 'Sim, o silicone suporta altas temperaturas, seguro para cozinhar.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'organizador-temperos',
    nome: 'Organizador de Temperos Giratório',
    categoria: 'Cozinha',
    preco: 42.9,
    precoAnterior: null,
    desconto: null,
    destaque: true,
    bestseller: false,
    imagens: [
      'images/produtos/organizador-temperos.svg',
      'images/produtos/organizador-temperos-2.svg',
      'images/produtos/organizador-temperos-3.svg',
    ],
    curto: 'Todos os temperos à mão num suporte giratório que poupa espaço.',
    descricao:
      'O Organizador de Temperos Giratório mantém os teus temperos organizados e acessíveis. A base rotativa permite encontrar rapidamente qualquer frasco, e os níveis aproveitam o espaço vertical da bancada ou do armário. Construção resistente e design moderno.',
    beneficios: [
      'Base giratória que facilita o acesso a todos os frascos',
      'Vários níveis para aproveitar o espaço vertical',
      'Acomoda frascos de diferentes tamanhos',
      'Construção resistente e estável',
      'Design que organiza a bancada da cozinha',
    ],
    comoFunciona: [
      { titulo: 'Monta', texto: 'Encaixa os níveis do suporte, sem ferramentas.' },
      { titulo: 'Organiza', texto: 'Coloca os frascos de temperos nos espaços disponíveis.' },
      { titulo: 'Roda e usa', texto: 'Gira a base para encontrar o tempero que precisas.' },
    ],
    porqueEscolher: [
      'Acelera o cozinhar — tudo à mão',
      'Poupa espaço na bancada',
      'Acabamento moderno que combina com a cozinha',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Aceita frascos de tamanhos diferentes?',
        r: 'Sim, os níveis acomodam frascos de diferentes alturas e diâmetros.',
      },
      {
        p: 'Precisa de montagem complicada?',
        r: 'Não. A montagem é simples e não requer ferramentas.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'tabua-corte-madeira',
    nome: 'Tábua de Corte em Madeira de Acácia',
    categoria: 'Cozinha',
    preco: 54.9,
    precoAnterior: 69.9,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/tabua-corte-madeira.svg',
      'images/produtos/tabua-corte-madeira-2.svg',
      'images/produtos/tabua-corte-madeira-3.svg',
    ],
    curto: 'Tábua resistente e elegante para cortar, servir e apresentar.',
    descricao:
      'A Tábua de Corte em Madeira de Acácia combina durabilidade e beleza natural. Perfeita para cortar e preparar alimentos, serve também para apresentar queijos, frutas e entradas. A madeira de acácia é densa, resistente e amiga das facas.',
    beneficios: [
      'Madeira de acácia densa e resistente',
      'Amiga das facas — preserva o fio',
      'Dupla função: cortar e servir',
      'Acabamento natural elegante',
      'Fácil de manter com óleo de madeira',
    ],
    comoFunciona: [
      { titulo: 'Corta e prepara', texto: 'Usa a tábua para cortar legumes, pão, carnes e peixes.' },
      { titulo: 'Serve à mesa', texto: 'Leva a tábua à mesa para servir queijos e entradas.' },
      { titulo: 'Lava e mantém', texto: 'Lava à mão e aplica óleo mineral de vez em quando.' },
    ],
    porqueEscolher: [
      'Dura mais do que as tábuas de plástico',
      'Beleza natural que valoriza a cozinha',
      'Versátil para o dia a dia e para receber',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Pode ir à máquina de lavar loiça?',
        r: 'Recomendamos lavagem à mão para preservar a madeira. A máquina pode danificá-la.',
      },
      {
        p: 'Precisa de algum cuidado especial?',
        r: 'Aplicar óleo mineral de tempos a tempos mantém a madeira hidratada e bonita.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'jogo-tacas-tampa',
    nome: 'Jogo de Taças com Tampa',
    categoria: 'Cozinha',
    preco: 29.9,
    precoAnterior: null,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/jogo-tacas-tampa.svg',
      'images/produtos/jogo-tacas-tampa-2.svg',
      'images/produtos/jogo-tacas-tampa-3.svg',
    ],
    curto: 'Taças empilháveis com tampa para guardar, servir e levar.',
    descricao:
      'O Jogo de Taças com Tampa é a solução prática para guardar sobras, preparar refeições e levar comida. As taças são empilháveis, economizam espaço e as tampas vedam bem para manter os alimentos frescos. Acompanham do frigorífico ao micro-ondas.',
    beneficios: [
      'Tampas que vedam e mantêm os alimentos frescos',
      'Empilháveis — poupam espaço no armário',
      'Seguras para frigorífico, micro-ondas e máquina',
      'Tamanhos variados para todas as necessidades',
      'Fáceis de lavar e guardar',
    ],
    comoFunciona: [
      { titulo: 'Serve e guarda', texto: 'Coloca os alimentos nas taças e fecha com a tampa.' },
      { titulo: 'Leva contigo', texto: 'Perfeitas para levar refeições para o trabalho.' },
      { titulo: 'Aquece e limpa', texto: 'Vão ao micro-ondas e à máquina de lavar loiça.' },
    ],
    porqueEscolher: [
      'Reduz o desperdício ao guardar sobras',
      'Conjunto versátil para a rotina diária',
      'Economia de espaço com o empilhamento',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Podem ir ao micro-ondas?',
        r: 'Sim, as taças são seguras para micro-ondas, sem a tampa para evitar acumulação de pressão.',
      },
      {
        p: 'As tampas vedam bem?',
        r: 'Sim, as tampas encaixam de forma firme para manter os alimentos frescos.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'jarro-infusoes',
    nome: 'Jarro com Infusor para Bebidas',
    categoria: 'Cozinha',
    preco: 36.9,
    precoAnterior: 44.9,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/jarro-infusoes.svg',
      'images/produtos/jarro-infusoes-2.svg',
      'images/produtos/jarro-infusoes-3.svg',
    ],
    curto: 'Prepara águas aromatizadas, chás e bebidas frescas com o infusor incluído.',
    descricao:
      'O Jarro com Infusor é perfeito para preparar águas aromatizadas, chás gelados e sumos naturais. O infusor removível permite adicionar frutas, ervas ou chá sem que fiquem soltos na bebida. Design elegante que combina com a mesa e o frigorífico.',
    beneficios: [
      'Infusor removível para frutas, ervas e chá',
      'Prepara águas aromatizadas e bebidas frescas',
      'Design elegante que decora a mesa',
      'Fácil de lavar — peças removíveis',
      'Tampa que mantém as bebidas frescas',
    ],
    comoFunciona: [
      { titulo: 'Enche o infusor', texto: 'Coloca frutas, ervas ou chá no infusor removível.' },
      { titulo: 'Enche com água', texto: 'Adiciona água ou bebida à tua escolha.' },
      { titulo: 'Serve e renova', texto: 'Deixa em infusão no frigorífico e serve sempre fresco.' },
    ],
    porqueEscolher: [
      'Incentiva beber mais água de forma saborosa',
      'Ideal para festas e refeições em família',
      'Limpeza simples com peças removíveis',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Que bebidas posso preparar?',
        r: 'Águas aromatizadas, chás gelados, sumos e infusões de frutas e ervas.',
      },
      {
        p: 'Pode ir ao frigorífico?',
        r: 'Sim, o jarro cabe facilmente no frigorífico para bebidas frescas.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'panos-cozinha-linho',
    nome: 'Conjunto de Panos de Cozinha em Linho',
    categoria: 'Cozinha',
    preco: 19.9,
    precoAnterior: null,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/panos-cozinha-linho.svg',
      'images/produtos/panos-cozinha-linho-2.svg',
      'images/produtos/panos-cozinha-linho-3.svg',
    ],
    curto: 'Panos absorventes, duráveis e elegantes para a tua cozinha.',
    descricao:
      'O Conjunto de Panos de Cozinha em Linho reúne panos de alta absorção e grande durabilidade. O linho é natural, resistente e fica mais macio a cada lavagem. Perfeitos para secar loiça, limpar superfícies ou decorar a cozinha.',
    beneficios: [
      'Linho natural, absorvente e durável',
      'Fica mais macio a cada lavagem',
      'Vários panos num só conjunto',
      'Aparência elegante e atemporal',
      'Resistentes ao uso diário',
    ],
    comoFunciona: [
      { titulo: 'Usa', texto: 'Secar loiça, limpar superfícies ou decorar a cozinha.' },
      { titulo: 'Lava', texto: 'Lava à máquina a temperatura baixa.' },
      { titulo: 'Mantém', texto: 'Passa a ferro se preferires uma aparência impecável.' },
    ],
    porqueEscolher: [
      'Alternativa durável aos panos sintéticos',
      'Material natural e sustentável',
      'Estética que valoriza a cozinha',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Quantos panos inclui?',
        r: 'O conjunto inclui vários panos, prontos para o uso diário.',
      },
      {
        p: 'Podem ir à máquina?',
        r: 'Sim, lavam-se à máquina em temperatura baixa sem perder a qualidade.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  /* ---------- DECORAÇÃO (completar 7) ---------- */

  {
    id: 'almofada-decorativa',
    nome: 'Almofada Decorativa Comfort Line',
    categoria: 'Decoração',
    preco: 24.9,
    precoAnterior: 29.9,
    desconto: null,
    destaque: true,
    bestseller: false,
    imagens: [
      'images/produtos/almofada-decorativa.svg',
      'images/produtos/almofada-decorativa-2.svg',
      'images/produtos/almofada-decorativa-3.svg',
    ],
    curto: 'Toque de cor e conforto para o sofá, a cama ou a poltrona.',
    descricao:
      'A Almofada Decorativa Comfort Line combina design e conforto para renovar qualquer ambiente. O tecido macio ao toque e o enchimento generoso tornam-na perfeita para o sofá, a cama ou uma poltrona de leitura. Vários tons para combinar com a tua decoração.',
    beneficios: [
      'Tecido macio e agradável ao toque',
      'Enchimento generoso que mantém a forma',
      'Capa removível e lavável',
      'Vários tons para combinar com a decoração',
      'Tamanho perfeito para sofás e camas',
    ],
    comoFunciona: [
      { titulo: 'Coloca', texto: 'Posiciona no sofá, cama ou poltrona.' },
      { titulo: 'Combina', texto: 'Mistura cores e texturas para dar vida à divisão.' },
      { titulo: 'Lava a capa', texto: 'Remove a capa e lava sempre que precisares.' },
    ],
    porqueEscolher: [
      'Renova o ambiente sem obras',
      'Conforto extra para momentos de descanso',
      'Combina com qualquer estilo de decoração',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'A capa pode ser lavada?',
        r: 'Sim, a capa é removível e pode ser lavada à máquina.',
      },
      {
        p: 'Mantém a forma ao longo do tempo?',
        r: 'Sim, o enchimento é projetado para manter a forma mesmo com uso diário.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'espelho-decorativo',
    nome: 'Espelho Decorativo Redondo com Moldura',
    categoria: 'Decoração',
    preco: 49.9,
    precoAnterior: null,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/espelho-decorativo.svg',
      'images/produtos/espelho-decorativo-2.svg',
      'images/produtos/espelho-decorativo-3.svg',
    ],
    curto: 'Amplia a luz e o espaço da divisão com um toque elegante.',
    descricao:
      'O Espelho Decorativo Redondo com Moldura amplia a luminosidade e a sensação de espaço em qualquer divisão. A moldura em acabamento neutro valoriza a parede, seja na entrada, na sala ou no quarto. Fácil de instalar e com aparência sofisticada.',
    beneficios: [
      'Amplia a luz e a sensação de espaço',
      'Moldura elegante em acabamento neutro',
      'Versátil para várias divisões',
      'Instalação simples na parede',
      'Reflexo nítido e uniforme',
    ],
    comoFunciona: [
      { titulo: 'Escolhe o local', texto: 'Define a parede e a altura pretendida.' },
      { titulo: 'Fixa', texto: 'Instala com o suporte incluído, com parafusos ou fita resistente.' },
      { titulo: 'Aproveita', texto: 'Usa o espelho para decorar e dar profundidade ao ambiente.' },
    ],
    porqueEscolher: [
      'Transforma a perceção de espaço da divisão',
      'Peça decorativa atemporal',
      'Fácil de instalar',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'O que inclui para a instalação?',
        r: 'O espelho inclui suporte para fixação na parede.',
      },
      {
        p: 'Onde posso colocá-lo?',
        r: 'Em entradas, salas, quartos, corredores e casas de banho.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'vaso-decorativo',
    nome: 'Vaso Decorativo em Cerâmica',
    categoria: 'Decoração',
    preco: 32.9,
    precoAnterior: 39.9,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/vaso-decorativo.svg',
      'images/produtos/vaso-decorativo-2.svg',
      'images/produtos/vaso-decorativo-3.svg',
    ],
    curto: 'Vaso em cerâmica para plantas, flores ou como peça decorativa.',
    descricao:
      'O Vaso Decorativo em Cerâmica é uma peça versátil para exibir plantas e flores ou simplesmente decorar a mesa, a prateleira ou a entrada. O acabamento em tons neutros combina com qualquer estilo e dá um toque natural à casa.',
    beneficios: [
      'Cerâmica de qualidade com acabamento elegante',
      'Tons neutros que combinam com qualquer decoração',
      'Perfeito para plantas, flores ou arranjos',
      'Base estável e resistente',
      'Toque artesanal que valoriza o ambiente',
    ],
    comoFunciona: [
      { titulo: 'Escolhe o uso', texto: 'Usa com plantas naturais, flores secas ou como peça isolada.' },
      { titulo: 'Coloca no local', texto: 'Posiciona na mesa, prateleira, entrada ou chão.' },
      { titulo: 'Mantém limpo', texto: 'Limpa com um pano húmido para preservar o acabamento.' },
    ],
    porqueEscolher: [
      'Renova a decoração com pouco esforço',
      'Peça versátil para várias utilizações',
      'Acabamento que dura anos',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Serve para plantas de verdade?',
        r: 'Sim, pode receber plantas naturais. Verifica se o modelo tem drenagem adequada.',
      },
      {
        p: 'O que vem incluído?',
        r: 'O vaso é vendido sem planta ou flor incluída.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'velas-decorativas',
    nome: 'Conjunto de Velas Decorativas',
    categoria: 'Decoração',
    preco: 22.9,
    precoAnterior: null,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/velas-decorativas.svg',
      'images/produtos/velas-decorativas-2.svg',
      'images/produtos/velas-decorativas-3.svg',
    ],
    curto: 'Velas em tons neutros para criar uma atmosfera acolhedora.',
    descricao:
      'O Conjunto de Velas Decorativas reúne velas em tons neutros e tamanhos variados para compor a tua decoração. Perfeitas para a mesa de jantar, prateleiras ou momentos de relaxamento, criam uma luz suave e uma atmosfera acolhedora.',
    beneficios: [
      'Vários tamanhos e tons neutros',
      'Cria uma luz suave e acolhedora',
      'Composição decorativa pronta a usar',
      'Queima limpa e uniforme',
      'Ideal para mesas, prateleiras e centros de mesa',
    ],
    comoFunciona: [
      { titulo: 'Composição', texto: 'Distribui as velas na mesa ou prateleira.' },
      { titulo: 'Acende', texto: 'Acende para momentos de jantar ou relaxamento.' },
      { titulo: 'Renova', texto: 'Substitui quando estiverem no fim para manter o ambiente.' },
    ],
    porqueEscolher: [
      'Ambiente acolhedor em segundos',
      'Decoração versátil para várias ocasiões',
      'Combinam entre si e com qualquer estilo',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Quanto tempo queimam?',
        r: 'O tempo de queima varia com o tamanho de cada vela incluída no conjunto.',
      },
      {
        p: 'Podem ser usadas todos os dias?',
        r: 'Sim, são adequadas para uso diário em ambientes interiores.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'tapete-macio',
    nome: 'Tapete Macio para Sala',
    categoria: 'Decoração',
    preco: 64.9,
    precoAnterior: 79.9,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/tapete-macio.svg',
      'images/produtos/tapete-macio-2.svg',
      'images/produtos/tapete-macio-3.svg',
    ],
    curto: 'Conforto e cor para a sala, o quarto ou o escritório.',
    descricao:
      'O Tapete Macio para Sala traz conforto e personalidade ao ambiente. A superfície felpuda é suave ao toque e o padrão neutro combina com qualquer mobiliário. Perfeito para definir zonas de estar, aquecer o chão e reduzir ruídos.',
    beneficios: [
      'Superfície felpuda e suave ao toque',
      'Padrão neutro que combina com qualquer decoração',
      'Aquece o chão e reduz ruídos',
      'Define zonas de estar com estilo',
      'Base antiderrapante para maior segurança',
    ],
    comoFunciona: [
      { titulo: 'Escolhe o local', texto: 'Define onde o tapete faz mais sentido na divisão.' },
      { titulo: 'Desenrola', texto: 'Desenrola e deixa assentar durante algumas horas.' },
      { titulo: 'Mantém limpo', texto: 'Aspira regularmente para preservar o aspeto.' },
    ],
    porqueEscolher: [
      'Conforto imediato para os pés',
      'Transforma a divisão com cor e textura',
      'Fácil de manter',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Qual é o tamanho disponível?',
        r: 'O tapete está disponível numa medida ideal para salas e quartos. Consulta as opções na compra.',
      },
      {
        p: 'Desliza no chão?',
        r: 'Não, o tapete possui base antiderrapante para maior segurança.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'lanternas-decorativas',
    nome: 'Lanternas Decorativas para Mesa',
    categoria: 'Decoração',
    preco: 28.9,
    precoAnterior: null,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/lanternas-decorativas.svg',
      'images/produtos/lanternas-decorativas-2.svg',
      'images/produtos/lanternas-decorativas-3.svg',
    ],
    curto: 'Lanternas elegantes que criam uma luz suave em jantares e momentos especiais.',
    descricao:
      'As Lanternas Decorativas para Mesa criam uma iluminação suave e romântica em jantares, festas e momentos especiais. O design em tons neutros combina com qualquer mesa e a luz quente transforma o ambiente. Podem ser usadas com velas ou luzes de LED.',
    beneficios: [
      'Luz quente que cria ambiente acolhedor',
      'Design elegante para mesas e prateleiras',
      'Adequadas para velas ou luzes de LED',
      'Leves e fáceis de guardar',
      'Perfeitas para jantares e ocasiões especiais',
    ],
    comoFunciona: [
      { titulo: 'Coloca na mesa', texto: 'Distribui as lanternas ao longo da mesa ou prateleira.' },
      { titulo: 'Acende', texto: 'Coloca uma vela ou luz LED no interior.' },
      { titulo: 'Cria o ambiente', texto: 'Aproveita a luz suave para jantares e momentos especiais.' },
    ],
    porqueEscolher: [
      'Transforma qualquer refeição em ocasião especial',
      'Decorativas mesmo sem acender',
      'Leves e fáceis de arrumar',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Posso usar com vela?',
        r: 'Sim, são adequadas para velas. Coloca sempre numa superfície estável e vigia a chama.',
      },
      {
        p: 'Quantas lanternas inclui?',
        r: 'O conjunto inclui várias lanternas para composições na mesa.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  /* ---------- ORGANIZAÇÃO (completar 7) ---------- */

  {
    id: 'caixa-organizadora-tampa',
    nome: 'Caixa Organizadora com Tampa',
    categoria: 'Organização',
    preco: 26.9,
    precoAnterior: 32.9,
    desconto: null,
    destaque: true,
    bestseller: false,
    imagens: [
      'images/produtos/caixa-organizadora-tampa.svg',
      'images/produtos/caixa-organizadora-tampa-2.svg',
      'images/produtos/caixa-organizadora-tampa-3.svg',
    ],
    curto: 'Guarda e esconde o que precisa de estar organizado, com estilo.',
    descricao:
      'A Caixa Organizadora com Tampa é perfeita para guardar brinquedos, roupa, documentos e acessórios de forma discreta. A tampa protege do pó e o tecido resistente mantém a forma. Ideal para prateleiras, estantes e armários.',
    beneficios: [
      'Tampa que protege do pó',
      'Tecido resistente que mantém a forma',
      'Vários tamanhos e tons neutros',
      'Pegas para transporte fácil',
      'Empilhável para aproveitar o espaço',
    ],
    comoFunciona: [
      { titulo: 'Enche', texto: 'Coloca os objetos que queres organizar.' },
      { titulo: 'Fecha', texto: 'Fecha a tampa para proteger do pó.' },
      { titulo: 'Empilha ou guarda', texto: 'Empilha na prateleira ou no armário para poupar espaço.' },
    ],
    porqueEscolher: [
      'Esconde a desarrumação com elegância',
      'Versátil para qualquer divisão',
      'Montagem simples e rápida',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Precisa de montagem?',
        r: 'Não. A caixa chega pronta a usar, é só abrir e colocar os objetos.',
      },
      {
        p: 'Pode ser empilhada?',
        r: 'Sim, o design permite empilhar várias caixas para aproveitar o espaço vertical.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'organizador-gavetas',
    nome: 'Organizador de Gavetas Modular',
    categoria: 'Organização',
    preco: 38.9,
    precoAnterior: null,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/organizador-gavetas.svg',
      'images/produtos/organizador-gavetas-2.svg',
      'images/produtos/organizador-gavetas-3.svg',
    ],
    curto: 'Divide a gaveta em compartimentos e encontra tudo num instante.',
    descricao:
      'O Organizador de Gavetas Modular divide a tua gaveta em compartimentos ajustáveis para arrumar talheres, maquilhagem, material de escritório e acessórios. O encaixe modular adapta-se a diferentes tamanhos de gaveta e mantém tudo no seu lugar.',
    beneficios: [
      'Módulos que se ajustam a diferentes gavetas',
      'Compartimentos para vários tipos de objetos',
      'Base antiderrapante que não desliza',
      'Fácil de limpar',
      'Acabamento neutro que combina com tudo',
    ],
    comoFunciona: [
      { titulo: 'Mede a gaveta', texto: 'Verifica as dimensões da gaveta que queres organizar.' },
      { titulo: 'Monta os módulos', texto: 'Encaixa os divisores no tamanho pretendido.' },
      { titulo: 'Organiza', texto: 'Distribui os objetos pelos compartimentos.' },
    ],
    porqueEscolher: [
      'Ganhas tempo ao encontrar tudo rapidamente',
      'Adapta-se a qualquer gaveta',
      'Acabamento de qualidade que dura',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Serve para qualquer gaveta?',
        r: 'Sim, os módulos são ajustáveis para se adaptarem a diferentes tamanhos de gaveta.',
      },
      {
        p: 'Desliza ao abrir e fechar?',
        r: 'Não, a base antiderrapante mantém os módulos no lugar.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'kit-organizador-cabos',
    nome: 'Kit Organizador de Cabos',
    categoria: 'Organização',
    preco: 17.9,
    precoAnterior: null,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/kit-organizador-cabos.svg',
      'images/produtos/kit-organizador-cabos-2.svg',
      'images/produtos/kit-organizador-cabos-3.svg',
    ],
    curto: 'Adeus ao emaranhado de cabos na secretária e na sala.',
    descricao:
      'O Kit Organizador de Cabos reúne as peças essenciais para acabar com os cabos emaranhados. Clipes, abraçadeiras e canais organizam os cabos da secretária, da televisão e do computador, mantendo tudo limpo e seguro.',
    beneficios: [
      'Várias peças para diferentes tipos de cabos',
      'Organiza cabos na secretária, TV e computador',
      'Clipes reutilizáveis e fáceis de usar',
      'Aderentes que não danificam as superfícies',
      'Deixa a secretária limpa e organizada',
    ],
    comoFunciona: [
      { titulo: 'Junta os cabos', texto: 'Agrupa os cabos que seguem o mesmo caminho.' },
      { titulo: 'Fixa', texto: 'Usa os clipes e abraçadeiras para fixar os cabos.' },
      { titulo: 'Esconde', texto: 'Utiliza os canais para esconder os cabos ao longo da parede.' },
    ],
    porqueEscolher: [
      'Acaba com o emaranhado de cabos',
      'Mais fácil de limpar por baixo da secretária',
      'Aplicação simples em minutos',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Serve para qualquer tipo de cabo?',
        r: 'Sim, os clipes e abraçadeiras ajustam-se a cabos de diferentes espessuras.',
      },
      {
        p: 'Danifica as superfícies?',
        r: 'Não, os adesivos são removíveis e não deixam marcas na maioria das superfícies.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'cabides-veludo',
    nome: 'Cabides Anti-Derrapante em Veludo',
    categoria: 'Organização',
    preco: 24.9,
    precoAnterior: 29.9,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/cabides-veludo.svg',
      'images/produtos/cabides-veludo-2.svg',
      'images/produtos/cabides-veludo-3.svg',
    ],
    curto: 'Roupa no lugar, sem marcas e sem escorregar.',
    descricao:
      'Os Cabides Anti-Derrapante em Veludo mantêm a roupa no lugar sem deixar marcas nos ombros. O revestimento em veludo é suave e evita que as peças escorreguem, enquanto o design fino aproveita melhor o espaço do armário.',
    beneficios: [
      'Veludo anti-derrapante que segura a roupa',
      'Não deixa marcas nas peças',
      'Design fino que poupa espaço no armário',
      'Revestimento suave e agradável',
      'Conjunto variado para o armário todo',
    ],
    comoFunciona: [
      { titulo: 'Coloca a roupa', texto: 'Pendura as peças normalmente no cabide.' },
      { titulo: 'Pendura no armário', texto: 'Guarda no armário sem preocupação.' },
      { titulo: 'Aproveita o espaço', texto: 'O design fino permite pendurar mais roupa lado a lado.' },
    ],
    porqueEscolher: [
      'Protege as tuas roupas de marcas e deformações',
      'Mais organização no armário',
      'Acabamento elegante em veludo',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Quantos cabides inclui?',
        r: 'O conjunto inclui vários cabides, ideais para renovar o armário.',
      },
      {
        p: 'Deixa marcas nos ombros das roupas?',
        r: 'Não. O veludo é suave e não deixa marcas nas peças de roupa.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'prateleira-suspensa',
    nome: 'Prateleira Suspensa para Parede',
    categoria: 'Organização',
    preco: 44.9,
    precoAnterior: null,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/prateleira-suspensa.svg',
      'images/produtos/prateleira-suspensa-2.svg',
      'images/produtos/prateleira-suspensa-3.svg',
    ],
    curto: 'Aproveita o espaço vertical e decora com livros, plantas e objetos.',
    descricao:
      'A Prateleira Suspensa para Parede aproveita o espaço vertical e dá um toque decorativo a qualquer divisão. Perfeita para livros, plantas, fotografias e objetos pessoais, combina funcionalidade com design. Instalação simples e resistente.',
    beneficios: [
      'Aproveita o espaço vertical da parede',
      'Suporta livros, plantas e objetos decorativos',
      'Acabamento neutro que combina com qualquer decoração',
      'Instalação simples com os acessórios incluídos',
      'Resistente e durável',
    ],
    comoFunciona: [
      { titulo: 'Escolhe o local', texto: 'Define a parede e a altura para a prateleira.' },
      { titulo: 'Fixa na parede', texto: 'Instala com os suportes e parafusos incluídos.' },
      { titulo: 'Decora', texto: 'Coloca livros, plantas e objetos decorativos.' },
    ],
    porqueEscolher: [
      'Liberta espaço em mesas e bancadas',
      'Dá personalidade às paredes',
      'Resistente para o uso diário',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'O que inclui para instalar?',
        r: 'Inclui os suportes e acessórios necessários para fixação na parede.',
      },
      {
        p: 'Suporta muito peso?',
        r: 'Sim, é projetada para suportar livros e objetos de peso moderado.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
  },

  {
    id: 'organizador-banheiro',
    nome: 'Organizador de Casa de Banho',
    categoria: 'Organização',
    preco: 31.9,
    precoAnterior: 37.9,
    desconto: null,
    destaque: false,
    bestseller: false,
    imagens: [
      'images/produtos/organizador-banheiro.svg',
      'images/produtos/organizador-banheiro-2.svg',
      'images/produtos/organizador-banheiro-3.svg',
    ],
    curto: 'Ordem na bancada da casa de banho com estilo e funcionalidade.',
    descricao:
      'O Organizador de Casa de Banho mantém a bancada e as prateleiras organizadas com escovas de dentes, produtos de higiene e acessórios. Os compartimentos dividem os objetos e o design resistente à água facilita a limpeza.',
    beneficios: [
      'Compartimentos para vários produtos de higiene',
      'Resistente à água e fácil de limpar',
      'Base estável e antiderrapante',
      'Design que organiza a bancada',
      'Fácil de transportar entre divisões',
    ],
    comoFunciona: [
      { titulo: 'Distribui', texto: 'Coloca os produtos de higiene nos compartimentos.' },
      { titulo: 'Posiciona', texto: 'Coloca na bancada ou prateleira da casa de banho.' },
      { titulo: 'Limpa', texto: 'Lava com água e sabão sempre que necessário.' },
    ],
    porqueEscolher: [
      'Acaba com a bancada desarrumada',
      'Resistente à humidade da casa de banho',
      'Peça funcional e elegante',
    ],
    disponibilidade: { texto: 'Em stock · pronto a enviar', nivel: 'stock' },
    faq: [
      {
        p: 'Resiste à água?',
        r: 'Sim, o material é resistente à água e fácil de limpar, ideal para a casa de banho.',
      },
      {
        p: 'Serve para a bancada?',
        r: 'Sim, é perfeito para organizar a bancada ou as prateleiras da casa de banho.',
      },
    ],
    kairosLink: 'COLOCAR_LINK_DA_KAIROS_AQUI',
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

function produtosDestaque() {
  return PRODUTOS.filter((p) => p.destaque);
}

function produtosBestsellers() {
  return PRODUTOS.filter((p) => p.bestseller);
}

function produtosRelacionados(produto, limite) {
  const mesmos = PRODUTOS.filter((p) => p.categoria === produto.categoria && p.id !== produto.id);
  const restantes = PRODUTOS.filter((p) => p.categoria !== produto.categoria && p.id !== produto.id);
  return [...mesmos, ...restantes].slice(0, limite || 3);
}
