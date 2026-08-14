/* ============================================================
   NEXORA · Produtos & Ofertas Online — Página inicial
   Pesquisa, filtros por categoria, ordenação e ofertas
   ============================================================ */

const MAX_PRODUTOS = 44;

const estadoCatalogo = {
  categoria: 'Todos',
  ordenacao: 'todos',
  busca: ''
};

/* ---------- Pesquisa ---------- */
function normalizarTexto(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function filtrarPorBusca(query) {
  const q = normalizarTexto(query);
  if (!q) return PRODUTOS.slice();
  return PRODUTOS.filter(function (p) {
    const texto = [p.nome, p.categoria, p.curto, p.descricao]
      .concat(p.beneficios || [])
      .join(' ')
    return normalizarTexto(texto).indexOf(q) !== -1;
  });
}

function gridAtual() {
  const grid = document.getElementById('gridProdutos');
  if (!grid) return;

  let lista;
  if (estadoCatalogo.busca) {
    lista = filtrarPorBusca(estadoCatalogo.busca);
  } else {
    lista =
      estadoCatalogo.categoria === 'Todos'
        ? PRODUTOS.slice()
        : PRODUTOS.filter(function (p) {
            return p.categoria === estadoCatalogo.categoria;
          });
  }

  if (estadoCatalogo.ordenacao === 'preco-asc') {
    lista.sort(function (a, b) {
      return a.preco - b.preco;
    });
  } else if (estadoCatalogo.ordenacao === 'preco-desc') {
    lista.sort(function (a, b) {
      return b.preco - a.preco;
    });
  } else if (estadoCatalogo.ordenacao === 'ofertas') {
    lista = lista
      .filter(function (p) {
        return calcularDesconto(p) > 0;
      })
      .sort(function (a, b) {
        return calcularDesconto(b) - calcularDesconto(a);
      });
  }

  grid.innerHTML =
    lista
      .slice(0, MAX_PRODUTOS)
      .map(renderProdCard)
      .join('') ||
    '<p class="grid-empty">Nenhum produto encontrado nesta pesquisa.</p>';
  initReveal();
}

function performSearch(query) {
  estadoCatalogo.busca = (query || '').trim();

  const input = document.getElementById('productSearch');
  if (input) input.value = estadoCatalogo.busca;

  const countEl = document.getElementById('searchCount');
  if (countEl) {
    const n = estadoCatalogo.busca ? filtrarPorBusca(estadoCatalogo.busca).length : PRODUTOS.length;
    countEl.textContent = estadoCatalogo.busca
      ? n + (n === 1 ? ' produto encontrado' : ' produtos encontrados')
      : '';
  }

  const emptyEl = document.getElementById('searchEmpty');
  if (emptyEl) {
    emptyEl.hidden = !(estadoCatalogo.busca && filtrarPorBusca(estadoCatalogo.busca).length === 0);
  }

  gridAtual();
}

function NEXORA_search(query) {
  performSearch(query || '');
  const sec = document.getElementById('ofertas');
  if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---------- Categorias ---------- */
function setCategoria(cat) {
  estadoCatalogo.categoria = cat || 'Todos';
  estadoCatalogo.ordenacao = 'todos';
  estadoCatalogo.busca = '';

  const input = document.getElementById('productSearch');
  if (input) input.value = '';

  const countEl = document.getElementById('searchCount');
  if (countEl) countEl.textContent = '';

  const emptyEl = document.getElementById('searchEmpty');
  if (emptyEl) emptyEl.hidden = true;

  document.querySelectorAll('#catFilter .cat-pill').forEach(function (b) {
    b.classList.toggle('active', b.getAttribute('data-cat') === estadoCatalogo.categoria);
  });
  document.querySelectorAll('#headerCats a').forEach(function (a) {
    a.classList.toggle('active', a.getAttribute('data-cat') === estadoCatalogo.categoria);
  });
  document.querySelectorAll('#sortBar .sort-btn').forEach(function (b) {
    b.classList.toggle('active', b.getAttribute('data-sort') === 'todos');
  });

  gridAtual();
}

function initCategoryFilter() {
  const wrap = document.getElementById('catFilter');
  if (!wrap) return;

  const cats = ['Todos'];
  PRODUTOS.forEach(function (p) {
    if (cats.indexOf(p.categoria) === -1) cats.push(p.categoria);
  });

  wrap.innerHTML = cats
    .map(function (c) {
      return (
        '<button type="button" class="cat-pill' + (c === estadoCatalogo.categoria ? ' active' : '') + '" data-cat="' + c + '">' +
        c +
        '</button>'
      );
    })
    .join('');

  wrap.querySelectorAll('.cat-pill').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setCategoria(btn.getAttribute('data-cat'));
    });
  });
}

