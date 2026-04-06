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

  const outlineLinks = document.querySelectorAll(".outline-nav a");

  if (outlineLinks.length > 0) {
    const sections = Array.from(outlineLinks)
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    const setActiveLink = (id) => {
      outlineLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    if (sections.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (visible?.target?.id) {
            setActiveLink(visible.target.id);
          }
        },
        {
          rootMargin: "-20% 0px -60% 0px",
          threshold: [0.1, 0.25, 0.5],
        }
      );

      sections.forEach((section) => observer.observe(section));
      setActiveLink(sections[0].id);
    }
  }
});
