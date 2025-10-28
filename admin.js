function validarLogin() {
    //dados do usuario
    const email = document.getElementById('email')
    const senha = document.getElementById('password')

    //acessar a lista de local storage
    let lista = window.localStorage.getItem('usuarios')

    //fazer o parse da lista 
    lista = JSON.parse(lista)

    //vai controlar o erro do login
    let logado = false

    //verificar se o usuario esta na lista
    // e tambem se a senha confere
    for (let i=0; i < lista.length; i++) {
        //estamos passando  pelos itens da lista
        const usuario = lista[i]
        const emailLista = usuario.email
        const passwordLista = usuario.password

        if (emailLista == email.value) {
            //comparar as senhas
        if (passwordLista == password.value) {
            alert('sucesso, voce esta logado')
            logado = true
            break
        }
        else {
            logado = false
        }
        } else {
            logado = false
        }
    } 

    //mostra a mensagem de  não logado
    if (logado == false) {
        alert('login invalido')  
    } else {
        window.location.href = '../../pages/home-admin.html'
    }
}