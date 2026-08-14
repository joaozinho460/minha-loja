/* ============================================================
   NEXORA · Produtos & Ofertas Online — Carrinho (localStorage)
   Sem backend. Os dados ficam guardados no navegador.
   Os links de pagamento (Kairos) continuam a funcionar como antes.
   ============================================================ */

var CART_KEY = 'nexora_carrinho_v1';

var CART_REMOVE_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
  '<path d="M3 6h18"/><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/>' +
  '</svg>';

function cartGet() {
  try {
    var raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
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
  var total = 0;
  cartGet().forEach(function (it) {
    var p = produtoPorId(it.id);
    if (p) total += p.preco * (parseInt(it.qtd, 10) || 1);
  });
  return total;
}

function cartAdd(id, qtd) {
  var items = cartGet();
  var found = items.filter(function (it) { return it.id === id; })[0];
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
  var items = cartGet();
  items.forEach(function (it) {
    if (it.id === id) it.qtd = qtd;
  });
  cartSave(items);
  updateCartBadge();
  renderCartDrawer();
}

function cartRemove(id) {
  cartSave(cartGet().filter(function (it) { return it.id !== id; }));
  updateCartBadge();
  renderCartDrawer();
}

function precoLocal(valor) {
  var moeda = (typeof LOJA !== 'undefined' && LOJA.simboloMoeda) || 'R$';
  return moeda + ' ' + (typeof valor === 'number' ? valor.toFixed(2).replace('.', ',') : valor);
}

function renderCartDrawer() {
  var list = document.getElementById('cartItems');
  if (!list) return;
  var items = cartGet();
  var hasItems = items.length > 0;

  var empty = document.getElementById('cartEmpty');
  var footer = document.getElementById('cartFooter');
  var subtotal = document.getElementById('cartSubtotal');
  var countText = document.getElementById('cartCountText');

  if (empty) empty.hidden = hasItems;
  if (footer) footer.hidden = !hasItems;
  if (countText) countText.textContent = hasItems ? items.length + ' artigo' + (items.length > 1 ? 's' : '') : '';

  list.innerHTML = '';

  items.forEach(function (it) {
    var p = produtoPorId(it.id);
    if (!p) return;
    var desc = calcularDesconto(p);
    var row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML =
      '<a class="cart-item-img" href="produto.html?id=' + encodeURIComponent(p.id) + '">' +
      '<img src="' + p.imagens[0] + '" alt="' + p.nome + '" loading="lazy" decoding="async" ' +
      'onerror="this.onerror=null;this.src=\'images/produtos/hero-nexora.svg\';" />' +
      '</a>' +
      '<div class="cart-item-info">' +
      '<a class="cart-item-name" href="produto.html?id=' + encodeURIComponent(p.id) + '">' + p.nome + '</a>' +
      '<div class="cart-item-price"><span class="price">' + precoLocal(p.preco) + '</span>' +
      (desc > 0 && p.precoAnterior ? ' <span class="old">' + precoLocal(p.precoAnterior) + '</span>' : '') +
      '</div>' +
      '<div class="cart-item-controls">' +
      '<button type="button" class="qty-btn" data-qty="minus" data-id="' + p.id + '" aria-label="Diminuir quantidade">−</button>' +
      '<input class="qty-input" type="number" min="1" max="99" value="' + it.qtd + '" data-qty-input="' + p.id + '" aria-label="Quantidade" />' +
      '<button type="button" class="qty-btn" data-qty="plus" data-id="' + p.id + '" aria-label="Aumentar quantidade">+</button>' +
      '</div>' +
      '</div>' +
      '<div class="cart-item-side">' +
      '<button type="button" class="cart-item-remove" data-remove-cart="' + p.id + '" aria-label="Remover do carrinho">' + CART_REMOVE_ICON + '</button>' +
      '<div class="cart-item-total">' + precoLocal(p.preco * (parseInt(it.qtd, 10) || 1)) + '</div>' +
      '</div>';
    list.appendChild(row);
  });

  if (subtotal) subtotal.textContent = precoLocal(cartSubtotal());
  bindCartItemEvents();
}

function bindCartItemEvents() {
  var list = document.getElementById('cartItems');
  if (!list) return;

  list.querySelectorAll('.qty-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-id');
      var it = cartGet().filter(function (x) { return x.id === id; })[0];
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

function updateCartBadge() {
  var badge = document.getElementById('cartCount');
  var count = cartCount();
  if (badge) {
    badge.textContent = count > 99 ? '99+' : String(count);
    badge.classList.toggle('show', count > 0);
  }
}

function openCart() {
  renderCartDrawer();
  var drawer = document.getElementById('cartDrawer');
  var overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.classList.add('cart-open');
}

function closeCart() {
  var drawer = document.getElementById('cartDrawer');
  var overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.classList.remove('cart-open');
}

function initCart() {
  updateCartBadge();

  var openBtn = document.getElementById('cartOpen');
  var closeBtn = document.getElementById('cartClose');
  var overlay = document.getElementById('cartOverlay');

  if (openBtn) openBtn.addEventListener('click', openCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);
  if (overlay) overlay.addEventListener('click', closeCart);

  document.querySelectorAll('#cartContinue, #cartContinue2').forEach(function (btn) {
    if (btn) btn.addEventListener('click', closeCart);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeCart();
  });

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-add-cart]');
    if (!btn) return;
    var p = produtoPorId(btn.getAttribute('data-add-cart'));
    if (!p) return;
    cartAdd(p.id, 1);
    showToast(p.nome + ' adicionado ao carrinho');
  });
}
