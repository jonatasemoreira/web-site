const contato_container_central = document.getElementById('contact');

contato_container_central.innerHTML += 
`
    <div class='container-sec-contact'>
        <form>
            <label for='contact-nome'>Nome: </label>
            <input class='input-nome-contact' type='text'></input>

        
            <label for='contact-nome'>Assunto: </label>
            <input class='input-assunto-contact' type='text'></input>

            <input id='btn-contact' class='btn-contact' type='button' value='Enviar'></input>
        </form>
        <div id="notificacao-falsa" class='notificacao-falsa'></div>
    </div>
`


//animação simulação de envio de email
const enviarEmail = document.createElement('p');
enviarEmail.textContent = 'Mensagem enviada com sucesso!';
enviarEmail.style.color = 'red';
enviarEmail.style.fontWeight = 'bold';

const front_botao_envio = document.getElementById('btn-contact');

const notificacao = document.getElementById('notificacao-falsa');
const inputNome = document.querySelector('.input-nome-contact');
const inputAssunto = document.querySelector('.input-assunto-contact');

front_botao_envio.addEventListener('click', function() {
    if (verificarCampos()) {
        notificacao.appendChild(enviarEmail);

        // Remover a mensagem após alguns segundos (tempo de simulação) e limpar os valores dos inputs
        setTimeout(function() {
            notificacao.removeChild(enviarEmail);
            inputNome.value = '';
            inputAssunto.value = '';
        }, 3000); // Tempo em milissegundos (neste exemplo, 3 segundos)
    }
});

function verificarCampos() {
    if (!inputNome.value.trim()) {
        alert('Por favor, preencha o campo nome');
        return false;
    }

    if (!inputAssunto.value.trim()) {
        alert('Por favor, preencha o campo assunto');
        return false;
    }

    // Todos os campos têm valor
    return true;
}