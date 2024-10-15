let logoutBtn = document.getElementById("logout");
let loginPageDiv = document.getElementById("loginPage");
let columns = document.getElementById("columns");
let userName = document.getElementById("userName");
let password = document.getElementById("password");
let WelcomeText = document.getElementById("WelcomeText");
export const Logout = () => {
  logoutBtn.addEventListener("click", () => {
    localStorage.clear();
    loginPageDiv.classList.remove("logIn-hide");
    columns.classList.remove("view-columns");
    WelcomeText.style.display = "none";
    userName.value = "";
    password.value = "";
    loginFalse = false;
  });
};
