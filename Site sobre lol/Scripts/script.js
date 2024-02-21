// Definir a função showContent antes de ser chamada
function showContent(id) {
    // Ocultar todos os elementos com a classe "hidden"
    var elements = document.querySelectorAll('.hidden');
    elements.forEach(function(element) {
        element.style.display = 'none';
    });

    // Exibir o elemento com o ID especificado
    var content = document.getElementById(id);
    content.style.display = 'block';
}

// Esperar pelo evento de carregamento do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    // Exibir conteúdo da habilidade "Passiva" ao carregar a página
    showContent('passivacombos');


    // Adicionar listeners de clique aos botões
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover a classe 'active' de todos os botões
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });
            // Adicionar a classe 'active' apenas ao botão clicado
            button.classList.add('active');
        });
    });
});




