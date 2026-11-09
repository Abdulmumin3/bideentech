/* ==========================================================
   BIDEEN TECHNOLOGY  |  script.js
   Vanilla JavaScript, no dependencies.
   Edit the CONFIG, CATEGORIES, PRODUCTS, SERVICES, GALLERY and
   TESTIMONIALS blocks below to change site content.
   All user-supplied text is inserted with textContent / DOM APIs
   (never innerHTML) so nothing typed by a visitor can inject markup.
   ========================================================== */
(function () {
  'use strict';

  /* ---------------- CONFIG ---------------- */
  var CONFIG = {
    whatsapp: '2349045083638',          // international format, digits only
    business: 'BIDEEN TECHNOLOGY',
    cartKey: 'bideen-cart-v1',
    autoplayMs: 6500
  };

  /* ---------------- DATA ---------------- */
  var CATEGORIES = [
    { id: 'laptops', title: 'Laptops', desc: 'Business ultrabooks, creator machines and everyday laptops.', image: 'assets/images/categories/laptops.svg', alt: 'Illustration of a laptop', action: 'filter' },
    { id: 'smartphones', title: 'Smartphones', desc: 'iPhone and Android flagships, tested and ready to use.', image: 'assets/images/categories/smartphones.svg', alt: 'Illustration of three smartphones', action: 'filter' },
    { id: 'gaming', title: 'Gaming Consoles', desc: 'Consoles, controllers and games for every player.', image: 'assets/images/categories/gaming-consoles.svg', alt: 'Illustration of a gaming console and controller', action: 'filter' },
    { id: 'accessories', title: 'Accessories', desc: 'Earbuds, mice, chargers, cables and everyday essentials.', image: 'assets/images/categories/accessories.svg', alt: 'Illustration of earbuds, headphones and a mouse', action: 'filter' },
    { id: 'hardware', title: 'Computer Hardware', desc: 'SSDs, memory, boards and parts to build or upgrade.', image: 'assets/images/categories/computer-hardware.svg', alt: 'Illustration of a motherboard and processor', action: 'filter' },
    { id: 'software', title: 'Software & Installation', desc: 'OS installs, office tools, security and troubleshooting.', image: 'assets/images/categories/software.svg', alt: 'Illustration of an installer window and security shield', action: 'book', service: 'software-install' }
  ];

  // Prices are DEMONSTRATION prices in Nigerian Naira (NGN).
  var PRODUCTS = [
    { id: 'macbook-pro-14', name: 'Apple MacBook Pro 14-inch', cat: 'laptops', spec: 'M-series chip, 16GB RAM, 512GB SSD', price: 2850000, status: 'In Stock', image: 'assets/images/products/macbook-pro-14.svg', desc: 'A powerhouse laptop for creators, developers and professionals who need speed and battery life.', details: ['14-inch Liquid Retina XDR display', '16GB unified memory, 512GB SSD', 'Long battery life, fast charging', 'Quality-checked before sale'] },
    { id: 'hp-elitebook-840-g8', name: 'HP EliteBook 840 G8', cat: 'laptops', spec: 'Core i5, 16GB RAM, 512GB SSD', price: 850000, status: 'In Stock', image: 'assets/images/products/hp-elitebook-840.svg', desc: 'A durable business laptop with a quality keyboard, strong security features and all-day reliability.', details: ['14-inch Full HD display', '16GB RAM, 512GB SSD', 'Backlit keyboard, fingerprint reader', 'Quality-checked before sale'] },
    { id: 'dell-latitude-7420', name: 'Dell Latitude 7420', cat: 'laptops', spec: 'Core i7, 16GB RAM, 512GB SSD', price: 780000, status: 'Limited Stock', image: 'assets/images/products/dell-latitude-7420.svg', desc: 'A slim, travel-ready business ultrabook that handles multitasking with ease.', details: ['14-inch Full HD display', '16GB RAM, 512GB SSD', 'Thunderbolt-ready ports', 'Quality-checked before sale'] },
    { id: 'iphone-15-pro', name: 'iPhone 15 Pro', cat: 'smartphones', spec: '256GB, Titanium finish', price: 1650000, status: 'In Stock', image: 'assets/images/products/iphone-15-pro.svg', desc: 'Apple\'s Pro smartphone with a titanium design, a powerful chip and an advanced camera system.', details: ['256GB storage', 'Pro camera system', 'USB-C connector', 'Tested and activated'] },
    { id: 'galaxy-s24-ultra', name: 'Samsung Galaxy S24 Ultra', cat: 'smartphones', spec: '256GB, 12GB RAM, S Pen', price: 1750000, status: 'In Stock', image: 'assets/images/products/galaxy-s24-ultra.svg', desc: 'Samsung\'s flagship with a large bright display, built-in S Pen and a versatile camera setup.', details: ['256GB storage, 12GB RAM', 'Built-in S Pen', 'Large AMOLED display', 'Tested and activated'] },
    { id: 'playstation-5', name: 'PlayStation 5', cat: 'gaming', spec: 'Disc edition, 825GB SSD', price: 950000, status: 'Limited Stock', image: 'assets/images/products/playstation-5.svg', desc: 'Fast loading, immersive gameplay and a DualSense controller in the box.', details: ['825GB SSD', '4K gaming support', 'DualSense wireless controller', 'Tested before sale'] },
    { id: 'airpods-pro', name: 'AirPods Pro', cat: 'accessories', spec: 'Active noise cancellation, USB-C case', price: 380000, status: 'In Stock', image: 'assets/images/products/airpods-pro.svg', desc: 'Wireless earbuds with active noise cancellation and a comfortable, secure fit.', details: ['Active noise cancellation', 'Transparency mode', 'Charging case included', 'Tested before sale'] },
    { id: 'logitech-wireless-mouse', name: 'Logitech Wireless Mouse', cat: 'accessories', spec: '2.4GHz receiver, long battery life', price: 65000, status: 'In Stock', image: 'assets/images/products/logitech-mouse.svg', desc: 'A reliable, comfortable wireless mouse for work, school and everyday use.', details: ['2.4GHz USB receiver', 'Long battery life', 'Comfortable ergonomic shape', 'Plug and play'] },
    { id: 'nvme-ssd-1tb', name: 'NVMe SSD 1TB', cat: 'hardware', spec: 'M.2 NVMe, fast read and write', price: 120000, status: 'In Stock', image: 'assets/images/products/nvme-ssd-1tb.svg', desc: 'Speed up boot times and loading with a high-capacity NVMe solid state drive. Installation available.', details: ['1TB capacity', 'M.2 NVMe interface', 'Installation available', 'Compatibility checked on request'] },
    { id: 'ddr4-ram-16gb', name: 'DDR4 RAM 16GB (SODIMM)', cat: 'hardware', spec: '3200MHz laptop memory', price: 55000, status: 'In Stock', image: 'assets/images/products/ddr4-ram-16gb.svg', desc: 'A simple, affordable upgrade for slow laptops. Tell us your model and we will confirm compatibility.', details: ['16GB capacity', '3200MHz DDR4 SODIMM', 'Installation available', 'Compatibility checked on request'] }
  ];

  var FILTERS = [{ id: 'all', label: 'All' }, { id: 'laptops', label: 'Laptops' }, { id: 'smartphones', label: 'Smartphones' }, { id: 'gaming', label: 'Gaming' }, { id: 'accessories', label: 'Accessories' }, { id: 'hardware', label: 'Hardware' }];

  // "from" prices are placeholder ESTIMATES, subject to diagnosis.
  var SERVICES = [
    { id: 'laptop-repair', name: 'Laptop Repairs', icon: 'fa-laptop-medical', from: 15000, desc: 'Overheating, no power, slow performance, hinges, screens and more.' },
    { id: 'phone-screen', name: 'Phone Screen Replacement', icon: 'fa-mobile-screen-button', from: 25000, desc: 'Cracked or unresponsive display replaced with quality parts.' },
    { id: 'battery', name: 'Battery Replacement', icon: 'fa-battery-three-quarters', from: 20000, desc: 'Restore battery life on phones, laptops and tablets.' },
    { id: 'charging-port', name: 'Charging Port Repairs', icon: 'fa-plug', from: 12000, desc: 'Loose, damaged or non-charging ports repaired or replaced.' },
    { id: 'keyboard', name: 'Keyboard Replacement', icon: 'fa-keyboard', from: 18000, desc: 'Stuck, dead or liquid-damaged laptop keyboards replaced.' },
    { id: 'motherboard', name: 'Motherboard Diagnostics', icon: 'fa-microchip', from: 10000, desc: 'Component-level testing to find the real fault before repair.' },
    { id: 'console-repair', name: 'Gaming Console Repairs', icon: 'fa-gamepad', from: 25000, desc: 'HDMI, overheating, disc drive and power faults on major consoles.' },
    { id: 'software-install', name: 'Software Installation', icon: 'fa-download', from: 5000, desc: 'Office tools, drivers, creative apps and everyday software set up.' },
    { id: 'os-install', name: 'Operating System Installation', icon: 'fa-window-maximize', from: 8000, desc: 'Clean Windows or macOS installs with drivers and updates.' },
    { id: 'malware', name: 'Virus & Malware Removal', icon: 'fa-shield-virus', from: 7000, desc: 'Remove threats, clean up your system and set up protection.' },
    { id: 'data-recovery', name: 'Data Recovery', icon: 'fa-hard-drive', from: 30000, desc: 'Attempt to recover files from failing or damaged storage.' },
    { id: 'upgrades', name: 'Hardware Upgrades', icon: 'fa-memory', from: 15000, desc: 'More RAM, faster SSDs and other upgrades, professionally fitted.' }
  ];
  var OTHER_SERVICE = { id: 'other', name: 'Other / not sure (needs diagnosis)' };

  var GALLERY = [
    { cat: 'repair', title: 'Laptop motherboard repair', src: 'assets/images/repairs/motherboard-repair.svg', alt: 'Illustration of a laptop motherboard with a screwdriver and magnifier' },
    { cat: 'repair', title: 'Smartphone screen replacement', src: 'assets/images/repairs/screen-replacement.svg', alt: 'Illustration of a smartphone with a cracked screen and a screwdriver' },
    { cat: 'repair', title: 'Technician servicing a laptop', src: 'assets/images/repairs/technician-laptop.svg', alt: 'Illustration of a laptop being serviced with tools and a memory chip' },
    { cat: 'repair', title: 'Phone hardware repair', src: 'assets/images/repairs/phone-hardware.svg', alt: 'Illustration of a phone with a chip and repair tool' },
    { cat: 'repair', title: 'Gaming console repair', src: 'assets/images/repairs/console-repair.svg', alt: 'Illustration of a gaming console with a graphics chip and tool' },
    { cat: 'repair', title: 'Computer diagnostics', src: 'assets/images/repairs/diagnostics.svg', alt: 'Illustration of a laptop with a diagnostic pulse line and magnifier' },
    { cat: 'repair', title: 'Hardware upgrades', src: 'assets/images/repairs/hardware-upgrades.svg', alt: 'Illustration of memory, an SSD and a processor for an upgrade' },
    { cat: 'sales', title: 'Premium laptops', src: 'assets/images/gallery/premium-laptops.svg', alt: 'Illustration of two premium laptops' },
    { cat: 'sales', title: 'iPhones', src: 'assets/images/gallery/iphones.svg', alt: 'Illustration of three smartphones' },
    { cat: 'sales', title: 'Samsung smartphones', src: 'assets/images/gallery/samsung-phones.svg', alt: 'Illustration of two Android smartphones' },
    { cat: 'sales', title: 'Gaming consoles', src: 'assets/images/gallery/gaming-consoles.svg', alt: 'Illustration of a gaming console and controller' },
    { cat: 'sales', title: 'Headphones & earbuds', src: 'assets/images/gallery/headphones.svg', alt: 'Illustration of headphones and wireless earbuds' },
    { cat: 'sales', title: 'Computer accessories', src: 'assets/images/gallery/accessories.svg', alt: 'Illustration of a keyboard and wireless mouse' },
    { cat: 'sales', title: 'Storage devices', src: 'assets/images/gallery/storage-devices.svg', alt: 'Illustration of an SSD and memory module' },
    { cat: 'sales', title: 'Computer hardware', src: 'assets/images/gallery/computer-hardware.svg', alt: 'Illustration of a motherboard and processor' }
  ];

  // SAMPLE testimonials: fictional, for demonstration only.
  var TESTIMONIALS = [
    { name: 'Adaeze O.', item: 'Laptop keyboard replacement', rating: 5, text: 'Sample review: the team explained the problem clearly, gave an estimate first and returned my laptop with a working keyboard.' },
    { name: 'Tunde A.', item: 'iPhone 15 Pro purchase', rating: 5, text: 'Sample review: easy ordering through WhatsApp, quick replies and a phone that was exactly as described.' },
    { name: 'Funke B.', item: 'Phone screen replacement', rating: 4, text: 'Sample review: my cracked screen was replaced the same day. Clear pricing and polite service.' },
    { name: 'Emeka N.', item: 'SSD upgrade and OS install', rating: 5, text: 'Sample review: my old laptop feels new again after the SSD upgrade and a clean system install.' },
    { name: 'Hauwa S.', item: 'PlayStation 5 purchase', rating: 5, text: 'Sample review: console arrived well packed and tested. Helpful advice on accessories too.' }
  ];

  /* ---------------- HELPERS ---------------- */
  var $ = function (id) { return document.getElementById(id); };
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fmt = function (n) { return '\u20A6' + Number(n).toLocaleString('en-NG'); };

  function h(tag, attrs) {
    var el = document.createElement(tag);
    var a = attrs || {};
    Object.keys(a).forEach(function (k) {
      var v = a[k];
      if (v === null || v === undefined || v === false) return;
      if (k === 'class') el.className = v;
      else if (k === 'text') el.textContent = v;
      else if (k.indexOf('on') === 0 && typeof v === 'function') el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    });
    for (var i = 2; i < arguments.length; i++) {
      var kids = [].concat(arguments[i]);
      for (var j = 0; j < kids.length; j++) {
        var c = kids[j];
        if (c === null || c === undefined || c === false) continue;
        el.append(c.nodeType ? c : document.createTextNode(String(c)));
      }
    }
    return el;
  }
  function icon(cls) { return h('i', { class: cls, 'aria-hidden': 'true' }); }
  function clean(s, max) { return String(s || '').replace(/[\u0000-\u001F\u007F]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max || 200); }
  function waLink(msg) { return 'https://wa.me/' + CONFIG.whatsapp + (msg ? '?text=' + encodeURIComponent(msg) : ''); }
  function openWhatsApp(msg) { window.open(waLink(msg), '_blank', 'noopener,noreferrer'); }
  function smoothTo(top) { window.scrollTo({ top: top, behavior: reducedMotion ? 'auto' : 'smooth' }); }
  function scrollToId(id) { var t = $(id); if (t) t.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' }); }

  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  };

  // Scroll lock with several independent owners
  var locks = {};
  function lock(key, on) {
    if (on) locks[key] = true; else delete locks[key];
    var any = Object.keys(locks).length > 0;
    var sbw = window.innerWidth - document.documentElement.clientWidth;
    document.body.classList.toggle('is-locked', any);
    document.body.style.paddingRight = any && sbw > 0 ? sbw + 'px' : '';
  }

  var toastTimer;
  function toast(msg) {
    var t = $('toast'); if (!t) return;
    t.textContent = msg; t.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('is-visible'); }, 2400);
  }

  function openDialog(d) { lock(d.id, true); if (typeof d.showModal === 'function') d.showModal(); else d.setAttribute('open', ''); }
  function closeDialog(d) { if (typeof d.close === 'function') d.close(); else d.removeAttribute('open'); lock(d.id, false); }

  /* ---------------- STATIC WHATSAPP LINKS ---------------- */
  function initWhatsAppLinks() {
    document.querySelectorAll('[data-wa-msg]').forEach(function (a) { a.href = waLink(a.getAttribute('data-wa-msg')); });
    var yr = $('year'); if (yr) yr.textContent = String(new Date().getFullYear());
  }

  /* ---------------- NAVIGATION ---------------- */
  function initNav() {
    var header = $('siteHeader'), nav = $('primaryNav'), burger = $('burger'), scrim = $('navScrim');
    var isDesktop = window.matchMedia('(min-width: 1024px)');
    function setOpen(open) {
      nav.classList.toggle('is-open', open);
      scrim.classList.toggle('is-open', open);
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      lock('nav', open);
    }
    burger.addEventListener('click', function () { setOpen(!nav.classList.contains('is-open')); });
    scrim.addEventListener('click', function () { setOpen(false); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target) && !burger.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); burger.focus(); } });
    var onMq = function () { if (isDesktop.matches) setOpen(false); };
    if (isDesktop.addEventListener) isDesktop.addEventListener('change', onMq); else isDesktop.addListener(onMq);

    // sticky header + back to top
    var toTop = $('toTop'), ticking = false;
    function onScroll() {
      var y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 20);
      toTop.classList.toggle('is-visible', y > 700);
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();
    toTop.addEventListener('click', function () { smoothTo(0); });

    // scroll spy
    var links = {};
    nav.querySelectorAll('[data-spy]').forEach(function (a) { links[a.getAttribute('data-spy')] = a; });
    if ('IntersectionObserver' in window) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          Object.keys(links).forEach(function (k) { links[k].classList.toggle('is-active', k === en.target.id); });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      Object.keys(links).forEach(function (k) { var s = $(k); if (s) spy.observe(s); });
    }
  }

  /* ---------------- SCROLL REVEAL ---------------- */
  function initReveal() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || reducedMotion) { els.forEach(function (e) { e.classList.add('is-visible'); }); return; }
    els.forEach(function (el) {
      var sibs = el.parentElement ? [].filter.call(el.parentElement.children, function (c) { return c.hasAttribute('data-reveal'); }) : [];
      el.style.setProperty('--d', Math.min(sibs.indexOf(el), 5) * 0.08 + 's');
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- CART ---------------- */
  var cart = [];
  var productById = {};
  PRODUCTS.forEach(function (p) { productById[p.id] = p; });

  function loadCart() {
    try {
      var raw = JSON.parse(store.get(CONFIG.cartKey) || '[]');
      if (!Array.isArray(raw)) return [];
      return raw.filter(function (i) { return i && productById[i.id] && Number.isInteger(i.qty) && i.qty > 0; })
        .map(function (i) { return { id: i.id, qty: Math.min(i.qty, 99) }; });
    } catch (e) { return []; }
  }
  function saveCart() { store.set(CONFIG.cartKey, JSON.stringify(cart)); }
  function cartTotal() { return cart.reduce(function (s, i) { return s + productById[i.id].price * i.qty; }, 0); }
  function cartCount() { return cart.reduce(function (s, i) { return s + i.qty; }, 0); }

  function addToCart(id) {
    if (!productById[id]) return;
    var found = cart.filter(function (i) { return i.id === id; })[0];
    if (found) found.qty = Math.min(found.qty + 1, 99); else cart.push({ id: id, qty: 1 });
    saveCart(); renderCart(true);
    toast(productById[id].name + ' added to cart');
  }
  function setQty(id, qty) {
    var item = cart.filter(function (i) { return i.id === id; })[0];
    if (!item) return;
    if (qty < 1) return removeFromCart(id);
    item.qty = Math.min(qty, 99); saveCart(); renderCart();
  }
  function removeFromCart(id) { cart = cart.filter(function (i) { return i.id !== id; }); saveCart(); renderCart(); }

  function renderCart(bump) {
    var count = cartCount(), badge = $('cartCount'), body = $('cartBody');
    badge.textContent = String(count); badge.hidden = count === 0;
    if (bump) { badge.classList.remove('bump'); void badge.offsetWidth; badge.classList.add('bump'); }
    $('cartOpen').setAttribute('aria-label', 'Open cart, ' + count + (count === 1 ? ' item' : ' items'));
    $('cartTotal').textContent = fmt(cartTotal());
    $('cartCheckout').disabled = count === 0;
    $('cartClear').hidden = count === 0;
    body.textContent = '';
    if (!count) {
      body.append(h('div', { class: 'cart-empty' }, icon('fa-solid fa-bag-shopping'), h('p', { text: 'Your cart is empty.' }), h('p', { text: 'Add a gadget to get started.' })));
      return;
    }
    cart.forEach(function (i) {
      var p = productById[i.id];
      body.append(h('div', { class: 'cart-item' },
        h('img', { src: p.image, alt: '', width: 72, height: 72 }),
        h('div', null,
          h('h3', { text: p.name }),
          h('p', { class: 'cart-item__price', text: fmt(p.price) + ' each' }),
          h('div', { class: 'qty', role: 'group', 'aria-label': 'Quantity for ' + p.name },
            h('button', { type: 'button', 'aria-label': 'Decrease quantity', onclick: function () { setQty(p.id, i.qty - 1); } }, icon('fa-solid fa-minus')),
            h('output', { text: String(i.qty), 'aria-live': 'polite' }),
            h('button', { type: 'button', 'aria-label': 'Increase quantity', onclick: function () { setQty(p.id, i.qty + 1); } }, icon('fa-solid fa-plus')))),
        h('button', { class: 'cart-item__remove', type: 'button', 'aria-label': 'Remove ' + p.name, onclick: function () { removeFromCart(p.id); } }, icon('fa-solid fa-trash-can')),
        h('p', { class: 'cart-item__line', text: 'Subtotal: ' + fmt(p.price * i.qty) })));
    });
  }

  function cartMessage() {
    var lines = cart.map(function (i, n) { var p = productById[i.id]; return (n + 1) + '. ' + p.name + ' x' + i.qty + ' - ' + fmt(p.price * i.qty); });
    return 'Hello ' + CONFIG.business + ', I would like to place an order:\n\n' + lines.join('\n') + '\n\nTotal: ' + fmt(cartTotal()) +
      '\n\nPlease confirm availability, final price and delivery options. Thank you.';
  }

  function initCart() {
    cart = loadCart();
    var drawer = $('cartDrawer'), scrim = $('cartScrim'), opener = null;
    function setOpen(open) {
      drawer.classList.toggle('is-open', open);
      scrim.classList.toggle('is-open', open);
      drawer.setAttribute('aria-hidden', String(!open));
      lock('cart', open);
      if (open) { opener = document.activeElement; $('cartClose').focus(); }
      else if (opener && opener.focus) { opener.focus(); }
    }
    $('cartOpen').addEventListener('click', function () { setOpen(true); });
    $('cartClose').addEventListener('click', function () { setOpen(false); });
    scrim.addEventListener('click', function () { setOpen(false); });
    drawer.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { setOpen(false); return; }
      if (e.key !== 'Tab') return;
      var f = [].filter.call(drawer.querySelectorAll('button, a[href]'), function (x) { return !x.disabled && !x.hidden; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    $('cartClear').addEventListener('click', function () { cart = []; saveCart(); renderCart(); });
    $('cartCheckout').addEventListener('click', function () { if (cart.length) openWhatsApp(cartMessage()); });
    renderCart();
    window.addEventListener('storage', function (e) { if (e.key === CONFIG.cartKey) { cart = loadCart(); renderCart(); } });
  }

  /* ---------------- PRODUCTS ---------------- */
  var activeCat = 'all', query = '';

  function statusClass(s) { return s === 'Limited Stock' ? 'badge badge--limited' : s === 'Pre-order' ? 'badge badge--pre' : 'badge'; }

  function productCard(p) {
    return h('article', { class: 'product' },
      h('div', { class: 'product__media' },
        h('img', { src: p.image, alt: p.name + ' product illustration', width: 800, height: 600, loading: 'lazy', decoding: 'async' }),
        h('span', { class: statusClass(p.status), text: p.status })),
      h('div', { class: 'product__body' },
        h('h3', { text: p.name }),
        h('p', { class: 'product__spec', text: p.spec }),
        h('p', { class: 'product__price', text: fmt(p.price) }),
        h('div', { class: 'product__actions' },
          h('button', { class: 'btn btn--primary', type: 'button', 'aria-label': 'Add ' + p.name + ' to cart', onclick: function () { addToCart(p.id); } }, icon('fa-solid fa-cart-plus'), 'Add to Cart'),
          h('button', { class: 'btn btn--ghost', type: 'button', 'aria-label': 'View details for ' + p.name, onclick: function () { showProduct(p.id); } }, 'View Details'),
          h('a', { class: 'btn btn--wa', href: waLink('Hello ' + CONFIG.business + ', I would like to buy the ' + p.name + ' (' + fmt(p.price) + '). Is it available?'), target: '_blank', rel: 'noopener', 'aria-label': 'Buy ' + p.name + ' on WhatsApp' }, icon('fa-brands fa-whatsapp'), 'Buy'))));
  }

  function renderProducts() {
    var q = query.toLowerCase();
    var list = PRODUCTS.filter(function (p) {
      return (activeCat === 'all' || p.cat === activeCat) && (!q || (p.name + ' ' + p.spec + ' ' + p.cat).toLowerCase().indexOf(q) !== -1);
    });
    var grid = $('productGrid'); grid.textContent = '';
    list.forEach(function (p, i) { var c = productCard(p); c.style.animationDelay = Math.min(i, 8) * 40 + 'ms'; grid.append(c); });
    $('productEmpty').hidden = list.length > 0;
    $('resultCount').textContent = list.length + (list.length === 1 ? ' product' : ' products') + ' shown';
  }

  function setFilter(cat, scroll) {
    activeCat = cat; query = ''; $('productSearch').value = '';
    $('productFilters').querySelectorAll('.chip').forEach(function (c) {
      var on = c.getAttribute('data-filter') === cat;
      c.classList.toggle('is-active', on); c.setAttribute('aria-pressed', String(on));
    });
    renderProducts();
    if (scroll) scrollToId('shop');
  }

  function showProduct(id) {
    var p = productById[id]; if (!p) return;
    var d = $('productDialog');
    $('pdImg').src = p.image; $('pdImg').alt = p.name + ' product illustration';
    var st = $('pdStatus'); st.className = statusClass(p.status); st.textContent = p.status;
    $('pdName').textContent = p.name; $('pdPrice').textContent = fmt(p.price); $('pdDesc').textContent = p.desc;
    var list = $('pdList'); list.textContent = '';
    p.details.forEach(function (t) { list.append(h('li', { text: t })); });
    $('pdAdd').onclick = function () { addToCart(p.id); closeDialog(d); };
    $('pdWa').href = waLink('Hello ' + CONFIG.business + ', I would like to buy the ' + p.name + ' (' + fmt(p.price) + '). Is it available?');
    openDialog(d);
  }

  function initProducts() {
    var chips = $('productFilters');
    FILTERS.forEach(function (f) {
      chips.append(h('button', { type: 'button', class: 'chip' + (f.id === 'all' ? ' is-active' : ''), 'data-filter': f.id, 'aria-pressed': String(f.id === 'all'), onclick: function () { setFilter(f.id, false); } }, f.label));
    });
    var timer;
    $('productSearch').addEventListener('input', function (e) {
      var v = clean(e.target.value, 60);
      clearTimeout(timer);
      timer = setTimeout(function () { query = v; renderProducts(); }, 120);
    });

    var grid = $('catGrid');
    CATEGORIES.forEach(function (c) {
      var label = c.action === 'book' ? 'Book ' + c.title : 'Explore ' + c.title;
      grid.append(h('article', { class: 'cat-card', 'data-reveal': '' },
        h('div', { class: 'cat-card__img' }, h('img', { src: c.image, alt: c.alt, width: 800, height: 600, loading: 'lazy', decoding: 'async' })),
        h('div', { class: 'cat-card__body' },
          h('h3', { text: c.title }), h('p', { text: c.desc }),
          h('button', { type: 'button', class: 'cat-card__link', 'aria-label': label, onclick: function () { if (c.action === 'book') bookService(c.service); else setFilter(c.id, true); } }, 'Explore ' + c.title, icon('fa-solid fa-arrow-right')))));
    });

    var fc = $('footerCats');
    CATEGORIES.forEach(function (c) {
      fc.append(h('li', null, h('a', { href: c.action === 'book' ? '#services' : '#shop', onclick: function () { if (c.action !== 'book') setFilter(c.id, false); } }, c.title)));
    });
    renderProducts();
  }

  /* ---------------- REPAIRS & BOOKING ---------------- */
  function bookService(id) {
    var sel = $('bkService');
    if (id && [].some.call(sel.options, function (o) { return o.value === id; })) sel.value = id;
    resetBooking();
    scrollToId('services');
    setTimeout(function () { var n = $('bkName'); if (n && !n.value) n.focus({ preventScroll: true }); }, reducedMotion ? 0 : 700);
  }

  function initRepairs() {
    var grid = $('repairGrid'), sel = $('bkService'), fs = $('footerServices');
    SERVICES.forEach(function (s) {
      grid.append(h('article', { class: 'repair', 'data-reveal': '' },
        h('div', { class: 'repair__icon' }, icon('fa-solid ' + s.icon)),
        h('h3', { text: s.name }), h('p', { text: s.desc }),
        h('p', { class: 'repair__price' }, 'Starting from', h('strong', { text: fmt(s.from) }), 'Estimate, subject to diagnosis'),
        h('button', { class: 'btn btn--primary', type: 'button', 'aria-label': 'Book a repair: ' + s.name, onclick: function () { bookService(s.id); } }, icon('fa-solid fa-calendar-check'), 'Book a Repair')));
      sel.append(h('option', { value: s.id, text: s.name }));
      fs.append(h('li', null, h('a', { href: '#repairs', text: s.name })));
    });
    sel.append(h('option', { value: OTHER_SERVICE.id, text: OTHER_SERVICE.name }));
  }

  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var phoneRe = /^\+?[0-9][0-9\s\-()]{6,19}$/;

  function setErr(input, msg) {
    var wrap = input.closest('.field'), out = $(input.id + 'Err');
    if (wrap) wrap.classList.toggle('has-error', !!msg);
    if (out) out.textContent = msg || '';
    if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
    return !msg;
  }
  function validateForm(rules) {
    var firstBad = null;
    rules.forEach(function (r) {
      var v = clean(r.el.value, r.max || 200), msg = '';
      if (r.required && !v) msg = r.label + ' is required.';
      else if (v && r.test && !r.test(v)) msg = r.error;
      if (!setErr(r.el, msg) && !firstBad) firstBad = r.el;
    });
    if (firstBad) firstBad.focus();
    return !firstBad;
  }
  function liveClear(form) {
    form.addEventListener('input', function (e) { if (e.target.id && $(e.target.id + 'Err')) setErr(e.target, ''); });
    form.addEventListener('change', function (e) { if (e.target.id && $(e.target.id + 'Err')) setErr(e.target, ''); });
  }
  function todayStr() { var d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }

  function resetBooking() {
    var s = $('bookingSuccess'), f = $('bookingForm');
    if (!s.hidden) { s.hidden = true; f.hidden = false; }
  }

  function initBooking() {
    var form = $('bookingForm'), date = $('bkDate');
    date.min = todayStr();
    liveClear(form);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = { name: $('bkName'), phone: $('bkPhone'), email: $('bkEmail'), device: $('bkDevice'), model: $('bkModel'), service: $('bkService'), date: date, problem: $('bkProblem') };
      var ok = validateForm([
        { el: f.name, label: 'Name', required: true, max: 80, test: function (v) { return v.length >= 2; }, error: 'Please enter your full name.' },
        { el: f.phone, label: 'Phone number', required: true, max: 22, test: function (v) { return phoneRe.test(v); }, error: 'Enter a valid phone number, e.g. +234 904 508 3638.' },
        { el: f.email, label: 'Email address', required: true, max: 100, test: function (v) { return emailRe.test(v); }, error: 'Enter a valid email address.' },
        { el: f.device, label: 'Device type', required: true },
        { el: f.model, label: 'Brand / model', required: true, max: 80 },
        { el: f.service, label: 'Repair service', required: true },
        { el: f.date, label: 'Preferred date', required: true, max: 10, test: function (v) { return /^\d{4}-\d{2}-\d{2}$/.test(v) && v >= todayStr(); }, error: 'Choose today or a future date.' },
        { el: f.problem, label: 'Problem description', required: true, max: 600, test: function (v) { return v.length >= 10; }, error: 'Please describe the problem (at least 10 characters).' }
      ]);
      if (!ok) return;
      var svc = SERVICES.concat([OTHER_SERVICE]).filter(function (s) { return s.id === f.service.value; })[0];
      var when = new Date(f.date.value + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      var msg = '*New Repair Request - ' + CONFIG.business + '*\n\n' +
        '*Name:* ' + clean(f.name.value, 80) + '\n' +
        '*Phone:* ' + clean(f.phone.value, 22) + '\n' +
        '*Email:* ' + clean(f.email.value, 100) + '\n' +
        '*Device:* ' + clean(f.device.value, 40) + ' - ' + clean(f.model.value, 80) + '\n' +
        '*Service needed:* ' + (svc ? svc.name : 'Not specified') + '\n' +
        '*Preferred date:* ' + when + '\n\n' +
        '*Problem:*\n' + clean(f.problem.value, 600) + '\n\n' +
        'Please confirm availability and an estimate. Thank you.';
      var url = waLink(msg);
      $('bookingRetry').href = url;
      openWhatsApp(msg);
      form.hidden = true; var s = $('bookingSuccess'); s.hidden = false; s.focus();
      form.reset();
    });
    $('bookingReset').addEventListener('click', function () { resetBooking(); $('bkName').focus(); });
  }

  /* ---------------- GALLERY + LIGHTBOX ---------------- */
  var galleryFilter = 'all', visibleGallery = [], lbIndex = 0;

  function renderGallery() {
    visibleGallery = GALLERY.filter(function (g) { return galleryFilter === 'all' || g.cat === galleryFilter; });
    var grid = $('galleryGrid'); grid.textContent = '';
    visibleGallery.forEach(function (g, i) {
      var b = h('button', { type: 'button', class: 'g-item', 'aria-label': 'View larger: ' + g.title, onclick: function () { openLightbox(i); } },
        h('img', { src: g.src, alt: g.alt, width: 800, height: 600, loading: 'lazy', decoding: 'async' }),
        h('span', { class: 'g-item__overlay' }, h('span', { text: g.cat === 'repair' ? 'Repair' : 'Gadget sales' }), h('strong', { text: g.title })));
      b.style.animationDelay = Math.min(i, 10) * 35 + 'ms';
      grid.append(b);
    });
  }

  function showLightbox(i) {
    var n = visibleGallery.length; if (!n) return;
    lbIndex = (i + n) % n;
    var g = visibleGallery[lbIndex];
    $('lbImg').src = g.src; $('lbImg').alt = g.alt;
    $('lbTitle').textContent = g.title; $('lbCount').textContent = (lbIndex + 1) + ' / ' + n;
  }
  function openLightbox(i) { showLightbox(i); openDialog($('lightbox')); }

  function initGallery() {
    var tabs = $('galleryFilters');
    tabs.addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      galleryFilter = b.getAttribute('data-filter');
      tabs.querySelectorAll('.chip').forEach(function (c) { var on = c === b; c.classList.toggle('is-active', on); c.setAttribute('aria-pressed', String(on)); });
      renderGallery();
    });
    var lb = $('lightbox');
    $('lbClose').addEventListener('click', function () { closeDialog(lb); });
    $('lbPrev').addEventListener('click', function () { showLightbox(lbIndex - 1); });
    $('lbNext').addEventListener('click', function () { showLightbox(lbIndex + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) closeDialog(lb); });
    lb.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); showLightbox(lbIndex - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); showLightbox(lbIndex + 1); }
    });
    var x0 = null;
    lb.addEventListener('touchstart', function (e) { x0 = e.changedTouches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 50) showLightbox(lbIndex + (dx < 0 ? 1 : -1));
    }, { passive: true });
    [lb, $('productDialog')].forEach(function (d) {
      d.addEventListener('close', function () { lock(d.id, false); });
      d.addEventListener('cancel', function () { lock(d.id, false); });
    });
    renderGallery();
  }

  function initProductDialog() {
    var d = $('productDialog');
    d.addEventListener('click', function (e) { if (e.target === d || e.target.closest('[data-close]')) closeDialog(d); });
  }

  /* ---------------- TESTIMONIALS ---------------- */
  function initSlider() {
    var track = $('sliderTrack'), dots = $('sliderDots'), slider = $('slider');
    TESTIMONIALS.forEach(function (t) {
      var stars = '';
      for (var i = 0; i < 5; i++) stars += i < t.rating ? '\u2605' : '\u2606';
      track.append(h('div', { class: 'slide', role: 'group', 'aria-roledescription': 'slide' },
        h('div', { class: 'quote' },
          h('span', { class: 'demo-tag', text: 'Sample / demo' }),
          h('div', { class: 'stars', role: 'img', 'aria-label': t.rating + ' out of 5 stars', text: stars }),
          h('blockquote', { text: t.text }),
          h('footer', null, h('span', { class: 'avatar', 'aria-hidden': 'true', text: t.name.charAt(0) }),
            h('div', null, h('cite', { text: t.name }), h('small', { text: t.item }))))));
    });
    var idx = 0, per = 1, timer = null;
    function calcPer() { var w = window.innerWidth; return w >= 1080 ? 3 : w >= 760 ? 2 : 1; }
    function pages() { return Math.max(1, TESTIMONIALS.length - per + 1); }
    function buildDots() {
      dots.textContent = '';
      for (var i = 0; i < pages(); i++) (function (n) {
        dots.append(h('button', { type: 'button', class: 'dot', 'aria-label': 'Go to testimonial ' + (n + 1), onclick: function () { go(n); restart(true); } }));
      })(i);
    }
    function go(n) {
      idx = (n + pages()) % pages();
      track.style.transform = 'translateX(' + (-idx * (100 / per)) + '%)';
      [].forEach.call(dots.children, function (d, i) { if (i === idx) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current'); });
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function start() { if (reducedMotion || timer) return; timer = setInterval(function () { go(idx + 1); }, CONFIG.autoplayMs); }
    function restart(userAction) { stop(); if (!userAction) start(); }
    function layout() { per = calcPer(); buildDots(); go(Math.min(idx, pages() - 1)); }
    $('sliderPrev').addEventListener('click', function () { go(idx - 1); restart(true); });
    $('sliderNext').addEventListener('click', function () { go(idx + 1); restart(true); });
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', function () { if (!slider.contains(document.activeElement)) start(); });
    slider.addEventListener('focusin', stop);
    slider.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') go(idx - 1); if (e.key === 'ArrowRight') go(idx + 1); });
    var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(layout, 150); });
    var x0 = null;
    slider.addEventListener('touchstart', function (e) { x0 = e.changedTouches[0].clientX; stop(); }, { passive: true });
    slider.addEventListener('touchend', function (e) {
      if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 50) go(idx + (dx < 0 ? 1 : -1));
    }, { passive: true });
    layout(); start();
  }

  /* ---------------- CONTACT FORM ---------------- */
  function initContact() {
    var form = $('contactForm'); liveClear(form);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = { name: $('ctName'), email: $('ctEmail'), phone: $('ctPhone'), message: $('ctMessage') };
      var ok = validateForm([
        { el: f.name, label: 'Name', required: true, max: 80, test: function (v) { return v.length >= 2; }, error: 'Please enter your full name.' },
        { el: f.email, label: 'Email address', required: true, max: 100, test: function (v) { return emailRe.test(v); }, error: 'Enter a valid email address.' },
        { el: f.phone, label: 'Phone', required: false, max: 22, test: function (v) { return phoneRe.test(v); }, error: 'Enter a valid phone number or leave it blank.' },
        { el: f.message, label: 'Message', required: true, max: 800, test: function (v) { return v.length >= 10; }, error: 'Please write at least 10 characters.' }
      ]);
      if (!ok) return;
      var phone = clean(f.phone.value, 22);
      var msg = '*New message - ' + CONFIG.business + ' website*\n\n*Name:* ' + clean(f.name.value, 80) + '\n*Email:* ' + clean(f.email.value, 100) +
        (phone ? '\n*Phone:* ' + phone : '') + '\n\n' + clean(f.message.value, 800);
      openWhatsApp(msg);
      $('contactStatus').textContent = 'Thank you. WhatsApp should have opened with your message. Press send there to reach our team.';
      form.reset();
    });
  }

  /* ---------------- INIT ---------------- */
  function init() {
    initWhatsAppLinks();
    initNav();
    initProductDialog();
    initCart();
    initProducts();
    initRepairs();
    initBooking();
    initGallery();
    initSlider();
    initContact();
    initReveal();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
