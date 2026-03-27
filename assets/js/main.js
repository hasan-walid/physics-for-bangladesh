document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".site-nav");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      menu.classList.toggle("is-open");
    });
  }

  const filterButtons = document.querySelectorAll("[data-filter-group]");
  const archiveItems = document.querySelectorAll(".archive-item");
  const yearGroups = document.querySelectorAll(".year-group");
  const state = { year: "all", status: "all" };

  const applyFilters = () => {
    archiveItems.forEach((item) => {
      const matchesYear = state.year === "all" || item.dataset.year === state.year;
      const matchesStatus = state.status === "all" || item.dataset.status === state.status;
      item.hidden = !(matchesYear && matchesStatus);
    });

    yearGroups.forEach((group) => {
      const visibleCards = group.querySelectorAll(".archive-item:not([hidden])");
      group.hidden = visibleCards.length === 0;
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.dataset.filterGroup;
      const value = button.dataset.filterValue;
      state[group] = value;

      document.querySelectorAll(`[data-filter-group="${group}"]`).forEach((peer) => {
        peer.classList.remove("is-active");
      });

      button.classList.add("is-active");
      applyFilters();
    });
  });
});
