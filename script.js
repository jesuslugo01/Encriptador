function encryptText() {
    const input = document.getElementById("inputText").value;
    const output = input.split('').map(char => char.charCodeAt(0) + 3).map(code => String.fromCharCode(code)).join('');
    document.getElementById("outputText").value = output;
}

function decryptText() {
    const input = document.getElementById("outputText").value;
    const output = input.split('').map(char => char.charCodeAt(0) - 3).map(code => String.fromCharCode(code)).join('');
    document.getElementById("inputText").value = output;
}
