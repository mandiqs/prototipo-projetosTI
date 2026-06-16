/* ============================ UniRango — App Logic ============================ */

/* -------- Mock data (real establishment photos via Unsplash) -------- */
const restaurants = [
  { id: 1, name: "Cantina da Puc", category: "Refeição", photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", rating: 4.7, reviews: 127, distance: "50m", time: "10 min", priceRange: "R$ 15–25", tags: ["Destaque", "Mais Próximo"], color: "#951213", grad: "linear-gradient(135deg,#951213,#c0392b)", featured: true, isFavorite: true },
  { id: 2, name: "Burger Bros", category: "Lanches", photo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", rating: 4.5, reviews: 89, distance: "200m", time: "20 min", priceRange: "R$ 20–40", tags: ["Popular"], color: "#e67e22", grad: "linear-gradient(135deg,#e67e22,#d35400)", featured: false, isFavorite: false },
  { id: 3, name: "Green Salads", category: "Vegano", photo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80", rating: 4.8, reviews: 64, distance: "120m", time: "12 min", priceRange: "R$ 18–35", tags: ["Destaque", "Saudável"], color: "#27ae60", grad: "linear-gradient(135deg,#27ae60,#16a085)", featured: true, isFavorite: true },
  { id: 4, name: "Café Central", category: "Café", photo: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80", rating: 4.3, reviews: 152, distance: "80m", time: "5 min", priceRange: "R$ 8–20", tags: ["Mais Próximo"], color: "#8d6e63", grad: "linear-gradient(135deg,#8d6e63,#5d4037)", featured: false, isFavorite: false },
  { id: 5, name: "Massa & Cia", category: "Refeição", photo: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80", rating: 4.6, reviews: 73, distance: "350m", time: "25 min", priceRange: "R$ 22–45", tags: ["Destaque"], color: "#c0392b", grad: "linear-gradient(135deg,#c0392b,#922b21)", featured: true, isFavorite: false },
  { id: 6, name: "Tapioca Express", category: "Lanches", photo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80", rating: 4.4, reviews: 41, distance: "180m", time: "8 min", priceRange: "R$ 12–22", tags: ["Rápido"], color: "#f39c12", grad: "linear-gradient(135deg,#f39c12,#e67e22)", featured: false, isFavorite: false },
];

const categories = [
  { id: "Todos", emoji: "🍽️", label: "Todos" },
  { id: "Lanches", emoji: "🥙", label: "Lanches" },
  { id: "Refeição", emoji: "🍱", label: "Refeição" },
  { id: "Vegano", emoji: "🥗", label: "Vegano" },
  { id: "Café", emoji: "☕", label: "Café" },
  { id: "Sobremesa", emoji: "🍰", label: "Sobremesa" },
];

const menuData = {
  "Pratos Principais": [
    { name: "Prato Feito Executivo", desc: "Arroz, feijão, proteína e salada", price: "R$ 18,90", top: true },
    { name: "Frango Grelhado + Acompanhamentos", desc: "Filé de frango, purê e legumes", price: "R$ 22,50", top: false },
    { name: "Massa ao Molho", desc: "Penne ao sugo da casa com manjericão", price: "R$ 19,90", top: false },
  ],
  "Lanches": [
    { name: "X-Tudo", desc: "Hambúrguer, ovo, bacon, queijo e salada", price: "R$ 24,90", top: true },
    { name: "X-Salada", desc: "Hambúrguer, queijo, alface e tomate", price: "R$ 19,90", top: false },
  ],
};

const reviewsData = [
  { initials: "JM", name: "João Martins", color: "#951213", stars: 5, date: "12 jun 2026", text: "Comida boa e barata, perfeito pra matar a fome entre as aulas. Fila anda rápido!" },
  { initials: "LS", name: "Larissa Souza", color: "#27ae60", stars: 4, date: "08 jun 2026", text: "Ótimo custo-benefício. O prato executivo é generoso. Só lota muito no horário de pico." },
  { initials: "PR", name: "Pedro Ramos", color: "#e67e22", stars: 5, date: "01 jun 2026", text: "Melhor opção perto do bloco vermelho. Atendimento simpático e preço justo." },
];

const notificationsData = [
  { ic: "tag", title: "Cantina da Puc", text: "Prato executivo com 10% de desconto só hoje! 🍽️", date: "há 5 min", unread: true },
  { ic: "utensils-crossed", title: "Burger Bros", text: "Seu lanche favorito está disponível agora.", date: "há 1 h", unread: true },
  { ic: "sparkles", title: "UniRango", text: "3 novos restaurantes apareceram perto do campus.", date: "há 3 h", unread: false },
  { ic: "star", title: "Green Salads", text: "Que tal avaliar sua última visita? ⭐", date: "ontem", unread: false },
];

const myReviewsData = [
  { rest: "Cantina da Puc", stars: 5, date: "14 jun 2026", text: "Prato executivo excelente e a fila anda super rápido. Virou meu ponto fixo!" },
  { rest: "Café Central", stars: 4, date: "02 jun 2026", text: "Café muito bom e barato. Só o wi-fi que cai de vez em quando." },
  { rest: "Green Salads", stars: 5, date: "28 mai 2026", text: "Saladas fresquíssimas, recomendo o bowl vegano. Atendimento ótimo." },
];

/* -------- Icons (Lucide) -------- */
function icon(name, extra = "") { return `<i data-lucide="${name}" ${extra}></i>`; }

/* -------- Logo -------- */
function logoMark(size = 40) {
  return `<span class="logo-mark"><svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="14" fill="#951213"/>
    <circle cx="33" cy="15" r="5.5" fill="#ffc95f"/>
    <path d="M17 13v5M20.5 13v5M24 13v5" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M20.5 18v18" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M30 13c3 2.2 3 7.5 0 9.6V36" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg></span>`;
}
function logoFull() {
  return `<div class="home-logo">${logoMark(38)}<span class="logo-wordmark"><b>Uni</b>Rango</span></div>`;
}

/* -------- State -------- */
let activeCategory = "Todos";
let openFilterGroup = null;
const filters = { distance: null, price: null, type: null, rating: null };
let navStack = [];
let currentScreen = null;

/* ============================ Card builders ============================ */
function photoStyle(r) {
  return `background-image:url('${r.photo}');background-color:${r.color};`;
}

function rcardHTML(r) {
  return `
  <div class="rcard" data-open="${r.id}">
    <div class="rcard-photo" style="${photoStyle(r)}">
      <span class="badge-distance">${icon("map-pin")} ${r.distance}</span>
      <button class="heart-btn ${r.isFavorite ? "fav" : ""}" data-fav="${r.id}">${icon("heart")}</button>
    </div>
    <div class="rcard-body">
      <div class="name">${r.name}</div>
      <div class="cuisine">${r.category}</div>
      <div class="rcard-meta">
        <span class="m star">${icon("star")} ${r.rating}</span>
        <span class="m">${icon("clock")} ${r.time}</span>
      </div>
      <div class="rcard-price">${r.priceRange}</div>
    </div>
  </div>`;
}

function fcardHTML(r) {
  return `
  <div class="fcard" data-open="${r.id}">
    <div class="fcard-photo" style="${photoStyle(r)}"></div>
    <div class="fcard-body">
      <div class="fcard-top">
        <div>
          <div class="name">${r.name}</div>
          <div class="cuisine">${r.category} · ${r.distance}</div>
        </div>
        <span class="badge-featured">DESTAQUE</span>
      </div>
      <div class="rcard-meta" style="margin-top:auto;">
        <span class="m star">${icon("star")} ${r.rating}</span>
        <span class="m">${icon("clock")} ${r.time}</span>
        <span class="m" style="color:var(--wine);font-weight:500;">${r.priceRange}</span>
      </div>
    </div>
  </div>`;
}

function listCardHTML(r) {
  return `
  <div class="list-card" data-open="${r.id}">
    <div class="list-thumb" style="${photoStyle(r)}"></div>
    <div class="list-info">
      <div class="name">${r.name}</div>
      <div class="cuisine">${r.category} · ${r.time}</div>
    </div>
    <div class="list-right">
      <div class="rate star">${icon("star")} ${r.rating}</div>
      <div class="price">${r.priceRange}</div>
      <div class="dist">${r.distance}</div>
    </div>
  </div>`;
}

function bottomNav(active) {
  const items = [
    { id: "home", label: "Home", ic: "house" },
    { id: "search", label: "Buscar", ic: "search" },
    { id: "favorites", label: "Favoritos", ic: "heart" },
    { id: "profile", label: "Perfil", ic: "user" },
  ];
  return `<nav class="bottom-nav">
    ${items.map(i => `<button class="nav-item ${active === i.id ? "active" : ""}" data-nav="${i.id}">${icon(i.ic)}<span>${i.label}</span></button>`).join("")}
  </nav>`;
}

/* Sub-page wrapper with back arrow */
function subPage(id, title, body) {
  return `
  <div class="screen" id="screen-${id}">
    <div class="sub-header">
      <button class="icon-btn ghost" data-back>${icon("arrow-left")}</button>
      <h1>${title}</h1>
    </div>
    <div class="screen-scroll">${body}</div>
  </div>`;
}

/* ============================ Home ============================ */
function buildHome() {
  const near = restaurants;
  const featured = restaurants.filter(r => r.featured);
  return `
  <div class="screen has-bottom-nav" id="screen-home">
    <div class="screen-scroll">
      <div class="home-topbar">
        ${logoFull()}
        <button class="icon-btn" data-nav="notifications">${icon("bell")}<span class="dot"></span></button>
      </div>
      <header class="app-header greeting">
        <div>
          <h1>Olá, Amanda</h1>
          <div class="sub">O que você quer comer hoje?</div>
        </div>
      </header>

      <div class="search-bar" data-nav="search">
        ${icon("search")}
        <input type="text" placeholder="Buscar restaurantes, pratos..." readonly />
      </div>

      <div class="chip-row" id="home-chips">
        ${categories.map(c => `<button class="chip ${c.id === activeCategory ? "active" : ""}" data-cat="${c.id}"><span class="emoji">${c.emoji}</span>${c.label}</button>`).join("")}
      </div>

      <div class="section-title"><h2>Próximos a você</h2><span class="link" data-nav="search">Ver todos</span></div>
      <div class="carousel-wrap">
        <div class="h-scroll" id="home-near">${near.map(rcardHTML).join("")}</div>
        <button class="carousel-arrow" data-scroll="home-near" aria-label="Ver mais">${icon("chevron-right")}</button>
      </div>

      <div class="section-title"><h2>Destaques</h2></div>
      <div id="home-featured">${featured.map(fcardHTML).join("")}</div>
    </div>
    ${bottomNav("home")}
  </div>`;
}

function refreshHomeFilter() {
  const near = activeCategory === "Todos" ? restaurants : restaurants.filter(r => r.category === activeCategory);
  const featured = (activeCategory === "Todos" ? restaurants.filter(r => r.featured) : restaurants.filter(r => r.featured && r.category === activeCategory));
  const nearEl = document.getElementById("home-near");
  const featEl = document.getElementById("home-featured");
  nearEl.innerHTML = near.length ? near.map(rcardHTML).join("") : `<div style="padding:20px;color:var(--text-mid);font-size:14px;">Nada por aqui ainda.</div>`;
  featEl.innerHTML = featured.length ? featured.map(fcardHTML).join("") : `<div class="empty-state" style="padding:30px;"><div class="es">Nenhum destaque nesta categoria.</div></div>`;
  lucide.createIcons();
}

/* ============================ Search + functional filters ============================ */
const filterDefs = {
  distance: {
    label: "Distância",
    options: [
      { k: "100", t: "Até 100m" },
      { k: "300", t: "Até 300m" },
      { k: "500", t: "Até 500m" },
      { k: "1000", t: "Até 1km" },
      { k: "2000", t: "Até 2km" },
    ],
  },
  price: {
    label: "Preço",
    options: [
      { k: "cheap", t: "Até R$25" },
      { k: "mid", t: "R$25 – R$40" },
      { k: "high", t: "R$40+" },
    ],
  },
  type: {
    label: "Tipo",
    options: categories.filter(c => c.id !== "Todos").map(c => ({ k: c.id, t: c.label })),
  },
  rating: {
    label: "Avaliação",
    options: [
      { k: "4.0", t: "4.0+" },
      { k: "4.5", t: "4.5+" },
      { k: "4.7", t: "4.7+" },
    ],
  },
};

function priceMax(r) { const m = r.priceRange.match(/(\d+)\D*$/); return m ? +m[1] : 999; }

function buildSearch() {
  return `
  <div class="screen has-bottom-nav" id="screen-search">
    <div class="search-header">
      <button class="icon-btn ghost" data-back>${icon("arrow-left")}</button>
      <div class="search-bar">
        ${icon("search")}
        <input type="text" id="search-input" placeholder="Buscar restaurantes, pratos..." />
      </div>
      <button class="search-cancel" data-nav="home">Cancelar</button>
    </div>

    <div class="filter-row" id="filter-row">
      ${Object.keys(filterDefs).map(g => filterPillHTML(g)).join("")}
    </div>
    <div class="filter-drawer" id="filter-drawer"></div>

    <div class="screen-scroll" style="padding-top:6px;">
      <div id="search-results">${restaurants.map(listCardHTML).join("")}</div>
    </div>
    ${bottomNav("search")}
  </div>`;
}

function filterPillHTML(g) {
  const def = filterDefs[g];
  const sel = filters[g];
  const selText = sel ? (def.options.find(o => o.k === sel) || {}).t : null;
  return `<button class="filter-pill ${sel ? "active" : ""}" data-filter="${g}">
    ${icon("sliders-horizontal")} ${def.label}${selText ? ` · <span class="fval">${selText}</span>` : ""}
    ${icon("chevron-down")}
  </button>`;
}

function rebuildFilterRow() {
  const row = document.getElementById("filter-row");
  if (row) { row.innerHTML = Object.keys(filterDefs).map(g => filterPillHTML(g)).join(""); lucide.createIcons(); }
}

function openDrawer(group) {
  const drawer = document.getElementById("filter-drawer");
  const def = filterDefs[group];
  drawer.innerHTML = `<div class="drawer-title">${def.label}</div>` +
    def.options.map(o => `<div class="opt ${filters[group] === o.k ? "sel" : ""}" data-opt="${group}|${o.k}">${o.t}</div>`).join("") +
    `<div class="opt" data-opt="${group}|" style="border-color:var(--wine);color:var(--wine);">Limpar</div>`;
  drawer.classList.add("open");
}

function applyFilterOption(group, key) {
  filters[group] = key || null;
  openFilterGroup = null;
  document.getElementById("filter-drawer").classList.remove("open");
  rebuildFilterRow();
  renderSearchResults();
}

function passesFilters(r) {
  if (filters.distance && parseInt(r.distance) > +filters.distance) return false;
  if (filters.rating && r.rating < +filters.rating) return false;
  if (filters.type && r.category !== filters.type) return false;
  if (filters.price) {
    const mx = priceMax(r);
    if (filters.price === "cheap" && mx > 25) return false;
    if (filters.price === "mid" && (mx <= 25 || mx > 40)) return false;
    if (filters.price === "high" && mx <= 40) return false;
  }
  return true;
}

function renderSearchResults() {
  const input = document.getElementById("search-input");
  const q = (input?.value || "").trim().toLowerCase();
  const list = restaurants.filter(r =>
    (r.name.toLowerCase().includes(q) || r.category.toLowerCase().includes(q)) && passesFilters(r)
  );
  const el = document.getElementById("search-results");
  if (!list.length) {
    el.innerHTML = `<div class="empty-state">${icon("search-x")}<div class="et">Nenhum restaurante encontrado</div><div class="es">Tente outro filtro ou termo de busca.</div></div>`;
  } else {
    el.innerHTML = list.map(listCardHTML).join("");
  }
  lucide.createIcons();
}

/* ============================ Favorites ============================ */
function buildFavorites() {
  const favs = restaurants.filter(r => r.isFavorite);
  let body;
  if (favs.length) {
    body = `<div style="padding-top:6px;">${favs.map(listCardHTML).join("")}</div>`;
  } else {
    body = `<div class="empty-state">${icon("heart")}<div class="et">Você ainda não salvou nenhum restaurante</div><div class="es">Toque no coração nos restaurantes que você curtir.</div><button class="btn-secondary" data-nav="home" style="margin-top:10px;">Explorar restaurantes</button></div>`;
  }
  return `
  <div class="screen has-bottom-nav" id="screen-favorites">
    <div class="plain-header with-back">
      <button class="icon-btn ghost" data-back>${icon("arrow-left")}</button>
      <h1>Meus Favoritos</h1>
    </div>
    <div class="screen-scroll">${body}</div>
    ${bottomNav("favorites")}
  </div>`;
}

/* ============================ Profile ============================ */
function buildProfile() {
  const links = [
    { ic: "bell", label: "Notificações", nav: "notifications" },
    { ic: "heart", label: "Favoritos", nav: "favorites" },
    { ic: "star", label: "Minhas Avaliações", nav: "reviews" },
    { ic: "shield", label: "Privacidade e LGPD", nav: "privacy" },
    { ic: "info", label: "Sobre o UniRango", nav: "about" },
  ];
  return `
  <div class="screen has-bottom-nav" id="screen-profile">
    <div class="screen-scroll" style="padding-bottom:88px;">
      <div class="profile-top">
        <div class="profile-avatar">AQ</div>
        <div class="pname">Amanda Queiroz</div>
        <div class="pmail">amanda@pucpr.edu.br</div>
        <div class="profile-badge">Estudante PUCPR</div>
      </div>
      <div class="menu-list">
        ${links.map(l => `<div class="menu-link" data-nav="${l.nav}"><div class="ml-icon">${icon(l.ic)}</div><div class="ml-label">${l.label}</div><span class="chev">${icon("chevron-right")}</span></div>`).join("")}
        <div class="menu-link danger" data-action="logout"><div class="ml-icon">${icon("log-out")}</div><div class="ml-label">Sair</div><span class="chev">${icon("chevron-right")}</span></div>
      </div>
      <div class="profile-footer">UniRango v1.0 • Desenvolvido na PUCPR</div>
    </div>
    ${bottomNav("profile")}
  </div>`;
}

/* ============================ Sub pages ============================ */
function buildNotifications() {
  const body = `<div style="padding-top:8px;">${notificationsData.map(n => `
    <div class="notif-card ${n.unread ? "unread" : ""}">
      <div class="notif-icon">${icon(n.ic)}</div>
      <div class="notif-body">
        <div class="nt">${n.title}</div>
        <div class="nx">${n.text}</div>
        <div class="nd">${n.date}</div>
      </div>
    </div>`).join("")}</div>`;
  return subPage("notifications", "Notificações", body);
}

function buildReviews() {
  const body = `<div style="padding-top:8px;">${myReviewsData.map(rv => `
    <div class="myrev-card">
      <div class="myrev-top">
        <div class="mr-rest">${rv.rest}</div>
        <div class="mr-date">${rv.date}</div>
      </div>
      <div class="myrev-stars">${Array.from({length: rv.stars}).map(() => icon("star")).join("")}</div>
      <div class="myrev-text">${rv.text}</div>
    </div>`).join("")}</div>`;
  return subPage("reviews", "Minhas Avaliações", body);
}

function buildPrivacy() {
  const body = `<div class="text-page">
    <h3>Seus dados, suas regras</h3>
    <p>O UniRango respeita a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Coletamos apenas os dados necessários para você encontrar restaurantes perto do campus.</p>
    <h3>O que coletamos</h3>
    <p>Nome, e-mail institucional e sua localização aproximada (somente quando o app está aberto) para calcular distâncias até os estabelecimentos.</p>
    <h3>Como usamos</h3>
    <p>Para personalizar recomendações, exibir avaliações e enviar notificações sobre promoções próximas. Nunca vendemos seus dados a terceiros.</p>
    <h3>Seus direitos</h3>
    <p>Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail privacidade@unirango.com.br.</p>
  </div>`;
  return subPage("privacy", "Privacidade e LGPD", body);
}

function buildAbout() {
  const body = `
    <div class="about-hero">
      <div class="ah-logo">${logoMark(64)}</div>
      <div class="ah-name"><b>Uni</b>Rango</div>
      <div class="ah-ver">Versão 1.0</div>
    </div>
    <div class="text-page">
      <h3>Nossa missão</h3>
      <p>O UniRango nasceu na PUCPR para resolver um problema real: estudantes perdem tempo procurando onde comer entre as aulas, sem saber preço, cardápio ou distância.</p>
      <h3>Como funciona</h3>
      <p>Centralizamos informações de restaurantes próximos ao campus — cardápio, faixa de preço, tempo de espera e avaliações reais de quem estuda onde você estuda.</p>
      <h3>Feito por estudantes</h3>
      <p>Projeto acadêmico desenvolvido por estudantes da PUCPR (Curitiba), pensado para a rotina de quem vive o campus todos os dias.</p>
      <p style="color:var(--text-light);margin-top:14px;">UniRango v1.0 • Desenvolvido na PUCPR</p>
    </div>`;
  return subPage("about", "Sobre o UniRango", body);
}

/* ============================ Login / Signup ============================ */
function buildLogin() {
  return `
  <div class="screen" id="screen-login">
    <div class="login-scroll">
      <div class="login-hero">
        <button class="login-back" data-back>${icon("arrow-left")}</button>
        ${logoMark(56)}
        <div class="lh-title">UniRango</div>
        <div class="lh-sub">Coma bem, gaste menos.</div>
      </div>
      <div class="login-body">
        <div class="seg-tabs">
          <button class="seg-tab active" data-mode="login">Entrar</button>
          <button class="seg-tab" data-mode="signup">Criar conta</button>
        </div>

        <div class="field signup-only">
          <label>Nome completo</label>
          <div class="input-wrap">${icon("user")}<input type="text" placeholder="Seu nome" /></div>
        </div>
        <div class="field">
          <label>E-mail</label>
          <div class="input-wrap">${icon("mail")}<input type="email" placeholder="voce@pucpr.edu.br" /></div>
        </div>
        <div class="field">
          <label>Senha</label>
          <div class="input-wrap">${icon("lock")}<input type="password" placeholder="••••••••" /></div>
        </div>
        <div class="field signup-only">
          <label>Confirmar senha</label>
          <div class="input-wrap">${icon("lock")}<input type="password" placeholder="••••••••" /></div>
        </div>

        <div class="login-forgot">Esqueci minha senha</div>

        <button class="btn-primary" id="login-submit">Entrar</button>

        <div class="login-divider">ou</div>
        <button class="btn-secondary" style="width:100%;" data-action="guest">Continuar como visitante</button>

        <div class="login-guest" id="login-switch">
          Não tem conta? <span>Criar agora</span>
        </div>
      </div>
    </div>
  </div>`;
}

let loginMode = "login";
function initLogin() {
  const screen = document.getElementById("screen-login");
  const submit = document.getElementById("login-submit");
  const switchEl = document.getElementById("login-switch");

  function setMode(mode) {
    loginMode = mode;
    screen.classList.toggle("signup", mode === "signup");
    screen.querySelectorAll(".seg-tab").forEach(t => t.classList.toggle("active", t.dataset.mode === mode));
    submit.textContent = mode === "signup" ? "Criar conta" : "Entrar";
    switchEl.innerHTML = mode === "signup"
      ? `Já tem conta? <span>Entrar</span>`
      : `Não tem conta? <span>Criar agora</span>`;
  }

  screen.querySelectorAll(".seg-tab").forEach(t => t.addEventListener("click", () => setMode(t.dataset.mode)));
  switchEl.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") setMode(loginMode === "login" ? "signup" : "login");
  });
  submit.addEventListener("click", () => {
    showToast(loginMode === "signup" ? "Conta criada! Bem-vinda 🎉" : "Bem-vinda de volta 👋");
    setTimeout(() => { navStack = []; navigate("home", null, { replace: true }); }, 600);
  });
  setMode("login");
}

/* ============================ Restaurant detail ============================ */
function buildRestaurant(r) {
  return `
  <div class="screen" id="screen-restaurant">
    <div class="screen-scroll" style="padding-bottom:0;">
      <div class="detail-hero" style="${photoStyle(r)}">
        <button class="hero-back" data-back>${icon("arrow-left")}</button>
        <button class="hero-fav ${r.isFavorite ? "fav" : ""}" data-fav="${r.id}" data-hero>${icon("heart")}</button>
        <div class="hero-name">${r.name}<span class="htag">${r.category} · ${r.tags.join(" · ")}</span></div>
      </div>

      <div class="detail-body">
        <div class="quick-pills">
          <div class="qpill"><div class="v star">${icon("star")} ${r.rating}</div><div class="l">${r.reviews} avaliações</div></div>
          <div class="qpill"><div class="v">${icon("map-pin")} ${r.distance}</div><div class="l">do campus</div></div>
          <div class="qpill"><div class="v">${icon("clock")} ${r.time}</div><div class="l">de espera</div></div>
        </div>

        <div class="tabs" id="detail-tabs">
          <button class="tab active" data-tab="0">Cardápio</button>
          <button class="tab" data-tab="1">Avaliações</button>
          <button class="tab" data-tab="2">Info</button>
          <span class="tab-underline" id="tab-underline" style="transform:translateX(0%)"></span>
        </div>

        <div class="tab-content active" data-pane="0">
          ${Object.entries(menuData).map(([cat, items]) => `
            <div class="menu-cat">${cat}</div>
            ${items.map(it => `
              <div class="menu-item">
                <div class="mi-left">
                  <div class="mi-name">${it.name} ${it.top ? `<span class="badge-top">MAIS PEDIDO</span>` : ""}</div>
                  <div class="mi-desc">${it.desc}</div>
                </div>
                <div class="mi-price">${it.price}</div>
              </div>`).join("")}
          `).join("")}
        </div>

        <div class="tab-content" data-pane="1">
          ${reviewsData.map(rv => `
            <div class="review-card">
              <div class="review-head">
                <div class="avatar" style="background:${rv.color}">${rv.initials}</div>
                <div>
                  <div class="rh-name">${rv.name}</div>
                  <div class="rh-date">${rv.date}</div>
                </div>
              </div>
              <div class="review-stars">${Array.from({length: rv.stars}).map(() => icon("star")).join("")}</div>
              <div class="review-text">${rv.text}</div>
            </div>`).join("")}
        </div>

        <div class="tab-content" data-pane="2">
          <div class="info-row">${icon("map-pin")}<div><div class="ir-label">Endereço</div><div class="ir-value">R. Imaculada Conceição, 1155 — Prado Velho, Curitiba</div></div></div>
          <div class="info-row">${icon("clock")}<div><div class="ir-label">Horário</div><div class="ir-value">Seg–Sex · 11h às 15h</div></div></div>
          <div class="info-row">${icon("wallet")}<div><div class="ir-label">Formas de pagamento</div><div class="ir-value">Dinheiro · PIX · Cartão</div></div></div>
        </div>
      </div>
    </div>
  </div>`;
}

/* ============================ Splash + Onboarding ============================ */
function buildSplash() {
  return `
  <div class="screen" id="screen-splash">
    <div class="splash-inner">
      <div class="splash-icon">${logoMark(58)}</div>
      <div class="splash-logo">UniRango</div>
      <div class="splash-sub">Coma bem, gaste menos.</div>
      <button class="splash-btn" data-nav="onboarding">Próximo</button>
    </div>
  </div>`;
}

const onbSlides = [
  { illu: illuMap(), title: "Restaurantes perto de você", text: "Encontre opções de alimentação a poucos metros do campus." },
  { illu: illuClock(), title: "Sem perder tempo", text: "Veja cardápio, preço e tempo de espera antes de sair." },
  { illu: illuStar(), title: "Avaliado pelos seus colegas", text: "Opiniões reais de quem estuda onde você estuda." },
];

function buildOnboarding() {
  return `
  <div class="screen" id="screen-onboarding">
    <button class="onb-skip" data-skip>Pular</button>
    <div class="onb-track" id="onb-track">
      ${onbSlides.map(s => `
        <div class="onb-slide">
          <div class="onb-illu">${s.illu}</div>
          <div class="onb-title">${s.title}</div>
          <div class="onb-text">${s.text}</div>
        </div>`).join("")}
    </div>
    <div class="onb-footer">
      <div class="onb-dots" id="onb-dots"><span class="on"></span><span></span><span></span></div>
      <button class="btn-primary" id="onb-next">Próximo</button>
    </div>
  </div>`;
}

function illuMap() {
  return `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="30" width="160" height="140" rx="16" fill="#eaeaec"/>
    <path d="M20 110 Q60 90 100 110 T180 100" stroke="#ffc95f" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M40 60 Q80 50 120 70 T180 60" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M120 70c-13 0-23 10-23 23 0 16 23 40 23 40s23-24 23-40c0-13-10-23-23-23z" fill="#951213"/>
    <circle cx="120" cy="92" r="9" fill="#fff"/>
  </svg>`;
}
function illuClock() {
  return `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="78" cy="100" r="56" fill="#eaeaec"/>
    <circle cx="78" cy="100" r="44" fill="#fff"/>
    <path d="M78 100 L78 68 M78 100 L102 110" stroke="#951213" stroke-width="6" stroke-linecap="round"/>
    <circle cx="78" cy="100" r="6" fill="#951213"/>
    <circle cx="148" cy="118" r="40" fill="#ffc95f"/>
    <circle cx="148" cy="118" r="28" fill="#fff"/>
    <text x="148" y="128" font-size="26" text-anchor="middle">🍽️</text>
  </svg>`;
}
function illuStar() {
  return `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="70" fill="#eaeaec"/>
    <path d="M100 50 l14 30 33 4 -24 23 6 33 -29 -16 -29 16 6 -33 -24 -23 33 -4z" fill="#ffc95f" stroke="#951213" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="150" cy="60" r="9" fill="#951213"/>
    <circle cx="52" cy="140" r="7" fill="#951213"/>
  </svg>`;
}

/* ============================ Navigation engine ============================ */
const viewport = document.getElementById("viewport");
const builders = {
  splash: buildSplash,
  onboarding: buildOnboarding,
  home: buildHome,
  search: buildSearch,
  favorites: buildFavorites,
  profile: buildProfile,
  notifications: buildNotifications,
  reviews: buildReviews,
  privacy: buildPrivacy,
  about: buildAbout,
  login: buildLogin,
};
const mainScreens = ["home", "search", "favorites", "profile"];

function ensureScreen(name, data) {
  const id = "screen-" + name;
  const existing = document.getElementById(id);
  const html = name === "restaurant" ? buildRestaurant(data) : builders[name]();
  if (existing) existing.outerHTML = html;
  else viewport.insertAdjacentHTML("beforeend", html);
  lucide.createIcons();
  return document.getElementById(id);
}

function navigate(name, data, opts = {}) {
  const prev = currentScreen;
  const prevEl = prev ? document.getElementById("screen-" + prev) : null;
  const el = ensureScreen(name, data);

  if (!opts.replace && prev && prev !== name) {
    navStack.push(prev);
    if (navStack.length > 25) navStack.shift();
  }

  if (prevEl && prevEl !== el) {
    prevEl.classList.remove("active");
    prevEl.classList.add("leaving");
    setTimeout(() => prevEl.classList.remove("leaving"), 320);
  }

  el.classList.remove("leaving");
  requestAnimationFrame(() => el.classList.add("active"));
  currentScreen = name;

  if (name === "search") initSearch();
  if (name === "restaurant") initDetailTabs();
  if (name === "login") initLogin();
  if (name === "onboarding") initOnboardingControls();
}

function goBack() {
  if (navStack.length) navigate(navStack.pop(), null, { replace: true });
  else navigate("home", null, { replace: true });
}

/* ============================ Per-screen init ============================ */
function initSearch() {
  const input = document.getElementById("search-input");
  if (input) {
    input.addEventListener("input", renderSearchResults);
    setTimeout(() => input.focus(), 320);
  }
}

function initDetailTabs() {
  const tabs = document.getElementById("detail-tabs");
  if (!tabs) return;
  tabs.querySelectorAll(".tab").forEach(t => {
    t.addEventListener("click", () => {
      const idx = +t.dataset.tab;
      tabs.querySelectorAll(".tab").forEach(x => x.classList.remove("active"));
      t.classList.add("active");
      document.getElementById("tab-underline").style.transform = `translateX(${idx * 100}%)`;
      document.querySelectorAll("#screen-restaurant .tab-content").forEach(p => {
        p.classList.toggle("active", +p.dataset.pane === idx);
      });
    });
  });
}

/* ============================ Favorites toggle ============================ */
function toggleFavorite(id, btnEl) {
  const r = restaurants.find(x => x.id === id);
  if (!r) return;
  r.isFavorite = !r.isFavorite;
  if (btnEl) {
    btnEl.classList.toggle("fav", r.isFavorite);
    btnEl.classList.remove("heart-pop");
    void btnEl.offsetWidth;
    btnEl.classList.add("heart-pop");
  }
  showToast(r.isFavorite ? "❤️ Adicionado aos favoritos" : "Removido dos favoritos");
  document.querySelectorAll(`[data-fav="${id}"]`).forEach(b => b.classList.toggle("fav", r.isFavorite));
}

/* ============================ Toast ============================ */
let toastTimer;
function showToast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.className = "toast";
    viewport.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

/* ============================ Event delegation ============================ */
viewport.addEventListener("click", (e) => {
  const favBtn = e.target.closest("[data-fav]");
  if (favBtn) { e.stopPropagation(); toggleFavorite(+favBtn.dataset.fav, favBtn); return; }

  const back = e.target.closest("[data-back]");
  if (back) { goBack(); return; }

  const scroll = e.target.closest("[data-scroll]");
  if (scroll) {
    const c = document.getElementById(scroll.dataset.scroll);
    if (c) c.scrollBy({ left: 220, behavior: "smooth" });
    return;
  }

  const navBtn = e.target.closest("[data-nav]");
  if (navBtn) {
    const dest = navBtn.dataset.nav;
    if (mainScreens.includes(dest)) { navStack = []; navigate(dest, null, { replace: true }); }
    else navigate(dest);
    return;
  }

  const cat = e.target.closest("[data-cat]");
  if (cat) {
    activeCategory = cat.dataset.cat;
    document.querySelectorAll("#home-chips .chip").forEach(c => c.classList.toggle("active", c.dataset.cat === activeCategory));
    refreshHomeFilter();
    return;
  }

  const filter = e.target.closest("[data-filter]");
  if (filter) {
    const g = filter.dataset.filter;
    if (openFilterGroup === g) { openFilterGroup = null; document.getElementById("filter-drawer").classList.remove("open"); }
    else { openFilterGroup = g; openDrawer(g); }
    lucide.createIcons();
    return;
  }

  const opt = e.target.closest(".filter-drawer .opt");
  if (opt) {
    const [group, key] = opt.dataset.opt.split("|");
    applyFilterOption(group, key);
    return;
  }

  const open = e.target.closest("[data-open]");
  if (open) {
    const r = restaurants.find(x => x.id === +open.dataset.open);
    if (r) navigate("restaurant", r);
    return;
  }

  const action = e.target.closest("[data-action]");
  if (action) {
    if (action.dataset.action === "logout") { navStack = []; navigate("login", null, { replace: true }); }
    if (action.dataset.action === "guest") { navStack = []; navigate("home", null, { replace: true }); }
    return;
  }
});

/* ============================ Onboarding logic ============================ */
let onbIndex = 0;
function initOnboardingControls() {
  const track = document.getElementById("onb-track");
  const dots = document.getElementById("onb-dots").children;
  const nextBtn = document.getElementById("onb-next");
  const skip = document.querySelector("[data-skip]");
  onbIndex = 0;

  function render() {
    track.style.transform = `translateX(-${onbIndex * (100 / 3)}%)`;
    Array.from(dots).forEach((d, i) => d.classList.toggle("on", i === onbIndex));
    nextBtn.textContent = onbIndex === 2 ? "Começar" : "Próximo";
  }
  nextBtn.onclick = () => {
    if (onbIndex < 2) { onbIndex++; render(); }
    else navigate("home", null, { replace: true });
  };
  skip.onclick = () => navigate("home", null, { replace: true });
  render();
}

/* ============================ Responsive scaling ============================ */
function scaleFrame() {
  const fw = 390 + 24, fh = 844 + 24;
  const scale = Math.min(1, (window.innerWidth - 24) / fw, (window.innerHeight - 24) / fh);
  document.documentElement.style.setProperty("--frame-scale", scale.toFixed(3));
}
window.addEventListener("resize", scaleFrame);

/* ============================ Boot ============================ */
function boot() {
  scaleFrame();
  navigate("splash", null, { replace: true });
}

boot();
