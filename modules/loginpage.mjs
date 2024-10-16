/*Här sker det en export som sedan importeras in i javascripten.
Denna modul gör att användaren ska kunna logga in med hjälp av json filen.*/
export function loginPage() {
  /*Här deklareras alla variabler som bland annat input fälten och knapp som är skapade i HTML*/
  let loginPageDiv = document.getElementById("loginPage");
  let userName = document.getElementById("userName");
  let password = document.getElementById("password");
  let loginBtn = document.getElementById("loginBtn");
  let columns = document.getElementById("columns");
  let WelcomeText = document.getElementById("WelcomeText");
  let h1 = document.getElementById("h1");

  /*Här skapas de en bool med ett false värde som sen kommer användas för att se om användaren är inloggad eller ej!*/
  let loginFalse = false;

  /*Här läggs det till en eventlistener på knappen som användaren skrivit in användarnamn och lösenord.*/
  loginBtn.addEventListener("click", () => {
    /*Här hämtar koden två vären från inmatningsfälten i HTML och sparar det som skrivits in i de i två variabler.
    Vi lade till tolowercase så att om användaren skriver någon bokstav med stor så blir det ändå rätt. */
    let userNameValue = userName.value.toLowerCase();
    let userPasswordValue = password.value;

    /*Här fetchar vi in informationen ifrån json filen där användarnamen och lösenord finns.*/
    fetch("data.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.map((user) => {
          /*Om användaren skriver rätt lösenord och användarnamn då försvinner inlogginings funktionen och
          istället visas kolummerna och korten. Det skrivs även ut vem det är som loggat in! */
          if (
            userNameValue === user.username &&
            userPasswordValue === user.password
          ) {
            console.log("Du lyckades logga in!");
            loginPageDiv.classList.add("logIn-hide");
            columns.classList.add("view-columns");
            loginFalse = true;
            h1.innerText = `Welcome, ${user.username}`.toLocaleUpperCase();

            WelcomeText.style.display = "block";
            h1.appendChild(loginText);
          }
        });
        /*Om du inte lösenord eller användarnamn stämmer så får användaren upp en alert som informerar 
        användaren om att den skrivit fel. */
        if (!loginFalse) {
          alert("Fel inlogg, testa igen!");
        }
      });
  });
}
