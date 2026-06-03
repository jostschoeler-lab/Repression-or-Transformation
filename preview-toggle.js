const STORAGE_KEY = "healingPathPreviewMode";
const previewButtons = document.querySelectorAll("[data-preview-mode]");

function setPreviewMode(mode) {
  const nextMode = mode === "mobile" ? "mobile" : "desktop";

  document.body.classList.toggle("is-mobile-preview", nextMode === "mobile");
  document.body.classList.toggle("is-desktop-preview", nextMode === "desktop");

  previewButtons.forEach((button) => {
    const isActive = button.dataset.previewMode === nextMode;
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem(STORAGE_KEY, nextMode);
}

previewButtons.forEach((button) => {
  button.addEventListener("click", () =>
    setPreviewMode(button.dataset.previewMode),
  );
});

setPreviewMode(localStorage.getItem(STORAGE_KEY) || "desktop");
