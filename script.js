//your code here
function appendValue(value) {
    document.getElementById('input').value += value;
}

function calculate() {
    try {
        let result = eval(document.getElementById('input').value);
        document.getElementById('input').value = result;
    } catch (error) {
        if (error instanceof SyntaxError) {
            document.getElementById('input').value = 'Error';
        }
    }
}

function clearInput() {
    document.getElementById('input').value = '';
}
