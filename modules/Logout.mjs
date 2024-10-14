let logoutBtn = document.getElementById("logout");
let loginPageDiv = document.getElementById("loginPage");
let columns = document.getElementById("columns");
let userName = document.getElementById("userName");
let password = document.getElementById("password");
export const Logout = () => {
  logoutBtn.addEventListener("click", () => {
    localStorage.clear();
    loginPageDiv.classList.remove("logIn-hide");
    columns.classList.remove("view-columns");
    userName.value = "";
    password.value = "";
    loginFalse = false;
  });
};
