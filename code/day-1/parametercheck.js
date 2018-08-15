var a = process.argv[2];
var b = process.argv[3];

if (a === b) {
    console.log(true);
}
else {
    console.log(false);
}

if ((a % 7) === 0 && (b % 7) === 0) {
    console.log("divisible by 7")
}
else {
    console.log("not divisible by 7")
}