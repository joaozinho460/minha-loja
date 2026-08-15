/* ============================================================
   KRYON · Carrinho, favoritos e pesquisa (localStorage)
   Sem backend. Carrinho SEMPRE em lista vertical.
   ============================================================ */

const CART_KEY = 'kryon_carrinho_v1';
const FAV_KEY = 'kryon_favoritos_v1';

/* ---------- Carrinho ---------- */

function cartGet() {
  let items = [];
  try {
    items = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    items = [];
  }
  if (!Array.isArray(items)) items = [];
  const validos = items.filter(function (it) {
    return it && it.id && produtoPorId(it.id);
  });
  if (validos.length !== items.length) {
    cartSave(validos);
    items = validos;
  }
  return items;
}

function cartSave(items) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  } catch (e) {}
}

function cartCount() {
  return cartGet().reduce(function (acc, it) {
    return acc + (parseInt(it.qtd, 10) || 1);
  }, 0);
}

function cartSubtotal() {
  let total = 0;
  cartGet().forEach(function (it) {
    const p = produtoPorId(it.id);
    if (p) total += p.preco * (parseInt(it.qtd, 10) || 1);
  });
  return total;
}

function cartAdd(id, qtd) {
  const items = cartGet();
  const found = items.filter(function (it) {
    return it.id === id;
  })[0];
  if (found) {
    found.qtd = (parseInt(found.qtd, 10) || 1) + (qtd || 1);
  } else {
    items.push({ id: id, qtd: qtd || 1 });
  }
  cartSave(items);
  updateCartBadge();
  renderCartDrawer();
}

function cartSetQty(id, qtd) {
  qtd = parseInt(qtd, 10);
  if (!qtd || qtd < 1) qtd = 1;
  if (qtd > 99) qtd = 99;
  const items = cartGet();
  items.forEach(function (it) {
    if (it.id === id) it.qtd = qtd;
  });
  cartSave(items);
  updateCartBadge();
  renderCartDrawer();
}

function cartRemove(id) {
  cartSave(cartGet().filter(function (it) {
    return it.id !== id;
  }));
  updateCartBadge();
  renderCartDrawer();
}

/* ---------- Favoritos ---------- */

