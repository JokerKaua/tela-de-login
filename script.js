const loginButton =  document.getElementById("login")

loginButton.addEventListener("click", login)

function login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("lembrar");

    const username = usernameInput.value;
    const password = passwordInput.value;
    const remember = rememberCheckbox.checked;

    // Lógica de login aqui
    console.log("Tentativa de login com Usuário:", username);
    console.log("Senha:", password);
    console.log("Lembrar usuário:", remember);
}