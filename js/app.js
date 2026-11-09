const greetings = {
  pt: ["Olá", "E aí", "Oi"],
  en: ["Hi", "Hey", "Hello"],
};

const copy = {
  pt: {
    title: "Josemar Júnior — desenvolvedor fullstack",
    lede: "Desenvolvedor fullstack pleno. Arquiteto soluções que integram sistemas — e as pessoas que usam.",
    aboutTitle: "Sobre",
    about:
      "Sou desenvolvedor fullstack pleno no Grupo Solução & Cia, atuando em Salvador, na Bahia, e também em Luanda, Angola. Arquiteto soluções que integram sistemas — Flutter, TypeScript, Node.js, Angular, NestJS, RabbitMQ, Redis e Git Workflow. Antes, fui gestor de aplicações na mesma empresa: implantação, treinamento e a ponte entre operação e software. Estudei Análise e Desenvolvimento de Sistemas no IFBA, com foco em aplicativos e inteligência artificial. Uso agentes de IA com supervisão: código testável, seguro e com deploy contínuo. Gosto de resolver o problema real, o tipo que ninguém quer mexer no controle da TV de novo.",
    experienceTitle: "Experiência",
    educationTitle: "Formação",
    skillsTitle: "Skills",
    coursesTitle: "Cursos",
    workTitle: "Trabalhos selecionados",
    placesTitle: "Onde atuei",
    placesLede: "Clique no pin para ler a história.",
    heroRest: ", eu sou ",
    now: "agora",
    contactBadge: "Contato",
    contactTitle: "Vamos conversar",
    contactBody:
      "Manda um recado no LinkedIn ou escreve um e-mail. Sempre aberto a papo sobre produto, operação e código.",
    roles: {
      solucaoDev: {
        org: "Grupo Solução & Cia",
        role: "Desenvolvedor fullstack pleno. Arquitetura de soluções integrando sistemas — Flutter, TypeScript, Node.js, Angular, NestJS, RabbitMQ, Redis e Git Workflow.",
      },
      solucao: {
        org: "Grupo Solução & Cia",
        role: "Gestor de aplicações mobile e ERP. Implantação, treinamento, suporte e interlocução com sistemas GroupSoftware.",
      },
      metrus: {
        org: "Metrus",
        role: "App manager de sistemas mobile, suporte técnico e webdesign.",
      },
      jrs: {
        org: "JRS Suporte a Empresas",
        role: "Sites em PHP, WordPress, JavaScript e tecnologias correlatas.",
      },
      ifba: {
        org: "IFBA — Instituto Federal da Bahia",
        role: "Tecnólogo em Análise e Desenvolvimento de Sistemas · aplicativos e IA",
      },
    },
    places: {
      salvador: { city: "Salvador, BA", country: "Brasil" },
      luanda: { city: "Luanda", country: "Angola" },
    },
    work: {
      app: {
        title: "App Grupo Solução",
        body: "App operacional em Flutter (web e mobile) com API NestJS em TypeScript. Integra ERP, operação de condomínios e os times no dia a dia — da implantação à feature em produção.",
      },
      diario: {
        title: "Portal Diário",
        body: "Backoffice da administradora: Angular 21 e API NestJS. Agenda, conciliação, despesas fixas, malotes, protocolos e TV de KPI, com auth Microsoft Entra — DW só leitura.",
      },
    },
    placeStories: {
      salvador: "Salvador, Bahia — onde o Grupo Solução opera e de onde eu arquiteto os sistemas.",
      luanda: "Luanda, Angola — a mesma operação e o mesmo stack, em outro continente.",
    },
  },
  en: {
    title: "Josemar Júnior — fullstack developer",
    lede: "Mid-level fullstack developer. I architect solutions that integrate systems — and the people who use them.",
    aboutTitle: "About",
    about:
      "I'm a mid-level fullstack developer at Grupo Solução & Cia, working from Salvador, Bahia, and also Luanda, Angola. I architect solutions that integrate systems — Flutter, TypeScript, Node.js, Angular, NestJS, RabbitMQ, Redis and Git Workflow. Before that I was application manager at the same company: rollout, training, and the bridge between operations and software. I studied Systems Analysis and Development at IFBA, focused on apps and AI. I use AI agents under supervision: testable, safe code with continuous deploy. I like solving the real problem — the kind where nobody wants to grab the TV remote again.",
    experienceTitle: "Experience",
    educationTitle: "Education",
    skillsTitle: "Skills",
    coursesTitle: "Courses",
    workTitle: "Selected work",
    placesTitle: "Where I've worked",
    placesLede: "Click a pin to read the story.",
    heroRest: ", I'm ",
    now: "now",
    contactBadge: "Contact",
    contactTitle: "Get in touch",
    contactBody:
      "DM me on LinkedIn or send an email. Always happy to talk product, operations and code.",
    roles: {
      solucaoDev: {
        org: "Grupo Solução & Cia",
        role: "Mid-level fullstack developer. Architecting solutions that integrate systems — Flutter, TypeScript, Node.js, Angular, NestJS, RabbitMQ, Redis and Git Workflow.",
      },
      solucao: {
        org: "Grupo Solução & Cia",
        role: "Mobile and ERP application manager. Rollout, training, support, and liaison with GroupSoftware systems.",
      },
      metrus: {
        org: "Metrus",
        role: "App manager for mobile systems, technical support and web design.",
      },
      jrs: {
        org: "JRS Suporte a Empresas",
        role: "Websites with PHP, WordPress, JavaScript and related technologies.",
      },
      ifba: {
        org: "IFBA — Federal Institute of Bahia",
        role: "Technologist in Systems Analysis and Development · apps and AI",
      },
    },
    places: {
      salvador: { city: "Salvador, BA", country: "Brazil" },
      luanda: { city: "Luanda", country: "Angola" },
    },
    work: {
      app: {
        title: "Grupo Solução app",
        body: "Operational app in Flutter (web and mobile) with a NestJS TypeScript API. It ties ERP, condominium operations and the teams together — from rollout to production features.",
      },
      diario: {
        title: "Portal Diário",
        body: "Property-management backoffice: Angular 21 and NestJS API. Payment agenda, reconciliation, fixed expenses, mailbags, protocols and KPI TVs, with Microsoft Entra auth — read-only DW.",
      },
    },
    placeStories: {
      salvador: "Salvador, Bahia — where Grupo Solução operates and where I architect the systems.",
      luanda: "Luanda, Angola — the same operation and the same stack, on another continent.",
    },
  },
};

