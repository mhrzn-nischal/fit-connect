// script.js
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout-btn");

  logoutBtn.addEventListener("click", () => {
    logout();
  });
});

function logout() {
  window.location.href = "index.html";
}
