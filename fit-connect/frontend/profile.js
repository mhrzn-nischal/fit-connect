// profile.js

// document
//   .getElementById("profile-photo")
//   .addEventListener("change", function (event) {
//     const file = event.target.files[0];
//     const preview = document.getElementById("photo-preview");

//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         preview.src = e.target.result;
//         preview.style.display = "block";
//       };
//       reader.readAsDataURL(file);
//     } else {
//       preview.src = "#";
//       preview.style.display = "none";
//     }
//   });

document.addEventListener("DOMContentLoaded", () => {
  fetch("/backend/getUserInfo.php")
    .then((response) => response.json())
    .then((data) => {
      if (data.username) {
        document.getElementById("username-display").textContent = data.username;
      } else {
        console.error(data.error);
      }
    })
    .catch((error) => console.error("Error fetching user info:", error));
});
