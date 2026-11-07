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

// Filtro de projetos por categoria
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll("#todos .card");

function applyFilter(cat) {
  cards.forEach((card) => {
    card.hidden = !(cat === "todos" || card.dataset.cat === cat);
  });
  filters.forEach((f) => f.setAttribute("aria-pressed", String(f.dataset.filter === cat)));
}

filters.forEach((btn) => btn.addEventListener("click", () => applyFilter(btn.dataset.filter)));

// Contagem em cada botão
filters.forEach((btn) => {
  const cat = btn.dataset.filter;
  const n = cat === "todos" ? cards.length : [...cards].filter((c) => c.dataset.cat === cat).length;
  const small = document.createElement("small");
  small.textContent = n;
  btn.appendChild(small);
});

// Ano no rodapé
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
