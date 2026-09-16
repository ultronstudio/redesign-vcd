(() => {
  const searchToggle = document.querySelector(".search-toggle");
  const searchPanel = document.querySelector(".search-panel");

  searchToggle?.addEventListener("click", () => {
    searchPanel.hidden = !searchPanel.hidden;
    if (!searchPanel.hidden) {
      document.getElementById("siteSearch")?.focus();
    }
  });

  document.querySelectorAll(".site-search, .event-search, .newsletter form").forEach(form => {
    form.addEventListener("submit", e => e.preventDefault());
  });

  const filterButtons = [...document.querySelectorAll(".browse-tabs button")];
  const cards = [...document.querySelectorAll(".event-card")];

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;
      cards.forEach(card => {
        const groups = card.dataset.groups.split(" ");
        card.hidden = filter !== "all" && !groups.includes(filter);
      });
    });
  });
})();
