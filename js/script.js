
*script.js*
//

==

// MODO ESCURO //

const botaoTema = document.getElementById("botao Tema" );

function alternarTema() {

document.body.classList.toggle("escu ro");

if

uro")) { (document.body.classList.contains("esc

botaoTema.textContent = " Modo claro";

} else {

botaoTema.textContent = " Modo escuro"; }

}

botaoTema.addEventListener("click", alternar Tema);

//
===================================
// ALTERAR TEXTO //
===================================

botaoMensagem = document.getElementById("botaoMensa const gem");

const ); mensagem = document.getElementById("mensagem"

function alterarTexto() { mensagem.textContent = "O texto foi alterado pelo JavaScript!"; }

botaoMensagem.addEventListener("clic k", alterar Texto);