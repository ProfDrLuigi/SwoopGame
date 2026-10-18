(() => {
  "use strict";
  document.documentElement.classList.remove("no-js");

  const modes = {
    new: { title: "NEW MODE", caption: "New Mode — HD graphics. Actual capture of the native port." },
    classic: { title: "CLASSIC MODE", caption: "Classic Mode — original pixel graphics. The same game state." }
  };
  const modeButtons = [...document.querySelectorAll("[data-mode]")];
  for (const button of modeButtons) {
    button.addEventListener("click", () => {
      const mode = button.dataset.mode;
      if (!Object.hasOwn(modes, mode)) return;
      for (const candidate of modeButtons) {
        const selected = candidate.dataset.mode === mode;
        candidate.classList.toggle("active", selected);
        candidate.setAttribute("aria-pressed", String(selected));
        document.getElementById("mode-" + candidate.dataset.mode).hidden = !selected;
      }
      document.getElementById("window-mode").textContent = modes[mode].title;
      document.getElementById("mode-caption").textContent = modes[mode].caption;
    });
  }

  const navigation = document.getElementById("nav-links");
  for (const link of navigation.querySelectorAll('a[href^="#"]')) {
    link.addEventListener("click", () => {
      if (navigation.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(navigation, { toggle: false }).hide();
      }
    });
  }

})();