function favGet() {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function favSave(list) {
  try {
    localStorage.setItem(FAV_KEY, JSON.stringify(list));
  } catch (e) {}
}

function favHas(id) {
  return favGet().indexOf(id) !== -1;
}

function favToggle(id) {
  const list = favGet();
  const idx = list.indexOf(id);
  if (idx === -1) {
    list.push(id);
  } else {
    list.splice(idx, 1);
  }
  favSave(list);
  updateFavBadge();
  renderFavDrawer();
  syncFavButtons();
  return idx === -1;
}

/* ---------- Badges ---------- */

function updateCartBadge() {
  const badge = document.getElementById('cartCount');
  const count = cartCount();
  if (badge) {
    badge.hidden = count === 0;
    badge.textContent = count > 99 ? '99+' : String(count);
  }
  const txt = document.getElementById('cartCountText');
  const n = cartGet().length;
  if (txt) txt.textContent = n > 0 ? '· ' + n + ' item' + (n > 1 ? 's' : '') : '';
}

function updateFavBadge() {
  const badge = document.getElementById('favCount');
  const n = favGet().length;
  if (badge) {
    badge.hidden = n === 0;
    badge.textContent = n > 99 ? '99+' : String(n);
  }
  const txt = document.getElementById('favCountText');
  if (txt) txt.textContent = n > 0 ? '· ' + n + ' item' + (n > 1 ? 's' : '') : '';
}

/* ---------- Drawers ---------- */

function openDrawer(id) {
  const drawer = document.getElementById(id);
  const overlay = document.getElementById(id === 'cartDrawer' ? 'cartOverlay' : 'favOverlay');
  if (drawer) {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
  }
  if (overlay) overlay.classList.add('open');
  document.body.classList.add('locked');
}

function closeDrawer(id) {
  const drawer = document.getElementById(id);
  const overlay = document.getElementById(id === 'cartDrawer' ? 'cartOverlay' : 'favOverlay');
  if (drawer) {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  }
  if (overlay) overlay.classList.remove('open');
  if (!document.getElementById('cartDrawer').classList.contains('open') &&
      !document.getElementById('favDrawer').classList.contains('open') &&
      !document.getElementById('mobileMenu').classList.contains('open') &&
      !document.getElementById('searchOverlay').classList.contains('open')) {
    document.body.classList.remove('locked');
  }
}

function renderCartDrawer() {
  const list = document.getElementById('cartItems');
  if (!list) return;
  const items = cartGet();
  const hasItems = items.length > 0;

  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');

  if (empty) empty.hidden = hasItems;
  if (footer) footer.hidden = !hasItems;

  list.innerHTML = '';

  items.forEach(function (it) {
    const p = produtoPorId(it.id);
    if (!p) return;
    const desc = calcularDesconto(p);
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML =
      '<a class="cart-item-media" href="' + productURL(p.id) + '" tabindex="-1" aria-hidden="true">' +
      '<img src="' + p.imagens[0] + '" alt="' + esc(p.nome) + '" loading="lazy" decoding="async" />' +
      '</a>' +
      '<div class="cart-item-info">' +
      '<button class="cart-item-remove" data-remove-cart="' + p.id + '" aria-label="Remover ' + esc(p.nome) + ' do carrinho" type="button">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>' +
      '</button>' +
      '<a class="cart-item-name" href="' + productURL(p.id) + '">' + esc(p.nome) + '</a>' +
      '<span class="cart-item-cat">' + esc(p.categoria) + '</span>' +
      '<div class="cart-item-price">' +
      preco(p.preco) +
      (desc > 0 && p.precoAnterior ? '<span class="cart-item-old">' + preco(p.precoAnterior) + '</span>' : '') +
      '</div>' +
      '<div class="cart-item-controls">' +
      '<button class="qty-btn" data-qty="minus" data-id="' + p.id + '" aria-label="Diminuir quantidade" type="button">−</button>' +
      '<input class="qty-input" type="number" min="1" max="99" value="' + (it.qtd || 1) + '" data-qty-input="' + p.id + '" aria-label="Quantidade" />' +
      '<button class="qty-btn" data-qty="plus" data-id="' + p.id + '" aria-label="Aumentar quantidade" type="button">+</button>' +
      '</div>' +
      '<div class="cart-item-bottom">' +
      '<span class="cart-item-total">' + preco(p.preco * (parseInt(it.qtd, 10) || 1)) + '</span>' +
      (p.linkPagamento
        ? '<a class="btn btn-gold btn-sm cart-item-buy" href="' + p.linkPagamento + '" target="_blank" rel="noopener nofollow">Comprar agora</a>'
        : '<span class="btn btn-sm cart-item-buy" style="opacity:.55;cursor:not-allowed" title="Em breve">Em breve</span>') +
      '</div>' +
      '</div>';
    list.appendChild(li);
  });

  const subtotal = document.getElementById('cartSubtotal');
  if (subtotal) subtotal.textContent = preco(cartSubtotal());

  bindCartItemEvents();
}

function bindCartItemEvents() {
  const list = document.getElementById('cartItems');
  if (!list) return;

  list.querySelectorAll('.qty-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const id = btn.getAttribute('data-id');
      const it = cartGet().filter(function (x) {
        return x.id === id;
      })[0];
      if (!it) return;
      if (btn.getAttribute('data-qty') === 'minus') {
        if (parseInt(it.qtd, 10) > 1) cartSetQty(id, it.qtd - 1);
        else cartRemove(id);
      } else {
        cartSetQty(id, it.qtd + 1);
      }
    });
  });

  list.querySelectorAll('[data-qty-input]').forEach(function (input) {
    input.addEventListener('change', function () {
      cartSetQty(input.getAttribute('data-qty-input'), input.value);
    });
  });

  list.querySelectorAll('[data-remove-cart]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      cartRemove(btn.getAttribute('data-remove-cart'));
    });
  });
}

function renderFavDrawer() {
  const list = document.getElementById('favItems');
  if (!list) return;
  const favs = favGet();
  const empty = document.getElementById('favEmpty');
  if (empty) empty.hidden = favs.length > 0;

  list.innerHTML = '';

  favs.forEach(function (id) {
    const p = produtoPorId(id);
    if (!p) return;
    const div = document.createElement('div');
    div.className = 'fav-item';
    div.innerHTML =
      '<a class="fav-item-media" href="' + productURL(p.id) + '" tabindex="-1" aria-hidden="true">' +
      '<img src="' + p.imagens[0] + '" alt="' + esc(p.nome) + '" loading="lazy" decoding="async" />' +
      '</a>' +
      '<div class="fav-item-info">' +
      '<a class="fav-item-name" href="' + productURL(p.id) + '">' + esc(p.nome) + '</a>' +
      '<div class="fav-item-price">' + preco(p.preco) + '</div>' +
      '</div>' +
      '<div class="fav-item-actions">' +
      '<button class="btn btn-sm btn-light" data-add-cart="' + p.id + '" type="button">' + ICONS.cart + '</button>' +
      '<button class="btn btn-sm btn-ghost" data-fav="' + p.id + '" type="button">' + ICONS.heart + '</button>' +
      '</div>';
    list.appendChild(div);
  });
}

