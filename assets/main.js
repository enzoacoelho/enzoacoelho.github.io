// Menu no celular
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#menu");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// Abas de projetos por categoria (um card pode estar em mais de uma categoria)
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll("#todos .card");
const inCat = (card, cat) => (card.dataset.cat || "").split(/\s+/).includes(cat);

function applyFilter(cat) {
  cards.forEach((card) => {
    card.hidden = !inCat(card, cat);
  });
  filters.forEach((f) => f.setAttribute("aria-pressed", String(f.dataset.filter === cat)));
}

filters.forEach((btn) => btn.addEventListener("click", () => applyFilter(btn.dataset.filter)));

// Contagem em cada botão
filters.forEach((btn) => {
  const n = [...cards].filter((c) => inCat(c, btn.dataset.filter)).length;
  const small = document.createElement("small");
  small.textContent = n;
  btn.appendChild(small);
});

// Começa na primeira aba
if (filters.length) applyFilter(filters[0].dataset.filter);

// Ano no rodapé
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
