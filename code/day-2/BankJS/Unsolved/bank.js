var command = process.argv[2];
// var a = parseFloat(process.argv[3]);
// var b = parseFloat(process.argv[4]);

var dataArr = [];
var fs = require("fs");

var textFile = process.argv[3];

const appendText = function() {
    fs.appendFile(textFile, "bank.txt", function(err) {
        if (error) {
            return console.log(error);
        }
    })
}

const getTotal = function() {
    var total = 0;
    fs.readFile("bank.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        dataArr = data.split(", ");
        console.log(dataArr)
        dataArr.forEach(function (element, index) {
            console.log(element + " index: " + index);
            // total += parseFloat(element);
        })
        console.log(total);
    })
}
console.log(command);
switch (command) {
    case "total":
        getTotal();
        break;
}