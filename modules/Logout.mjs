/*Här dekalrerar vi variablerna från HTML. */
let logoutBtn = document.getElementById("logout");
let loginPageDiv = document.getElementById("loginPage");
let columns = document.getElementById("columns");
let userName = document.getElementById("userName");
let password = document.getElementById("password");
let WelcomeText = document.getElementById("WelcomeText");
/*Här sker ännu en export till javascript. I denna modulen är funktionen för användaren ska kunna logga ut.*/
export const Logout = () => {
  /*Det läggs till en eventlistener på knappen och när man trycker på så försvinner allt med kort och kolumner.
  Då ska bara inloggings sidan visas */  
  logoutBtn.addEventListener("click", () => {
    loginPageDiv.classList.remove("logIn-hide");
    columns.classList.remove("view-columns");
    WelcomeText.style.display = "none";
    userName.value = "";
    password.value = "";
    loginFalse = false;
  });
};
