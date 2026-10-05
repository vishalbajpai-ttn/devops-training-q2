const versionEl = document.getElementById("version");
const button = document.getElementById("refresh-hint");

if (versionEl) {
  versionEl.textContent = "1.0";
}

button?.addEventListener("click", () => {
  window.location.reload();
});
