/* ============================================================
   MAXIMIANO · Casa & Lifestyle — Página inicial
   Pesquisa + limite visual de 34 produtos
   ============================================================ */

const MAX_PRODUTOS = 34;

function renderHomeGrids() {
  const dest = document.getElementById('gridDestaques');
  const best = document.getElementById('gridBestsellers');

  const destaque = produtosDestaque().slice(0, MAX_PRODUTOS);
  const bestseller = produtosBestsellers().slice(0, MAX_PRODUTOS);

  if (dest) {
    dest.innerHTML = destaque.map(renderProdCard).join('') ||
      '<p style="grid-column:1/-1;color:var(--ink-soft)">Em breve.</p>';
  }

  if (best) {
    best.innerHTML = bestseller.map(renderProdCard).join('') ||
      '<p style="grid-column:1/-1;color:var(--ink-soft)">Em breve.</p>';
  }

  initProductSearch();
  initReveal();
}

function initProductSearch() {
  const input = document.getElementById('productSearch');
  const results = document.getElementById('searchResults');
  const count = document.getElementById('searchCount');
  const empty = document.getElementById('searchEmpty');
  if (!input || !results) return;

  let lastQuery = '';

  function search() {
    const query = input.value.trim().toLocaleLowerCase('pt-PT');
    lastQuery = query;

    if (!query) {
      results.innerHTML = '';
      results.classList.remove('active');
      if (count) count.textContent = '';
      if (empty) empty.hidden = true;
      return;
    }

    const encontrados = PRODUTOS.filter((p) => {
      const texto = [p.nome, p.categoria, p.curto, p.descricao].join(' ').toLocaleLowerCase('pt-PT');
      return texto.includes(query);
    }).slice(0, MAX_PRODUTOS);

    results.classList.add('active');
    if (count) count.textContent = encontrados.length + (encontrados.length === 1 ? ' produto encontrado' : ' produtos encontrados');

    if (!encontrados.length) {
      results.innerHTML = '';
      if (empty) empty.hidden = false;
      return;
    }

    if (empty) empty.hidden = true;
    results.innerHTML = encontrados.map(renderProdCard).join('');
    initReveal();
  }

  input.addEventListener('input', search);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      input.value = '';
      search();
      input.blur();
    }
  });

  const form = input.closest('form');
  if (form) form.addEventListener('submit', function (e) { e.preventDefault(); search(); });
}

function renderHomeFaq() {
  const faq = [
    {
      p: 'Como é feito o pagamento?',
      r: 'Ao clicares em "Comprar agora", és redirecionado para uma página de pagamento segura, onde concluis a compra. O pagamento é processado integralmente nessa plataforma — nunca pedimos dados de cartão neste site.',
    },
    {
      p: 'Preciso de criar uma conta para comprar?',
      r: 'Não. A compra é feita de forma simples, sem registos nem contas. Escolhes o produto, pagas com segurança e recebes a encomenda.',
    },
    {
      p: 'Como acompanho a minha encomenda?',
      r: 'Depois da compra, recebes informação sobre o estado da encomenda para a poderes acompanhar até à entrega.',
    },
    {
      p: 'Quanto tempo demora a entrega?',
      r: 'O prazo de entrega depende da tua localização e do produto. Esta informação é sempre indicada no momento da compra.',
    },
    {
      p: 'Posso devolver um produto?',
      r: 'As condições de devolução são apresentadas na página de compra. Se tiveres alguma questão, contacta-nos por e-mail.',
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
