/* ============================================================
   KRYON · Página de detalhes do produto
   ============================================================ */

let paginaProduto = null;

function renderProduto(produto) {
  const bcCat = document.getElementById('bcCat');
  const bcName = document.getElementById('bcName');
  if (bcCat) bcCat.textContent = produto.categoria;
  if (bcCat) bcCat.href = 'index.html#categorias';
  if (bcName) bcName.textContent = produto.nome;

  const pdCategoria = document.getElementById('pdCategoria');
  if (pdCategoria) pdCategoria.textContent = produto.categoria;

  const pdNome = document.getElementById('pdNome');
  if (pdNome) pdNome.textContent = produto.nome;

  const pdCurto = document.getElementById('pdCurto');
  if (pdCurto) pdCurto.textContent = produto.curto;

  const pdPreco = document.getElementById('pdPreco');
  if (pdPreco) pdPreco.textContent = preco(produto.preco);

  const pdPrecoAntigo = document.getElementById('pdPrecoAntigo');
  const pdDesconto = document.getElementById('pdDesconto');
  const desc = calcularDesconto(produto);
  if (pdPrecoAntigo) {
    pdPrecoAntigo.hidden = !(produto.precoAnterior && produto.precoAnterior > produto.preco);
    pdPrecoAntigo.textContent = preco(produto.precoAnterior);
  }
  if (pdDesconto) {
    pdDesconto.hidden = desc <= 0;
    pdDesconto.textContent = '-' + desc + '% OFF';
  }

  const pdStock = document.getElementById('pdStock');
  if (pdStock) {
    const n = produto.disponibilidade || { texto: 'Em stock · pronto a enviar', nivel: 'stock' };
    const cls = n.nivel === 'esgotado' ? 'out' : n.nivel === 'baixo' ? 'low' : '';
    pdStock.innerHTML = '<span class="stock-dot ' + cls + '"></span> ' + esc(n.texto);
  }

  const pdStars = document.getElementById('pdStars');
  const pdRatingValue = document.getElementById('pdRatingValue');
  const pdRatingCount = document.getElementById('pdRatingCount');
  if (pdStars) pdStars.innerHTML = starsHTML(produto.avaliacao);
  if (pdRatingValue) pdRatingValue.textContent = produto.avaliacao.toFixed(1).replace('.', ',');
  if (pdRatingCount) pdRatingCount.textContent = '· ' + produto.avaliacoes + ' avaliações';

  const pdDesc = document.getElementById('pdDesc');
  if (pdDesc) pdDesc.textContent = produto.descricao;

  const pdBuyBtn = document.getElementById('pdBuyBtn');
  const mbbBuy = document.getElementById('mbbBuy');
  const pdFav = document.getElementById('pdFav');

  if (pdBuyBtn) {
    if (produto.linkPagamento) {
      pdBuyBtn.hidden = false;
      pdBuyBtn.addEventListener('click', function () {
        window.open(produto.linkPagamento, '_blank', 'noopener,nofollow');
      });
    } else {
      pdBuyBtn.hidden = true;
    }
  }

  if (mbbBuy) {
    if (produto.linkPagamento) {
      mbbBuy.hidden = false;
      mbbBuy.addEventListener('click', function () {
        window.open(produto.linkPagamento, '_blank', 'noopener,nofollow');
      });
    } else {
      mbbBuy.hidden = true;
    }
  }

  const mbbCart = document.getElementById('mbbCart');
  if (mbbCart) {
    mbbCart.addEventListener('click', function () {
      const qtd = parseInt(document.getElementById('cartQty').value, 10) || 1;
      cartAdd(produto.id, qtd);
      renderCartDrawer();
      openDrawer('cartDrawer');
    });
  }

  const mbbPreco = document.getElementById('mbbPreco');
  const mbbPrecoAntigo = document.getElementById('mbbPrecoAntigo');
  if (mbbPreco) mbbPreco.textContent = preco(produto.preco);
  if (mbbPrecoAntigo) {
    mbbPrecoAntigo.hidden = !(produto.precoAnterior && produto.precoAnterior > produto.preco);
    mbbPrecoAntigo.textContent = preco(produto.precoAnterior);
  }

  document.title = produto.nome + ' · KRYON';

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', produto.curto);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', produto.nome + ' · KRYON');
}