function syncFavButtons() {
  document.querySelectorAll('[data-fav]').forEach(function (btn) {
    const id = btn.getAttribute('data-fav');
    const active = favHas(id);
    btn.classList.toggle('active', active);
    const label = btn.getAttribute('aria-label');
    if (label) {
      btn.setAttribute('aria-label', (active ? 'Remover dos favoritos' : 'Adicionar aos favoritos') + ': ' + label.replace(/^.*?: /, ''));
    }
  });
}

/* ---------- Event delegation global ---------- */

function initGlobalEvents() {
  document.addEventListener('click', function (e) {
    const addBtn = e.target.closest('[data-add-cart]');
    if (addBtn) {
      const p = produtoPorId(addBtn.getAttribute('data-add-cart'));
      if (p) {
        cartAdd(p.id, 1);
        showToast(p.nome + ' adicionado ao carrinho', 'check');
        addBtn.classList.add('added');
        setTimeout(function () {
          addBtn.classList.remove('added');
        }, 600);
      }
      return;
    }

    const favBtn = e.target.closest('[data-fav]');
    if (favBtn) {
      const id = favBtn.getAttribute('data-fav');
      const p = produtoPorId(id);
      const added = favToggle(id);
      if (p) {
        showToast(added ? p.nome + ' adicionado aos favoritos' : p.nome + ' removido dos favoritos', 'heart');
      }
      return;
    }

    const closeBtn = e.target.closest('#cartClose, #favClose');
    if (closeBtn) {
      const drawer = closeBtn.closest('.drawer');
      if (drawer) closeDrawer(drawer.id);
      return;
    }

    const overlay = e.target.closest('.drawer-overlay');
    if (overlay) {
      if (overlay.id === 'cartOverlay') closeDrawer('cartDrawer');
      if (overlay.id === 'favOverlay') closeDrawer('favDrawer');
      return;
    }

    const openCart = e.target.closest('#cartOpen');
    if (openCart) {
      renderCartDrawer();
      updateCartBadge();
      openDrawer('cartDrawer');
      return;
    }

    const openFav = e.target.closest('#favOpen');
    if (openFav) {
      renderFavDrawer();
      updateFavBadge();
      openDrawer('favDrawer');
      return;
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeDrawer('cartDrawer');
      closeDrawer('favDrawer');
      closeSearch();
      const menu = document.getElementById('mobileMenu');
      if (menu && menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('locked');
        const burger = document.getElementById('burger');
        if (burger) burger.setAttribute('aria-expanded', 'false');
      }
    }
  });
}

/* ---------- Carrinho: finalizar compra ---------- */

function initCartCheckout() {
  const btn = document.getElementById('cartCheckout');
  if (!btn) return;
  btn.addEventListener('click', function () {
    const items = cartGet().filter(function (it) {
      return produtoPorId(it.id) && produtoPorId(it.id).linkPagamento;
    });
    if (!items.length) {
      showToast('Nenhum produto com pagamento disponível.', 'check');
      return;
    }
    const p = produtoPorId(items[0].id);
    if (p && p.linkPagamento) {
      window.open(p.linkPagamento, '_blank', 'noopener,nofollow');
    }
  });
}

/* ---------- Pesquisa ---------- */

function normalizarTexto(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function buscarProdutos(query) {
  const q = normalizarTexto(query.trim());
  if (!q) return [];
  return PRODUTOS.filter(function (p) {
    const texto = [p.nome, p.categoria, p.curto, p.descricao]
      .concat(p.beneficios || [])
      .join(' ');
    return normalizarTexto(texto).indexOf(q) !== -1;
  });
}

function openSearch() {
  const overlay = document.getElementById('searchOverlay');
  if (!overlay) return;
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('locked');
  const input = document.getElementById('searchInput');
  if (input) {
    setTimeout(function () {
      input.focus();
    }, 120);
  }
  renderSearchResults('');
}

function closeSearch() {
  const overlay = document.getElementById('searchOverlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('locked');
}

function renderSearchResults(query) {
  const wrap = document.getElementById('searchResults');
  if (!wrap) return;
  const q = query.trim();

  if (!q) {
    const sugestoes = ['luminária', 'solar', 'cozinha', 'fitness', 'câmera', 'luz'];
    wrap.innerHTML =
      '<div class="search-no-results">' +
      '<h3>O que procura?</h3>' +
      '<p>Digite para encontrar produtos da curadoria KRYON.</p>' +
      '<div class="search-suggestions">' +
      sugestoes
        .map(function (s) {
          return '<button type="button" data-suggestion="' + s + '">' + esc(s) + '</button>';
        })
        .join('') +
      '</div>' +
      '</div>';
    wrap.querySelectorAll('[data-suggestion]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const input = document.getElementById('searchInput');
        if (input) {
          input.value = btn.getAttribute('data-suggestion');
          renderSearchResults(btn.getAttribute('data-suggestion'));
        }
      });
    });
    return;
  }

  const results = buscarProdutos(q);

  if (!results.length) {
    wrap.innerHTML =
      '<div class="search-no-results">' +
      '<h3>Nenhum resultado para “' + esc(q) + '”</h3>' +
      '<p>Experimente outro termo, como “luminária”, “solar” ou “cozinha”.</p>' +
      '</div>';
    return;
  }

  wrap.innerHTML =
    '<div class="search-results-title">' +
    results.length + (results.length === 1 ? ' produto encontrado' : ' produtos encontrados') +
    '</div>' +
    '<div class="search-results-grid">' +
    results
      .map(function (p) {
        return (
          '<a class="search-result-item" href="' + productURL(p.id) + '">' +
          '<span class="search-result-media"><img src="' + p.imagens[0] + '" alt="' + esc(p.nome) + '" loading="lazy" decoding="async" /></span>' +
          '<span class="search-result-info">' +
          '<span class="search-result-name">' + esc(p.nome) + '</span>' +
          '<span class="search-result-cat">' + esc(p.categoria) + '</span>' +
          '<span class="search-result-price">' + preco(p.preco) + '</span>' +
          '</span>' +
          '</a>'
        );
      })
      .join('') +
    '</div>';
}

