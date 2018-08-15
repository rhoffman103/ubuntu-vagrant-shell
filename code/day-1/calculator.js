var operator = process.argv[2];
var a = parseFloat(process.argv[3]);
var b = parseFloat(process.argv[4]);

switch(operator) {
    case "add":
        console.log(a + b);
        break;
    case "subtract":
        console.log(a - b);
        break;
    case "multiply":
        console.log(a * b);
        break;
    case "divide":
        console.log(a / b);
        break;
}