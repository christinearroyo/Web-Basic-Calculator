function insert(value) {
    document.form.display.value += value;
}

function clean() {
    document.form.display.value = '';
}

function deleteChar() {
    document.form.display.value = document.form.display.value.slice(0, -1);
}

function calculate() {
    let input = document.form.display.value;
    input = input.replace(/x/g, '*');
    input = input.replace(/%/g, '/100*');
    try {
        document.form.display.value = eval(input);
    } catch (e) {
        document.form.display.value = 'Error';
    }
}