export function loginPage() {
    let userName = document.getElementById("userName");
    let password = document.getElementById("password");
    let loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener ("click", () => {
        let user = userName.value;
        let userPassword = password.value;
    })
    
}