function renderGaleria(produto) {
  const gMain = document.getElementById('gMain');
  const gVideo = document.getElementById('gVideo');
  const gThumbs = document.getElementById('gThumbs');

  const itens = [];
  (produto.imagens || []).forEach(function (img) {
    itens.push({ tipo: 'img', src: img });
  });
  (produto.videos || []).forEach(function (v, i) {
    itens.push({ tipo: 'video', src: v.src, poster: v.poster, titulo: v.titulo || 'Vídeo ' + (i + 1) });
  });

  if (!itens.length) return;

  function mostrar(item) {
    if (item.tipo === 'video') {
      if (gMain) gMain.hidden = true;
      if (gVideo) {
        gVideo.hidden = false;
        gVideo.poster = item.poster;
        gVideo.src = item.src;
        gVideo.load();
        gVideo.play();
      }
    } else {
      if (gVideo) {
        gVideo.pause();
        gVideo.removeAttribute('src');
        gVideo.load();
        gVideo.hidden = true;
      }
      if (gMain) {
        gMain.hidden = false;
        gMain.style.opacity = '0';
        setTimeout(function () {
          gMain.src = item.src;
          gMain.alt = produto.nome;
          gMain.style.opacity = '1';
        }, 180);
      }
    }
  }

  if (gThumbs) {
    gThumbs.innerHTML = itens
      .map(function (item, i) {
        if (item.tipo === 'video') {
          return (
            '<button class="gallery-thumb has-video' + (i === 0 ? ' active' : '') + '" data-kind="video" data-src="' + item.src + '" data-poster="' + item.poster + '" aria-label="Ver vídeo: ' + esc(item.titulo) + '" type="button">' +
            '<img src="' + item.poster + '" alt="' + esc(produto.nome) + ' — vídeo" loading="lazy" decoding="async" />' +
            '<span class="thumb-play">' +
            '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>' +
            '</span>' +
            '</button>'
          );
        }
        return (
          '<button class="gallery-thumb' + (i === 0 ? ' active' : '') + '" data-kind="img" data-src="' + item.src + '" aria-label="Ver imagem ' + (i + 1) + '" type="button">' +
          '<img src="' + item.src + '" alt="' + esc(produto.nome) + ' — imagem ' + (i + 1) + '" loading="lazy" decoding="async" />' +
          '</button>'
        );
      })
      .join('');

    gThumbs.querySelectorAll('.gallery-thumb').forEach(function (btn) {
      btn.addEventListener('click', function () {
        mostrar({
          tipo: btn.getAttribute('data-kind'),
          src: btn.getAttribute('data-src'),
          poster: btn.getAttribute('data-poster')
        });
        gThumbs.querySelectorAll('.gallery-thumb').forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');
      });
    });
  }

  mostrar(itens[0]);
}

function renderBeneficios(produto) {
  const wrap = document.getElementById('pdBeneficios');
  if (!wrap || !produto.beneficios || !produto.beneficios.length) return;
  wrap.innerHTML = produto.beneficios
    .map(function (b) {
      return '<li>' + ICONS.check + '<span>' + esc(b) + '</span></li>';
    })
    .join('');
}

function renderComoFunciona(produto) {
  const wrap = document.getElementById('pdComoFunciona');
  const sec = document.getElementById('comoFuncionaSec');
  if (!wrap || !produto.comoFunciona || !produto.comoFunciona.length) {
    if (sec) sec.style.display = 'none';
    return;
  }
  wrap.innerHTML = produto.comoFunciona
    .map(function (step, i) {
      return (
        '<div class="step-item">' +
        '<span class="step-num">' + (i + 1) + '</span>' +
        '<div><strong>' + esc(step.titulo) + '</strong><p>' + esc(step.texto) + '</p></div>' +
        '</div>'
      );
    })
    .join('');
}

function renderPorqueEscolher(produto) {
  const wrap = document.getElementById('pdPorque');
  const sec = document.getElementById('porqueSec');
  if (!wrap || !produto.porqueEscolher || !produto.porqueEscolher.length) {
    if (sec) sec.style.display = 'none';
    return;
  }
  wrap.innerHTML = produto.porqueEscolher
    .map(function (r) {
      return '<li>' + ICONS.check + '<span>' + esc(r) + '</span></li>';
    })
    .join('');
}

