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
   - bestseller      true  → aparece em "Os mais vendidos"
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
      'images/produtos/luminaria-solar-jardim.jpg',
      'images/produtos/luminaria-solar-jardim-2.jpg',
      'images/produtos/luminaria-solar-jardim-3.jpg',
      'images/produtos/luminaria-solar-jardim-4.jpg',
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
