/* ============================================================
    MAXIMIANO · Casa & Lifestyle — Página de Detalhes do Produto
    ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const produtoId = urlParams.get('id');

  if (!produtoId) {
    window.location.href = 'index.html';
    return;
  }

  const produto = produtoPorId(produtoId);
  if (!produto) {
    window.location.href = 'index.html';
    return;
  }

  initSite();
  renderProduto(produto);
  renderGaleria(produto);
  renderBeneficios(produto);
  renderComoFunciona(produto);
  renderPorqueEscolher(produto);
  renderFaq(document.getElementById('pdFaq'), produto.faq || []);
  renderProdutosRelacionados(produto);
});

function renderProduto(produto) {
  // Breadcrumb
  const bcCat = document.getElementById('bcCat');
  const bcName = document.getElementById('bcName');
  if (bcCat) bcCat.textContent = produto.categoria;
  if (bcName) bcName.textContent = produto.nome;

  // Categoria
  const pdCat = document.getElementById('pdCategoria');
  if (pdCat) pdCat.textContent = produto.categoria;

  // Nome
  const pdNome = document.getElementById('pdNome');
  if (pdNome) pdNome.textContent = produto.nome;

  // Curto
  const pdCurto = document.getElementById('pdCurto');
  if (pdCurto) pdCurto.textContent = produto.curto;

  // Preço
  const pdPreco = document.getElementById('pdPreco');
  if (pdPreco) {
    const desc = calcularDesconto(produto);
    const moeda = LOJA.simboloMoeda || 'R$';
    let html = '<span class="price">' + moeda + ' ' + produto.preco.toFixed(2).replace('.', ',') + '</span>';
    if (produto.precoAnterior && produto.precoAnterior > produto.preco) {
      html += ' <span class="old">' + moeda + ' ' + produto.precoAnterior.toFixed(2).replace('.', ',') + '</span>';
    }
    if (desc > 0) {
      html += ' <span class="badge badge-disc">-' + desc + '%</span>';
    }
    pdPreco.innerHTML = html;
  }

  // Stock
  const pdStock = document.getElementById('pdStock');
  if (pdStock) pdStock.innerHTML = stockHTML(produto);

  // Descrição
  const pdDesc = document.getElementById('pdDesc');
  if (pdDesc) pdDesc.textContent = produto.descricao;

  // Botão de compra
  const pdBuyBtn = document.getElementById('pdBuyBtn');
  const pdBuyBtn2 = document.getElementById('pdBuyBtn2');
  const mbbBtn = document.getElementById('mbbBtn');
  
  if (pdBuyBtn) pdBuyBtn.href = produto.kairosLink;
  if (pdBuyBtn2) pdBuyBtn2.href = produto.kairosLink;
  if (mbbBtn) mbbBtn.href = produto.kairosLink;

  // Mobile buy bar
  const mbbPreco = document.getElementById('mbbPreco');
  const mbbPrecoAntigo = document.getElementById('mbbPrecoAntigo');
  const moeda = LOJA.simboloMoeda || 'R$';
  
  if (mbbPreco) mbbPreco.textContent = moeda + ' ' + produto.preco.toFixed(2).replace('.', ',');
  if (mbbPrecoAntigo && produto.precoAnterior) {
    mbbPrecoAntigo.textContent = moeda + ' ' + produto.precoAnterior.toFixed(2).replace('.', ',');
  }

  // CTA final
  const ctaFinalTexto = document.getElementById('ctaFinalTexto');
  if (ctaFinalTexto) ctaFinalTexto.textContent = 'Compra ' + produto.nome + ' com segurança e aproveita a entrega acompanhada.';

  // Meta tags
  document.title = produto.nome + ' · MAXIMIANO · Casa & Lifestyle';
}

function renderGaleria(produto) {
  const gMain = document.getElementById('gMain');
  const gThumbs = document.getElementById('gThumbs');
  const gBadges = document.getElementById('gBadges');

  if (!produto.imagens || !produto.imagens.length) return;

  // Imagem principal
  if (gMain) {
    gMain.src = produto.imagens[0];
    gMain.alt = produto.nome;
  }

  // Miniaturas
  if (gThumbs) {
    gThumbs.innerHTML = produto.imagens
      .map(function (img, i) {
        return (
          '<button class="gallery-thumb' + (i === 0 ? ' active' : '') + '" data-src="' + img + '" aria-label="Ver imagem ' + (i + 1) + '">' +
          '<img src="' + img + '" alt="' + produto.nome + ' - imagem ' + (i + 1) + '" />' +
          '</button>'
        );
      })
      .join('');

    gThumbs.querySelectorAll('.gallery-thumb').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const src = this.getAttribute('data-src');
        if (gMain) gMain.src = src;
        gThumbs.querySelectorAll('.gallery-thumb').forEach(function (b) {
          b.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  }

  // Badges
  if (gBadges) {
    const desc = calcularDesconto(produto);
    let badgesHtml = '';
    if (desc > 0) {
      badgesHtml += '<span class="badge badge-disc">-' + desc + '%</span>';
    }
    if (produto.destaque) {
      badgesHtml += '<span class="badge badge-feature">Destaque</span>';
    }
    gBadges.innerHTML = badgesHtml;
  }
}

function renderBeneficios(produto) {
  const pdBeneficios = document.getElementById('pdBeneficios');
  if (!pdBeneficios || !produto.beneficios || !produto.beneficios.length) return;

  pdBeneficios.innerHTML = produto.beneficios
    .map(function (beneficio) {
      return (
        '<li>' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M20 6L9 17l-5-5" />' +
        '</svg>' +
        '<span>' + beneficio + '</span>' +
        '</li>'
      );
    })
    .join('');
}

function renderComoFunciona(produto) {
  const pdComoFunciona = document.getElementById('pdComoFunciona');
  if (!pdComoFunciona || !produto.comoFunciona || !produto.comoFunciona.length) {
    const sec = document.getElementById('comoFuncionaSec');
    if (sec) sec.style.display = 'none';
    return;
  }

  pdComoFunciona.innerHTML = produto.comoFunciona
    .map(function (step, i) {
      return (
        '<div class="how-card reveal d' + (i % 3) + '">' +
        '<div class="how-num">' + (i + 1) + '</div>' +
        '<h3>' + step.titulo + '</h3>' +
        '<p>' + step.texto + '</p>' +
        '</div>'
      );
    })
    .join('');

  initReveal();
}

function renderPorqueEscolher(produto) {
  const pdPorque = document.getElementById('pdPorque');
  if (!pdPorque || !produto.porqueEscolher || !produto.porqueEscolher.length) {
    const sec = document.getElementById('porqueSec');
    if (sec) sec.style.display = 'none';
    return;
  }

  pdPorque.innerHTML = produto.porqueEscolher
    .map(function (razao, i) {
      return (
        '<div class="why-card reveal d' + (i % 3) + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M20 6L9 17l-5-5" />' +
        '</svg>' +
        '<p>' + razao + '</p>' +
        '</div>'
      );
    })
    .join('');

  initReveal();
}

function renderProdutosRelacionados(produto) {
  const pdRelacionados = document.getElementById('pdRelacionados');
  if (!pdRelacionados) return;

  const relacionados = produtosRelacionados(produto, 4);
  if (!relacionados.length) {
    pdRelacionados.innerHTML = '<p style="grid-column:1/-1;color:var(--ink-soft)">Sem produtos relacionados.</p>';
    return;
  }

  pdRelacionados.innerHTML = relacionados.map(renderProdCard).join('');
  initReveal();
}
