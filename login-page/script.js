//Pegando o elemento do botão de login
const loginButton =  document.getElementById("login")

//Adicionando uma função ao botão de login
loginButton.addEventListener("click", login)

//Animação dos spans
const userSpan = document.getElementsByClassName('usuario');
const passSpan = document.getElementsByClassName('senha');

spanAct(userSpan);
spanAct(passSpan);

function spanAct(elemento) {
  const inputElement = elemento[0].querySelector('input'); // Seleciona o input dentro do elemento

  inputElement.addEventListener('focus', () => {
    elemento[0].children[0].classList.add('spanact');
  });

  inputElement.addEventListener('blur', () => {
    if (inputElement.value.trim() === '') { // Verifica se o valor está vazio ou contém apenas espaços
      elemento[0].children[0].classList.remove('spanact');
    }
  });
}

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