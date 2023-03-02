function validacaoEmail(email) {
    const regex = RegExp(/\S+@\S+\.\S+/);

    if(regex.test(email)){
        console.log("Login permitido");
    } else {
        console.log("e-mail inválido");
    }
}

validacaoEmail("teste@gmail.com");

// estrutura de validação visto em https://horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/