/* ---------- Ordenação ---------- */
function initSortBar() {
  const wrap = document.getElementById('sortBar');
  if (!wrap) return;

  const opcoes = [
    { v: 'todos', t: 'Todos' },
    { v: 'preco-asc', t: 'Menor preço' },
    { v: 'preco-desc', t: 'Maior preço' },
    { v: 'ofertas', t: 'Ofertas' }
  ];

  wrap.innerHTML = opcoes
    .map(function (o) {
      return (
        '<button type="button" class="sort-btn' + (o.v === estadoCatalogo.ordenacao ? ' active' : '') + '" data-sort="' + o.v + '">' + o.t + '</button>'
      );
    })
    .join('');

  wrap.querySelectorAll('.sort-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      estadoCatalogo.ordenacao = btn.getAttribute('data-sort');
      wrap.querySelectorAll('.sort-btn').forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      gridAtual();
    });
  });
}

/* ---------- Pesquisa na secção de produtos ---------- */
function initProductSearch() {
  const input = document.getElementById('productSearch');
  if (!input) return;

  input.addEventListener('input', function () {
    performSearch(input.value);
  });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      input.value = '';
      performSearch('');
      input.blur();
    }
  });

  const form = input.closest('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      performSearch(input.value);
    });
  }
}

/* ---------- Ofertas NEXORA ---------- */
function renderDealCard(produto) {
  const url = 'produto.html?id=' + encodeURIComponent(produto.id);
  const desc = calcularDesconto(produto);
  const moeda = LOJA.simboloMoeda || 'R$';

  return (
    '<article class="deal-card reveal">' +
    '<a class="deal-media" href="' + url + '" aria-label="Ver oferta: ' + produto.nome + '">' +
    '<img src="' + produto.imagens[0] + '" alt="' + produto.nome + '" loading="lazy" decoding="async" onerror="this.onerror=null;this.src=\'images/produtos/hero-nexora.svg\';" />' +
    '<span class="deal-tag">-' + desc + '%</span>' +
    '</a>' +
    '<div class="deal-body">' +
    '<a href="' + url + '"><h3 class="deal-title">' + produto.nome + '</h3></a>' +
    '<div class="deal-price">' +
    '<span class="price">' + moeda + ' ' + produto.preco.toFixed(2).replace('.', ',') + '</span>' +
    (produto.precoAnterior ? '<span class="old">' + moeda + ' ' + produto.precoAnterior.toFixed(2).replace('.', ',') + '</span>' : '') +
    '</div>' +
    '<a href="' + produto.kairosLink + '" class="btn btn-accent btn-sm" target="_blank" rel="noopener nofollow" data-kairos>Comprar agora</a>' +
    '</div>' +
    '</article>'
  );
}

function renderOfertasNexora() {
  const grid = document.getElementById('gridOfertas');
  if (!grid) return;

  const ofertas = PRODUTOS.filter(function (p) {
    return calcularDesconto(p) > 0;
  })
    .sort(function (a, b) {
      return calcularDesconto(b) - calcularDesconto(a);
    })
    .slice(0, 8);

  grid.innerHTML =
    ofertas.map(renderDealCard).join('') || '<p class="grid-empty">Novas ofertas em breve.</p>';
  initReveal();
}

/* ---------- Parâmetros do URL (?cat= / ?q=) ---------- */
function aplicarParams() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  const q = params.get('q');

  if (cat) {
    if (cat === 'ofertas') {
      estadoCatalogo.ordenacao = 'ofertas';
    } else if (cat !== 'Todos') {
      estadoCatalogo.categoria = cat;
    }
  }
  if (q) {
    estadoCatalogo.busca = q.trim();
  }
}

function renderHomeGrids() {
  aplicarParams();
  initCategoryFilter();
  initSortBar();
  initProductSearch();
  renderOfertasNexora();
  initReveal();

  const input = document.getElementById('productSearch');
  if (estadoCatalogo.busca) {
    if (input) input.value = estadoCatalogo.busca;
    performSearch(estadoCatalogo.busca);
  }
  gridAtual();

  document.querySelectorAll('#headerCats a').forEach(function (a) {
    a.classList.toggle('active', a.getAttribute('data-cat') === estadoCatalogo.categoria);
  });
}

function renderHomeFaq() {
  const faq = [
    {
      p: 'Como é feito o pagamento?',
      r: 'Ao clicar em "Comprar agora", é redirecionado para uma página de pagamento segura, onde conclui a compra. O pagamento é processado integralmente nessa plataforma — nunca pedimos dados bancários diretamente.',
    },
    {
      p: 'Preciso de criar uma conta para comprar?',
      r: 'Não. A compra é feita de forma simples, sem registos nem contas. Escolhe o produto, paga com segurança e recebe a encomenda.',
    },
    {
      p: 'Como acompanho a minha encomenda?',
      r: 'Depois da compra, recebe informação sobre o estado da encomenda para a poder acompanhar até à entrega.',
    },
    {
      p: 'Quanto tempo demora a entrega?',
      r: 'O prazo de entrega depende da sua localização e do produto. Esta informação é sempre indicada no momento da compra.',
    },
    {
      p: 'Posso devolver um produto?',
      r: 'As condições de devolução são apresentadas na página de compra. Se tiver alguma questão, contacte-nos por e-mail.',
    },
  ];
  renderFaq(document.getElementById('faqHome'), faq);
}

document.addEventListener('DOMContentLoaded', function () {
  initSite();
  renderHomeGrids();
  renderHomeFaq();
  initMarquee();
});
