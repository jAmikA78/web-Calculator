let operation = document.getElementById("operation");

function display(element) {
    operation.value += element;
}

function clearOperation() {
    operation.value = '';
}

function back() {
    let currentValue = operation.value;
    operation.value = currentValue.slice(0, -1);
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function root(n, base) {
    return base ** (1 / n);
}

function CRoot(n) {
    return root(n, 3);
}
function SRoot(n) {
    return root(n, 2);
}

function logn(base, x) {
    return Math.log(x) / Math.log(base);
}

function xnor(a, b) {
    return ~(a ^ b);
}

function equality() {
    let expression = operation.value;
    expression = expression.replace(/pow\(/g, 'Math.pow(');
    expression = expression.replace(/log2\(/g, 'Math.log2(');
    expression = expression.replace(/ln\(/g, 'Math.log(');
    expression = expression.replace(/<->\(/g, 'xnor(');
    expression = expression.replace(/sin\(/g, 'Math.sin(');
    expression = expression.replace(/cos\(/g, 'Math.cos(');
    expression = expression.replace(/tan\(/g, 'Math.tan(');
    try {
        let answer = eval(expression);
        if (isFinite(answer))
            operation.value = answer;
        else
            operation.value = error;
    }
    catch (error) {
        operation.value = error;
    }
}