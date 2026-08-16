/* ============================================================
   KRYON · Componentes de interface partilhados
   ============================================================ */

const ICONS = {
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6h15l-1.5 9h-12z"/><path d="M8 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><path d="M18 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><path d="M8 6l2-3h4l2 3"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
};

function preco(valor) {
  if (typeof valor !== 'number') return String(valor || '');
  return LOJA.simboloMoeda + ' ' + valor.toFixed(2).replace('.', ',');
}

function starsHTML(avaliacao) {
  let html = '';
  const rounded = Math.round(avaliacao * 2) / 2;
  for (let i = 1; i <= 5; i++) {
    const full = rounded >= i;
    const half = !full && rounded >= i - 0.5;
    html +=
      '<span class="' + (full ? '' : 'star-empty') + '">' +
      (half
        ? '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"/></svg>') +
      '</span>';
  }
  return '<span class="stars">' + html + '</span>';
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function productURL(id) {
  return 'produto.html?id=' + encodeURIComponent(id);
}

function renderProductCard(produto, extraClass) {
  const desc = calcularDesconto(produto);
  const isFav = favHas(produto.id);
  const tags = [];

  if (desc > 0) tags.push('<span class="tag tag-disc">-' + desc + '%</span>');
  if (produto.novidade) tags.push('<span class="tag tag-new">Novo</span>');

  return (
    '<article class="product-card reveal' + (extraClass ? ' ' + extraClass : '') + '">' +
    '<div class="product-card-media">' +
    '<a href="' + productURL(produto.id) + '" tabindex="-1" aria-hidden="true">' +
    '<img src="' + produto.imagens[0] + '" alt="' + esc(produto.nome) + '" loading="lazy" decoding="async" />' +
    '</a>' +
    '<div class="product-card-tags">' + tags.join('') + '</div>' +
    '<button class="product-fav' + (isFav ? ' active' : '') + '" data-fav="' + produto.id + '" aria-label="' + (isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos') + ': ' + esc(produto.nome) + '" type="button">' + ICONS.heart + '</button>' +
    '</div>' +
    '<div class="product-card-body">' +
    '<span class="product-card-cat">' + esc(produto.categoria) + '</span>' +
    '<a class="product-card-name" href="' + productURL(produto.id) + '">' + esc(produto.nome) + '</a>' +
    '<div class="product-card-rating">' +
    starsHTML(produto.avaliacao) +
    '<span>' + produto.avaliacao.toFixed(1).replace('.', ',') + ' (' + produto.avaliacoes + ')</span>' +
    '</div>' +
    '<div class="product-card-price">' +
    '<span class="price">' + preco(produto.preco) + '</span>' +
    (produto.precoAnterior && produto.precoAnterior > produto.preco
      ? '<span class="price-old">' + preco(produto.precoAnterior) + '</span>'
      : '') +
    (desc > 0 ? '<span class="price-save">Economize ' + preco(produto.precoAnterior - produto.preco) + '</span>' : '') +
    '</div>' +
    '<div class="product-card-actions">' +
    '<button class="card-add-btn" data-add-cart="' + produto.id + '" type="button">' + ICONS.cart + ' Adicionar</button>' +
    (produto.linkPagamento
      ? '<a class="card-buy-link" href="' + produto.linkPagamento + '" target="_blank" rel="noopener nofollow" data-buy-now="' + produto.id + '">Comprar agora</a>'
      : '<span class="card-buy-link" style="opacity:.55;cursor:not-allowed" title="Em breve">Em breve</span>') +
    '</div>' +
    '</div>' +
    '</article>'
  );
}

function renderFaq(container, itens) {
  if (!container || !itens || !itens.length) return;
  container.innerHTML = itens
    .map(function (item) {
      return (
        '<div class="faq-item">' +
        '<button class="faq-q" aria-expanded="false" type="button">' +
        esc(item.p) +
        '<span class="faq-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></span>' +
        '</button>' +
        '<div class="faq-a"><p>' + esc(item.r) + '</p></div>' +
        '</div>'
      );
    })
    .join('');

  container.querySelectorAll('.faq-item').forEach(function (item) {
    const btn = item.querySelector('.faq-q');
    const ans = item.querySelector('.faq-a');
    btn.addEventListener('click', function () {
      const open = item.classList.contains('open');
      container.querySelectorAll('.faq-item.open').forEach(function (el) {
        el.classList.remove('open');
        el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        el.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!open) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });
}

function renderAccordion(container) {
  if (!container) return;
  container.querySelectorAll('.accordion-item').forEach(function (item) {
    const trigger = item.querySelector('.accordion-trigger');
    const panel = item.querySelector('.accordion-panel');
    if (!trigger || !panel) return;
    trigger.addEventListener('click', function () {
      const open = item.classList.contains('open');
      container.querySelectorAll('.accordion-item.open').forEach(function (el) {
        el.classList.remove('open');
        el.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
        el.querySelector('.accordion-panel').style.maxHeight = null;
      });
      if (!open) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
}

function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) {
      el.classList.add('in');
    });
    return;
  }
  const io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach(function (el) {
    io.observe(el);
  });
}

function showToast(msg, icon) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerHTML = (icon ? ICONS[icon] || '' : '') + esc(msg);
  toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(function () {
    toast.classList.remove('show');
  }, 3200);
}

function initHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;
  const onScroll = function () {
    header.classList.toggle('scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  const close = document.getElementById('mobileMenuClose');
  if (!burger || !menu) return;

  function fechar() {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('locked');
    burger.setAttribute('aria-expanded', 'false');
  }

  burger.addEventListener('click', function () {
    const open = menu.classList.toggle('open');
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.classList.toggle('locked', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      menu.querySelectorAll('.mobile-menu-nav a').forEach(function (a, i) {
        a.style.transitionDelay = (0.05 + i * 0.04) + 's';
      });
    }
  });

  if (close) close.addEventListener('click', fechar);
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', fechar);
  });
}

function initFooter() {
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  const desc = document.getElementById('footerDesc');
  if (desc) desc.textContent = LOJA.footerDescricao;

  const wrap = document.getElementById('footerCats');
  if (wrap) {
    const cats = [];
    PRODUTOS.forEach(function (p) {
      if (cats.indexOf(p.categoria) === -1) cats.push(p.categoria);
    });
    wrap.innerHTML = cats
      .map(function (c) {
        return '<li><a href="index.html#categorias">' + esc(c) + '</a></li>';
      })
      .join('');
  }
}

function initMobileMenuCats() {
  const wrap = document.getElementById('mobileMenuCats');
  if (!wrap) return;
  const cats = ['Ver todos'];
  PRODUTOS.forEach(function (p) {
    if (cats.indexOf(p.categoria) === -1) cats.push(p.categoria);
  });
  const isIndex = /(^|\/)index\.html?($|\?)/.test(window.location.pathname) || window.location.pathname === '/' || window.location.pathname === '/index.html';
  const base = isIndex ? '' : 'index.html';
  wrap.innerHTML = cats
    .map(function (c) {
      return '<a href="' + base + '#categorias">' + esc(c) + '</a>';
    })
    .join('');
}

function initBackTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;
  window.addEventListener(
    'scroll',
    function () {
      btn.classList.toggle('show', window.scrollY > 600);
    },
    { passive: true }
  );
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initMarquee() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;
  track.innerHTML += track.innerHTML;
}

function initShared() {
  initHeader();
  initMobileMenu();
  initFooter();
  initMobileMenuCats();
  initBackTop();
  initMarquee();
  initSearch();
}
