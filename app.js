const versionEl = document.getElementById("version");
const button = document.getElementById("refresh-hint");

if (versionEl) {
  versionEl.textContent = "2.0";
}

button?.addEventListener("click", () => {
  window.location.reload();
});
