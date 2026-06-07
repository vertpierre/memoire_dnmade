/**
 * Cross-document view transitions: page-turn right-to-left.
 * On browser back, applies reverse animation via .view-transition-back.
 */
window.addEventListener(
  "pagereveal",
  (e) => {
    if (!e.viewTransition || !window.navigation?.activation) return;
    const activation = window.navigation.activation;
    const from = activation.from;
    const entry = activation.entry;
    if (from && entry && entry.index < from.index) {
      document.documentElement.classList.add("view-transition-back");
    }
    e.viewTransition.finished.then(() => {
      document.documentElement.classList.remove("view-transition-back");
    });
  },
  { capture: true },
);
