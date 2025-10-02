const password = document.getElementById('password')
const confirmaPassword = document.getElementById('confirma-password')

function cadastrarUsuario() {
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    

    if (password.value == confirmaPassword.value) {
    // cadastrar no local storage
        
    //verifica se a lista existe no local storage
        let lista = window.localStorage.getItem('usuarios')

        if (lista == undefined) {
            //nao existe a lista entao cria e adiciona o usuario
            lista = []

            //adicionar o usuario na lista
            let usuario = {
                'nome': nome.value,
                'email': email.value,
                'password': password.value
            }
            lista.push(usuario)

            //salvar no local storage a lista
            window.localStorage.setItem('usuarios', JSON.stringify(lista))
            alert('usuario cadastrado')
        } else {
            //adicionar novos usuarios
            //priemeiro buscar a lista no local storage
            let listaE = window.localStorage.getItem('usuarios')
            listaE = JSON.parse(listaE)

            let usuarioA = {
                'nome': nome.value,
                'email': email.value,
                'password': password.value
            }

            //adiciona na lista
            listaE.push(usuarioA)

            //salvar no local storage
            window.localStorage.setItem('usuarios', JSON.stringify(listaE))
            alert('usuario cadastrado')

            //limpar os dados no formulario
            nome.value = ''
            email.value = ''
            password.value = ''
            confirmaPassword.value = ''
        }

    } else {
        alert('senha nao confere verifique seus dados')
        password.value = ''
        confirmaPassword.value = ''
    }
}
    function toggleSenha() {
        const exibirSenha = document.getElementById('exibir-senha')
        
        if (exibirSenha.checked == true) {
           password.type = 'text'
           confirmaPassword.type = 'text'
        } else {
             password.type = 'password'
             confirmaPassword.type = 'password'
        }
    }