function renderProdutoFaq(produto) {
  const wrap = document.getElementById('pdFaq');
  if (!wrap || !produto.faq || !produto.faq.length) return;
  wrap.innerHTML = produto.faq
    .map(function (item) {
      return (
        '<div class="step-item">' +
        '<div><strong>' + esc(item.p) + '</strong><p>' + esc(item.r) + '</p></div>' +
        '</div>'
      );
    })
    .join('');
}

function renderRelacionados(produto) {
  const grid = document.getElementById('pdRelacionados');
  if (!grid) return;
  const rel = produtosRelacionados(produto, 4);
  grid.innerHTML = (rel.length
    ? rel
    : PRODUTOS.filter(function (p) {
        return p.id !== produto.id;
      }).slice(0, 4)
  )
    .map(function (p, i) {
      return renderProductCard(p, 'd' + (i % 4));
    })
    .join('');
}

function initQtyStepper() {
  const input = document.getElementById('cartQty');
  if (!input) return;
  document.querySelectorAll('.qty-stepper [data-step]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const step = parseInt(btn.getAttribute('data-step'), 10) || 0;
      let v = parseInt(input.value, 10) || 1;
      v += step;
      if (v < 1) v = 1;
      if (v > 99) v = 99;
      input.value = v;
    });
  });
}

function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const produto = id ? produtoPorId(id) : null;

  if (!produto) {
    window.location.href = 'index.html';
    return;
  }

  paginaProduto = produto;

  initShared();
  initCart();

  renderProduto(produto);
  if (window.KRYON_Pixel) window.KRYON_Pixel.trackViewContent(produto);
  renderGaleria(produto);
  renderBeneficios(produto);
  renderComoFunciona(produto);
  renderPorqueEscolher(produto);
  renderProdutoFaq(produto);
  renderRelacionados(produto);
  initQtyStepper();
  initAccordion();
  initPdAddCart(produto);
  initPdFav(produto);
  initMobileBuyBar();
  initReveal();
}

function initAccordion() {
  document.querySelectorAll('.accordion-item').forEach(function (item) {
    const trigger = item.querySelector('.accordion-trigger');
    const panel = item.querySelector('.accordion-panel');
    if (!trigger || !panel) return;
    if (item.classList.contains('open')) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
    trigger.addEventListener('click', function () {
      const open = item.classList.contains('open');
      document.querySelectorAll('.accordion-item.open').forEach(function (el) {
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

function initPdAddCart(produto) {
  const btn = document.getElementById('pdAddCart');
  if (!btn) return;
  btn.addEventListener('click', function () {
    const qtd = parseInt(document.getElementById('cartQty').value, 10) || 1;
    cartAdd(produto.id, qtd);
    showToast(produto.nome + ' adicionado ao carrinho', 'check');
    renderCartDrawer();
    openDrawer('cartDrawer');
  });
}

function initPdFav(produto) {
  const btn = document.getElementById('pdFav');
  if (!btn) return;
  const sync = function () {
    const active = favHas(produto.id);
    btn.classList.toggle('active', active);
    btn.querySelector('svg').style.fill = active ? 'var(--gold)' : 'none';
    btn.querySelector('svg').style.stroke = active ? 'var(--gold)' : 'currentColor';
    btn.setAttribute('aria-label', active ? 'Remover dos favoritos' : 'Adicionar aos favoritos');
  };
  sync();
  btn.addEventListener('click', function () {
    favToggle(produto.id);
    sync();
    showToast(favHas(produto.id) ? produto.nome + ' adicionado aos favoritos' : produto.nome + ' removido dos favoritos', 'heart');
  });
}

function initMobileBuyBar() {
  const bar = document.getElementById('mobileBuyBar');
  if (!bar) return;
  const check = function () {
    const show = window.scrollY > 420 && window.innerWidth < 900;
    bar.classList.toggle('show', show);
    document.body.classList.toggle('has-buybar', show);
  };
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check);
  check();
}

document.addEventListener('DOMContentLoaded', function () {
  initProductPage();
});
