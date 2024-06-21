// Função para adicionar caracteres ao display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Função para limpar o display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Função para calcular o resultado da expressão
function calculate() {
    let input = document.getElementById('display').value;

    try {
        let result = eval(input);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}