function initSearch() {
  const openBtn = document.getElementById('searchOpen');
  const closeBtn = document.getElementById('searchClose');
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('searchInput');

  if (openBtn) {
    openBtn.addEventListener('click', function () {
      openSearch();
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      closeSearch();
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeSearch();
    });
  }
  if (input) {
    let timer = null;
    input.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        renderSearchResults(input.value);
      }, 120);
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        renderSearchResults(input.value);
      }
    });
  }
}

/* ---------- Hero canvas (subtle) ---------- */

function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w = 0;
  let h = 0;
  let raf = null;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.max(1, Math.round(w * dpr));
    canvas.height = Math.max(1, Math.round(h * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw(t) {
    const time = t * 0.00009;
    ctx.clearRect(0, 0, w, h);

    const gold = [184, 147, 74];
    const graphite = [23, 23, 23];
    const bg = [247, 246, 242];

    const blobs = [
      { x: 0.22 + Math.sin(time * 0.7) * 0.05, y: 0.26 + Math.cos(time * 0.5) * 0.06, r: 0.42, a: 0.16, c: gold },
      { x: 0.78 + Math.cos(time * 0.6) * 0.05, y: 0.3 + Math.sin(time * 0.8) * 0.05, r: 0.38, a: 0.12, c: graphite },
      { x: 0.5 + Math.sin(time * 0.5 + 2) * 0.04, y: 0.72 + Math.cos(time * 0.6 + 1) * 0.05, r: 0.5, a: 0.08, c: gold },
    ];

    blobs.forEach(function (blob) {
      const rad = Math.max(w, h) * blob.r;
      const cx = w * blob.x;
      const cy = h * blob.y;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
      grad.addColorStop(0, 'rgba(' + blob.c[0] + ',' + blob.c[1] + ',' + blob.c[2] + ',' + blob.a + ')');
      grad.addColorStop(1, 'rgba(' + bg[0] + ',' + bg[1] + ',' + bg[2] + ',0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    });

    const grain = ctx.createPattern(makeGrain(), 'repeat');
    if (grain) {
      ctx.globalAlpha = 0.035;
      ctx.fillStyle = grain;
      ctx.fillRect(0, 0, w, h);
      ctx.globalAlpha = 1;
    }

    if (!prefersReduced) {
      raf = requestAnimationFrame(draw);
    }
  }

  function makeGrain() {
    const g = document.createElement('canvas');
    g.width = 128;
    g.height = 128;
    const gctx = g.getContext('2d');
    const img = gctx.createImageData(128, 128);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = 23 + Math.random() * 60;
      img.data[i] = v;
      img.data[i + 1] = v;
      img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
    gctx.putImageData(img, 0, 0);
    return g;
  }

  resize();
  draw(prefersReduced ? 0 : performance.now());

  window.addEventListener('resize', function () {
    resize();
  });
}

/* ---------- Hero wordmark ---------- */

function initHeroWordmark() {
  const el = document.getElementById('heroWordmark');
  if (!el) return;
  const text = 'KRYON';
  el.innerHTML = text
    .split('')
    .map(function (ch, i) {
      const cls = 'kryon-letter' + (i === text.length - 1 ? ' gold' : '');
      return '<span class="' + cls + '" style="animation-delay:' + (0.1 + i * 0.08) + 's">' + ch + '</span>';
    })
    .join('');
}

/* ---------- Init ---------- */

function initCart() {
  updateCartBadge();
  updateFavBadge();
  renderCartDrawer();
  renderFavDrawer();
  syncFavButtons();
  initGlobalEvents();
  initCartCheckout();
  initHeroCanvas();
  initHeroWordmark();
}
