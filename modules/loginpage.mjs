export function loginPage() {
  let loginPageDiv = document.getElementById("loginPage");
  let userName = document.getElementById("userName");
  let password = document.getElementById("password");
  let loginBtn = document.getElementById("loginBtn");
  let columns = document.getElementById("columns");
  let loginFalse = false;
  let WelcomeText = document.getElementById("WelcomeText");

  loginBtn.addEventListener("click", () => {
    let userNameValue = userName.value.toLowerCase();
    let userPasswordValue = password.value;

    fetch("data.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.map((user) => {
          if (
            userNameValue === user.username &&
            userPasswordValue === user.password
          ) {
            console.log("Du lyckades logga in!");
            loginPageDiv.classList.add("logIn-hide");
            columns.classList.add("view-columns");
            loginFalse = true;

            let loginText = document.createElement("h1");
            loginText.innerText = "Välkommen in, " + user.username; 
            
            WelcomeText.appendChild(loginText); 
          }
        });
        if (!loginFalse) {
          alert("Fel inlogg, testa igen!");
        }
      });
  });
}