const root = document.documentElement;
const greetEl = document.getElementById("greet");
const langBtn = document.getElementById("lang-toggle");
const themeBtn = document.getElementById("theme-toggle");
let globe = null;
let selectedPlaceId = null;

function storedTheme() {
  return localStorage.getItem("theme");
}

function applyTheme(theme) {
  root.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
  themeBtn.setAttribute("aria-label", theme === "dark" ? "Light mode" : "Dark mode");
  syncGlobeTheme();
}

function currentLang() {
  return localStorage.getItem("lang") === "en" ? "en" : "pt";
}

function applyLang(lang) {
  localStorage.setItem("lang", lang);
  root.lang = lang === "en" ? "en" : "pt-BR";
  langBtn.textContent = lang === "en" ? "PT" : "EN";
  const t = copy[lang];
  document.title = t.title;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const path = el.dataset.i18n.split(".");
    let value = t;
    for (const key of path) value = value?.[key];
    if (typeof value === "string") el.textContent = value;
  });
  refreshGlobePins();
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
applyTheme(storedTheme() || (prefersDark.matches ? "dark" : "light"));
applyLang(currentLang());

themeBtn.addEventListener("click", () => {
  applyTheme(root.classList.contains("dark") ? "light" : "dark");
});

langBtn.addEventListener("click", () => {
  applyLang(currentLang() === "pt" ? "en" : "pt");
  rotateGreeting(true);
});

let greetIndex = 0;
function rotateGreeting(reset) {
  const list = greetings[currentLang()];
  if (reset) greetIndex = 0;
  greetEl.textContent = list[greetIndex % list.length];
  greetIndex += 1;
}

rotateGreeting(true);
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(rotateGreeting, 2600);
}

const sections = ["hero", "experience", "work", "skills", "places"];
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".dock a[href^='#']").forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        if (active) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    });
  },
  { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 },
);

sections.forEach((id) => {
  const el = document.getElementById(id);
  if (el) observer.observe(el);
});

const PLACES = [
  { id: "salvador", lat: -12.9777, lng: -38.5016, color: "#0e7c6b" },
  { id: "luanda", lat: -8.8383, lng: 13.2344, color: "#b4532a" },
];

