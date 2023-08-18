//Pegando o elemento do botão de login
const loginButton =  document.getElementById("login")

//Adicionando uma função ao botão de login
loginButton.addEventListener("click", login)

function login() {
    //Pega os elementos e coloca em variaveis
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("lembrar");

    //Pega os valores dos elementos
    const username = usernameInput.value;
    const password = passwordInput.value;
    const remember = rememberCheckbox.checked;

    //Apenas uma mensagem para verificação
    console.log("Tentativa de login com Usuário:", username);
    console.log("Senha:", password);
    console.log("Lembrar usuário:", remember);
}