/* ============================================================
   MAXIMIANO · Casa & Lifestyle
   ------------------------------------------------------------
   DADOS DA LOJA E DOS PRODUTOS
   ------------------------------------------------------------
   Loja configurada para o Brasil.
   ============================================================ */

const LOJA = {
  nome: 'MAXIMIANO',
  tagline: 'Casa & Lifestyle',
  logo: 'MAXIMIANO',

  whatsapp: '',
  email: 'ola@maximiano.com.br',

  instagram: '#',
  facebook: '#',
  tiktok: '#',

  moeda: 'BRL',
  simboloMoeda: 'R$',

  footerDescricao:
    'Produtos selecionados para tornar a tua casa mais confortável, bonita e funcional. Compra simples, segura e acompanhada.',
};


/* ============================================================
   PRODUTOS
   ============================================================ */

const PRODUTOS = [

  /* ==========================================================
     PRODUTO 01 · LUMINÁRIA SOLAR
     ========================================================== */

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
      'images/produtos/luminaria-solar-jardim-3.jpg'
    ],

    curto:
      'Ilumine o seu jardim, varanda ou entrada com uma luminária solar elegante, sem fios e sem gastar energia.',

    descricao:
      'A Luminária Solar de Parede para Jardim é uma solução prática e elegante para iluminar áreas externas da sua casa. Com iluminação direcionada para cima e para baixo, cria um efeito moderno na parede e ajuda a deixar jardins, varandas, entradas e corredores externos mais bonitos e iluminados.',

    beneficios: [
      'Funcionamento alimentado por energia solar',
      'Não precisa de fios ou ligação elétrica',
      'Iluminação para cima e para baixo',
      'Ideal para jardins, varandas, entradas e áreas externas',
      'Design moderno que combina com diferentes ambientes',
      'Instalação simples na parede'
    ],

    comoFunciona: [

      {
        titulo: 'Instale na parede',

        texto:
          'Escolha um local externo adequado e fixe a luminária na parede.'
      },

      {
        titulo: 'Deixe carregar durante o dia',

        texto:
          'O painel solar aproveita a luz do sol para carregar a bateria interna.'
      },

      {
        titulo: 'Aproveite à noite',

        texto:
          'Após o carregamento, a luminária utiliza a energia armazenada para iluminar o ambiente.'
      }

    ],

    porqueEscolher: [

      'Ajuda a iluminar áreas externas sem precisar de uma tomada',

      'Visual moderno com iluminação direcionada para cima e para baixo',

      'Pode ser utilizada em diferentes espaços externos',

      'Uma forma simples de valorizar a aparência da sua casa'

    ],

    disponibilidade: {
      texto: 'Em estoque · pronto para envio',
      nivel: 'stock'
    },

    faq: [

      {
        p: 'A luminária precisa ser ligada na tomada?',

        r:
          'Não. O produto utiliza energia solar e possui bateria interna.'
      },

      {
        p: 'Onde posso instalar?',

        r:
          'Pode ser utilizada em áreas externas como jardins, varandas, entradas, muros e corredores.'
      },

      {
        p: 'Ela possui iluminação para cima e para baixo?',

        r:
          'Sim. O modelo foi desenvolvido para criar iluminação direcionada para cima e para baixo.'
      },

      {
        p: 'Quanto custa?',

        r:
          'O preço atual é de R$ 104,00. O preço anterior informado no checkout é de R$ 119,60.'
      },

      {
        p: 'Qual é o prazo de entrega?',

        r:
          'O checkout informa prazo de entrega de 7 a 15 dias úteis após a confirmação do pagamento.'
      }

    ],

    kairosLink:
      'https://pay.kaiross.com.br/HGRkX1GgMKmU'
  }

];


/* ============================================================
   FUNÇÕES AUXILIARES
   ============================================================ */


/**
 * Formata preços para Real brasileiro.
 *
 * Exemplo:
 * 104 -> R$ 104,00
 */
function formatarPreco(valor) {

  if (valor === null || valor === undefined || valor === '') {
    return 'R$ 0,00';
  }

  if (typeof valor === 'number') {

    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

  }

  return String(valor);
}


/**
 * Calcula automaticamente o desconto.
 */
function calcularDesconto(produto) {

  if (
    produto.desconto !== null &&
    produto.desconto !== undefined
  ) {
    return produto.desconto;
  }

  if (
    produto.precoAnterior &&
    produto.precoAnterior > produto.preco
  ) {

    return Math.round(
      (1 - produto.preco / produto.precoAnterior) * 100
    );

  }

  return 0;
}


/**
 * Procura um produto pelo ID.
 */
function produtoPorId(id) {

  if (!id) {
    return null;
  }

  return PRODUTOS.find(function (produto) {

    return produto.id === id;

  }) || null;
}


/**
 * Produtos marcados como destaque.
 */
function produtosDestaque() {

  return PRODUTOS.filter(function (produto) {

    return produto.destaque === true;

  });

}


/**
 * Produtos marcados como mais vendidos.
 */
function produtosBestsellers() {

  return PRODUTOS.filter(function (produto) {

    return produto.bestseller === true;

  });

}


/**
 * Produtos relacionados.
 */
function produtosRelacionados(produto, limite) {

  if (!produto) {
    return [];
  }

  const quantidade = limite || 3;

  const mesmos = PRODUTOS.filter(function (p) {

    return (
      p.categoria === produto.categoria &&
      p.id !== produto.id
    );

  });

  const restantes = PRODUTOS.filter(function (p) {

    return (
      p.categoria !== produto.categoria &&
      p.id !== produto.id
    );

  });

  return [...mesmos, ...restantes].slice(0, quantidade);

}


/**
 * Todas as categorias disponíveis.
 */
function categoriasProdutos() {

  return [
    ...new Set(
      PRODUTOS.map(function (produto) {

        return produto.categoria;

      })
    )
  ];

}


/**
 * Pesquisa produtos pelo nome, categoria
 * ou descrição.
 */
function pesquisarProdutos(termo) {

  if (!termo) {
    return PRODUTOS;
  }

  const pesquisa = termo
    .toLowerCase()
    .trim();

  if (!pesquisa) {
    return PRODUTOS;
  }

  return PRODUTOS.filter(function (produto) {

    const texto = [

      produto.nome,

      produto.categoria,

      produto.curto,

      produto.descricao,

      ...(produto.beneficios || [])

    ]
      .join(' ')
      .toLowerCase();

    return texto.includes(pesquisa);

  });

}