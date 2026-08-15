/* ============================================================
   KRYON · Página inicial
   ============================================================ */

const CATEGORIES = [
  { nome: 'Tecnologia', icon: 'tech' },
  { nome: 'Casa', icon: 'casa' },
  { nome: 'Gadgets', icon: 'gadget' },
  { nome: 'Acessórios', icon: 'acessorio' },
  { nome: 'Iluminação', icon: 'lamp' },
  { nome: 'Fitness', icon: 'fitness' },
  { nome: 'Lifestyle', icon: 'life' },
];

const CAT_ICONS = {
  tech: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="12" rx="2"/><path d="M9 20h6M12 16v4"/></svg>',
  casa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9h14v-9"/><path d="M10 19v-5h4v5"/></svg>',
  gadget: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/></svg>',
  acessorio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/></svg>',
  lamp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 21h4"/><path d="M12 18a6 6 0 0 0 6-6 6 6 0 0 0-12 0 6 6 0 0 0 6 6z"/><path d="M12 12v6"/></svg>',
  fitness: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 5v14M18 5v14M4 9v6M20 9v6M6 12h12"/></svg>',
  life: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10z"/><path d="M9.5 11a2.5 2.5 0 0 1 5 0"/></svg>',
  all: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
};

function renderCategorias() {
  const grid = document.getElementById('catGrid');
  if (!grid) return;

  const items = [{ nome: 'Ver todos', icon: 'all' }].concat(CATEGORIES);
  grid.innerHTML = items
    .map(function (cat, i) {
      return (
        '<a class="cat-card reveal d' + (i % 4) + '" href="#destaques" data-cat="' + cat.nome + '">' +
        '<span class="cat-icon">' + (CAT_ICONS[cat.icon] || '') + '</span>' +
        '<span>' + cat.nome + '</span>' +
        '</a>'
      );
    })
    .join('');

  grid.querySelectorAll('[data-cat]').forEach(function (card) {
    card.addEventListener('click', function (e) {
      e.preventDefault();
      const cat = card.getAttribute('data-cat');
      if (typeof KRYON_filterCategory === 'function') {
        KRYON_filterCategory(cat);
      } else {
        window.location.href = 'index.html#destaques';
      }
    });
  });

  const seeAll = document.getElementById('catSeeAll');
  if (seeAll) {
    seeAll.addEventListener('click', function (e) {
      e.preventDefault();
      if (typeof KRYON_filterCategory === 'function') {
        KRYON_filterCategory('Ver todos');
      } else {
        window.location.href = 'index.html#destaques';
      }
    });
  }
}

function renderGrids() {
  const destaques = document.getElementById('gridDestaques');
  if (destaques) {
    destaques.innerHTML = PRODUTOS.filter(function (p) {
      return p.destaque;
    })
      .slice(0, 8)
      .map(function (p, i) {
        return renderProductCard(p, 'd' + (i % 4));
      })
      .join('');
  }

  const ofertas = document.getElementById('gridOfertas');
  if (ofertas) {
    ofertas.innerHTML = PRODUTOS.filter(function (p) {
      return calcularDesconto(p) > 0;
    })
      .sort(function (a, b) {
        return calcularDesconto(b) - calcularDesconto(a);
      })
      .slice(0, 4)
      .map(function (p, i) {
        return renderProductCard(p, 'd' + (i % 4));
      })
      .join('');
  }
}

function renderHomeFaq() {
  const faq = [
    {
      p: 'Como funciona o pagamento?',
      r: 'Ao clicar em “Comprar agora”, você é redirecionado para uma página de pagamento segura, onde conclui a compra. O pagamento é processado integralmente nessa plataforma — nunca pedimos seus dados bancários.',
    },
    {
      p: 'Preciso criar uma conta para comprar?',
      r: 'Não. A compra é feita de forma simples, sem cadastro. Escolha o produto, pague com segurança e receba a encomenda.',
    },
    {
      p: 'Como acompanho minha encomenda?',
      r: 'Depois da compra, você recebe informações sobre o status da encomenda para acompanhar até a entrega.',
    },
    {
      p: 'Quanto tempo demora a entrega?',
      r: 'O prazo de entrega depende da sua localização e do produto, normalmente de 7 a 15 dias úteis após a confirmação do pagamento.',
    },
    {
      p: 'Posso devolver um produto?',
      r: 'As condições de troca e devolução são apresentadas no momento da compra. Se tiver qualquer dúvida, fale com a gente pelo e-mail de atendimento.',
    },
    {
      p: 'Os produtos têm garantia?',
      r: 'Cada produto possui as condições descritas na página de pagamento. Qualidade e curadoria são o que nos move.',
    },
  ];
  renderFaq(document.getElementById('faqWrap'), faq);
}

function KRYON_filterCategory(cat) {
  const section = document.getElementById('destaques');
  const title = section.querySelector('.section-title');
  const grid = document.getElementById('gridDestaques');

  const verTodos = cat === 'Ver todos';
  const lista = verTodos
    ? PRODUTOS.slice()
    : PRODUTOS.filter(function (p) {
        return p.categoria === cat;
      });

  const produtos = verTodos ? lista : lista.slice(0, 8);

  grid.innerHTML = (produtos.length
    ? produtos
    : PRODUTOS.filter(function (p) {
        return p.destaque;
      }).slice(0, 8)
  )
    .map(function (p, i) {
      return renderProductCard(p, 'd' + (i % 4));
    })
    .join('');

  if (title) {
    title.textContent = verTodos ? 'Todos os produtos' : lista.length ? cat : 'Produtos em destaque';
  }

  document.querySelectorAll('#catGrid [data-cat]').forEach(function (card) {
    card.classList.toggle('cat-active', card.getAttribute('data-cat') === cat);
  });

  initReveal();
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    showToast('Obrigado! Você está dentro do universo KRYON.', 'check');
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initShared();
  initCart();
  renderCategorias();
  renderGrids();
  renderHomeFaq();
  initNewsletter();
  initReveal();
});
