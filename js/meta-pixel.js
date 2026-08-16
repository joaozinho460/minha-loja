/* ============================================================
   KRYON · Meta Pixel (Facebook / Instagram) — eventos de e-commerce
   O código base do pixel está no <head> de index.html e produto.html.
   ============================================================ */

/* ---------- Eventos de e-commerce (dados reais da loja) ---------- */

window.KRYON_Pixel = (function () {
  const moeda = 'BRL';

  const ultimoEvento = {};

  function podeDisparar(chave) {
    const agora = Date.now();
    if (ultimoEvento[chave] && agora - ultimoEvento[chave] < 1000) return false;
    ultimoEvento[chave] = agora;
    return true;
  }

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
      const chave = 'ic:' + ids.slice().sort().join('|');
      if (!podeDisparar(chave)) return;
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
      if (!podeDisparar('purchase')) return;
      fbq('track', 'Purchase', {
        content_type: 'product',
        content_ids: ids,
        value: typeof valorExato === 'number' ? valorExato : valorItems(items),
        currency: moeda
      });
    }
  };
})();