const GLOBE_SIZE = 420;
const GLOBE_SRC = "./assets/vendor/globe.gl.min.js";
const EARTH_DAY = "https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg";
const EARTH_NIGHT = "https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg";

const storyEl = document.getElementById("place-story");
const fallbackEl = document.getElementById("places-fallback");
const globeEl = document.getElementById("globe");

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    const timer = window.setTimeout(() => reject(new Error(`timeout ${src}`)), 12000);
    script.onload = () => {
      window.clearTimeout(timer);
      resolve();
    };
    script.onerror = () => {
      window.clearTimeout(timer);
      reject(new Error(`fail ${src}`));
    };
    document.head.appendChild(script);
  });
}

function pinMarkup(place) {
  const t = copy[currentLang()].places[place.id];
  const label = t?.city ?? place.id;
  return `<span class="globe-pin" style="--pin:${place.color}">
    <svg width="22" height="28" viewBox="0 0 24 28" aria-hidden="true">
      <path d="M12 0C6.48 0 2 4.48 2 10c0 7.5 10 18 10 18s10-10.5 10-18C22 4.48 17.52 0 12 0z" fill="currentColor"/>
      <circle cx="12" cy="10" r="3.5" fill="#fff"/>
    </svg>
    <span>${label}</span>
  </span>`;
}

function showPlace(id) {
  const text = copy[currentLang()].placeStories[id];
  if (!text || !storyEl) return;
  selectedPlaceId = id;
  storyEl.hidden = false;
  storyEl.textContent = text;
}

function globePlaces() {
  return PLACES.map((place) => ({
    ...place,
    name: copy[currentLang()].places[place.id]?.city ?? place.id,
  }));
}

function refreshGlobePins() {
  if (!globe) return;
  globe.htmlElementsData(globePlaces());
  if (selectedPlaceId) showPlace(selectedPlaceId);
}

function syncGlobeTheme() {
  if (!globe) return;
  const dark = root.classList.contains("dark");
  globe
    .globeImageUrl(
      dark
        ? EARTH_NIGHT
        : EARTH_DAY,
    )
    .atmosphereColor(dark ? "#3ddcb0" : "#0e7c6b")
    .atmosphereAltitude(0.18);
}

function showGlobeFallback() {
  if (fallbackEl) fallbackEl.hidden = false;
  const frame = document.getElementById("globe-frame");
  if (frame) frame.hidden = true;
}

async function initGlobe() {
  if (!globeEl || typeof WebGLRenderingContext === "undefined") {
    showGlobeFallback();
    return;
  }
  try {
    await loadScript(GLOBE_SRC);
    if (typeof window.Globe !== "function") throw new Error("Globe missing");

    const dark = root.classList.contains("dark");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    globe = window.Globe()(globeEl)
      .width(GLOBE_SIZE)
      .height(GLOBE_SIZE)
      .backgroundColor("rgba(0,0,0,0)")
      .showGlobe(true)
      .showAtmosphere(true)
      .atmosphereColor(dark ? "#3ddcb0" : "#0e7c6b")
      .atmosphereAltitude(0.18)
      .globeImageUrl(dark ? EARTH_NIGHT : EARTH_DAY)
      .htmlLat("lat")
      .htmlLng("lng")
      .htmlAltitude(0.02)
      .htmlElementsData(globePlaces())
      .htmlElementVisibilityModifier((el, isVisible) => {
        el.style.opacity = isVisible ? "1" : "0.25";
        el.style.pointerEvents = "auto";
      })
      .htmlElement((d) => {
        const wrap = document.createElement("button");
        wrap.type = "button";
        wrap.className = "globe-pin-btn";
        wrap.setAttribute("aria-label", d.name);
        wrap.innerHTML = pinMarkup(d);
        wrap.addEventListener("click", (event) => {
          event.stopPropagation();
          showPlace(d.id);
        });
        return wrap;
      })
      .pointOfView({ lat: -11, lng: -14, altitude: 2.15 }, 0);

    const controls = globe.controls();
    controls.autoRotate = !reduce;
    controls.autoRotateSpeed = 0.45;
    controls.enableZoom = false;
    controls.enablePan = false;
  } catch {
    showGlobeFallback();
  }
}

initGlobe();
