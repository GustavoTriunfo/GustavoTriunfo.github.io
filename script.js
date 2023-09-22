// Inicializa o valor total do carrinho
let valorTotalCarrinho = 0.00;

// Função para atualizar o carrinho quando uma checkbox é marcada ou desmarcada
function atualizarCarrinho() {
    valorTotalCarrinho = 0.00; // Zera o valor total e recalcula com base nas seleções

    // Selecione todas as checkboxes na tabela
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            const valorItem = parseFloat(checkbox.value);
            valorTotalCarrinho += valorItem;
        }
    });

    atualizarValorCarrinho();
}

// Função para atualizar o valor do carrinho na página
function atualizarValorCarrinho() {
    const valorCarrinhoElement = document.getElementById('valorCarrinho');
    valorCarrinhoElement.textContent = valorTotalCarrinho.toFixed(2); // Formata para duas casas decimais
}

// Associe a função de atualização ao evento 'change' de todas as checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', atualizarCarrinho);
});
