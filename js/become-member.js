const togglePasswordButton = document.querySelector("#toggle-password");
const passwordInput = document.querySelector("#password");

function toggleShowPassword() {
  togglePasswordButton.classList.toggle("toggled");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

togglePasswordButton.addEventListener("click", toggleShowPassword);
