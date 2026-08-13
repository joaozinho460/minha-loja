/* ============================================================
    MAXIMIANO · Casa & Lifestyle — Componentes partilhados
    (não é preciso alterar este ficheiro)
    ============================================================ */

const KAIROS_PLACEHOLDER = 'COLOCAR_LINK_DA_KAIROS_AQUI';

function isKairosPlaceholder(link) {
  return !link || link === KAIROS_PLACEHOLDER;
}

/* ---------- Preço ---------- */
function precoHTML(produto) {
  const desc = calcularDesconto(produto);
  const moeda = LOJA.simboloMoeda || '€';
  
  let html = '<span class="price">' + moeda + ' ' + (typeof produto.preco === 'number' ? produto.preco.toFixed(2).replace('.', ',') : produto.preco) + '</span>';
  if (produto.precoAnterior && produto.precoAnterior > produto.preco) {
    html += ' <span class="old">' + moeda + ' ' + (typeof produto.precoAnterior === 'number' ? produto.precoAnterior.toFixed(2).replace('.', ',') : produto.precoAnterior) + '</span>';
  }
  if (desc > 0) html += ' <span class="badge badge-disc">-' + desc + '%</span>';
  return html;
}

/* ---------- Disponibilidade ---------- */
function stockHTML(produto) {
  const n = produto.disponibilidade || { texto: 'Em stock', nivel: 'stock' };
  const classes = { stock: 'stock', baixo: 'baixo', esgotado: 'esgotado' };
  const texto = n.texto || (n.nivel === 'esgotado' ? 'Esgotado' : 'Em stock');
  return (
    '<span class="stock-line">' +
    '<i class="stock-dot ' + (classes[n.nivel] || 'stock') + '"></i>' +
    texto +
    '</span>'
  );
}

/* ---------- Card de produto ---------- */
function renderProdCard(produto, i) {
  const url = 'produto.html?id=' + encodeURIComponent(produto.id);
  const desc = calcularDesconto(produto);
  const delay = i % 4;

  return (
    '<article class="card reveal d' + delay + '">' +
    '<a class="card-media" href="' + url + '" aria-label="Ver ' + produto.nome + '">' +
    '<img src="' + produto.imagens[0] + '" alt="' + produto.nome + '" loading="lazy" onerror="this.onerror=null;this.src=\'images/produtos/hero-maximiano.svg\';" />' +
    '<div class="card-badges">' +
    (desc > 0 ? '<span class="badge badge-disc">-' + desc + '%</span>' : '') +
    '<span class="badge badge-cat">' + produto.categoria + '</span>' +
    '</div>' +
    '</a>' +
    '<div class="card-body">' +
    '<span class="card-cat">' + produto.categoria + '</span>' +
    '<a href="' + url + '"><h3 class="card-title">' + produto.nome + '</h3></a>' +
    '<div class="card-price">' + precoHTML(produto) + '</div>' +
    stockHTML(produto) +
    '<div class="card-cta">' +
    '<a href="' + url + '" class="btn btn-ghost btn-sm">Ver produto</a>' +
    '<a href="' + produto.kairosLink + '" class="btn btn-accent btn-sm" target="_blank" rel="noopener nofollow" data-kairos>Comprar agora</a>' +
    '</div>' +
    '</div>' +
    '</article>'
  );
}

/* ---------- FAQ (accordion) ---------- */
function renderFaq(container, itens) {
  if (!container || !itens || !itens.length) return;
  container.innerHTML = itens
    .map(
      function (item, i) {
        return (
          '<div class="faq-item">' +
          '<button class="faq-q" aria-expanded="false">' +
          item.p +
          '<span class="faq-chev">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>' +
          '</span>' +
          '</button>' +
          '<div class="faq-a"><p>' + item.r + '</p></div>' +
          '</div>'
        );
      }
    )
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

/* ---------- Menu mobile ---------- */
function initMobileMenu() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return;

  burger.addEventListener('click', function () {
    const open = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ---------- Header scrolled ---------- */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  const onScroll = function () {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- Reveal on scroll ---------- */
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
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach(function (el) {
    io.observe(el);
  });
}

/* ---------- Back to top ---------- */
function initBackTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;
  window.addEventListener(
    'scroll',
    function () {
      btn.classList.toggle('show', window.scrollY > 500);
    },
    { passive: true }
  );
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Footer ---------- */
function initFooter() {
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  const desc = document.getElementById('footerDesc');
  if (desc) desc.textContent = LOJA.footerDescricao;

  const contato = document.getElementById('footerContact');
  if (contato) {
    let html = '';
    if (LOJA.email) {
      html +=
        '<li><a href="mailto:' + LOJA.email + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7M2 7v12a2 2 0 002 2h16a2 2 0 002-2V7"/></svg>' +
        LOJA.email +
        '</a></li>';
    }
    if (LOJA.instagram && LOJA.instagram !== '#') {
      html +=
        '<li><a href="' + LOJA.instagram + '" target="_blank" rel="noopener nofollow">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="3"/><path d="M17 7h.01"/></svg>' +
        'Instagram</a></li>';
    }
    contato.innerHTML = html || '<li>Contacta-nos pelo e-mail da loja</li>';
  }
}

/* ---------- Marquees ---------- */
function initMarquee() {
  const list = document.getElementById('marqueeList');
  if (!list) return;
  list.innerHTML += list.innerHTML;
}

/* ---------- Tratamento do clique Comprar (link Kairos) ---------- */
function initKairosLinks() {
  document.addEventListener('click', function (e) {
    const link = e.target.closest('[data-kairos]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (isKairosPlaceholder(href)) {
      e.preventDefault();
      showToast('Falta colocar o link da Kairos em js/produtos.js (campo kairosLink).');
    }
  });
}

/* ---------- Toast ---------- */
let toastTimer = null;
function showToast(msg) {
  let toast = document.getElementById('toastMsg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastMsg';
    toast.style.cssText =
      'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#1f1d1a;color:#fff;' +
      'padding:14px 22px;border-radius:12px;font-size:14px;font-weight:600;z-index:99;' +
      'box-shadow:0 16px 40px rgba(0,0,0,.3);max-width:90vw;text-align:center;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.display = 'block';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.style.display = 'none';
  }, 4200);
}

/* ---------- Init comum a todas as páginas ---------- */
function initSite() {
  initMobileMenu();
  initHeader();
  initReveal();
  initBackTop();
  initFooter();
  initKairosLinks();
}
