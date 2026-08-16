/* ============================================================
   KRYON · Meta Pixel (Facebook / Instagram)
   Pixel ID: 1066936762934805
   Carregado em todas as páginas (index.html e produto.html).
   ============================================================ */

!function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = '2.0';
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1066936762934805');
fbq('track', 'PageView');

/* ---------- Eventos de e-commerce (dados reais da loja) ---------- */

window.KRYON_Pixel = (function () {
  const moeda = 'BRL';

  function produtoPorIdSafely(id) {
    return typeof produtoPorId === 'function' ? produtoPorId(id) : null;
  }

  function valorItems(items) {
    let total = 0;
    (items || []).forEach(function (it) {
      const p = produtoPorIdSafely(it.id);
      if (p) total += p.preco * (parseInt(it.qtd, 10) || 1);
    });
    return total;
  }

  return {
    trackViewContent: function (produto) {
      if (!produto) return;
      fbq('track', 'ViewContent', {
        content_type: 'product',
        content_ids: [produto.id],
        content_name: produto.nome,
        content_category: produto.categoria,
        value: produto.preco,
        currency: moeda
      });
    },

    trackAddToCart: function (produto, qtd) {
      if (!produto) return;
      fbq('track', 'AddToCart', {
        content_type: 'product',
        content_ids: [produto.id],
        content_name: produto.nome,
        content_category: produto.categoria,
        value: produto.preco * (qtd || 1),
        currency: moeda
      });
    },

    trackInitiateCheckout: function (items) {
      if (!items || !items.length) return;
      const ids = [];
      let numItems = 0;
      (items || []).forEach(function (it) {
        const p = produtoPorIdSafely(it.id);
        if (!p) return;
        ids.push(p.id);
        numItems += parseInt(it.qtd, 10) || 1;
      });
      if (!ids.length) return;
      fbq('track', 'InitiateCheckout', {
        content_type: 'product',
        content_ids: ids,
        num_items: numItems,
        value: valorItems(items),
        currency: moeda
      });
    },

    trackPurchase: function (items, valorExato) {
      if (!items || !items.length) return;
      const ids = [];
      (items || []).forEach(function (it) {
        if (it && it.id) ids.push(it.id);
      });
      if (!ids.length) return;
      fbq('track', 'Purchase', {
        content_type: 'product',
        content_ids: ids,
        value: typeof valorExato === 'number' ? valorExato : valorItems(items),
        currency: moeda
      });
    }
  };
})();
