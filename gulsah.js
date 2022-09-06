const oddishOrEvenish = (num) => {
    var sumOfDigits = 0
    while (num) {
        sumOfDigits += num%10
        num = Math.floor(num/10)
    }
    const result = (sumOfDigits%2 == 0) ? "Even" : "Odd";
    return result
}
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question("Enter number: ", function (n) {
    console.log(oddishOrEvenish(n));
    rl.close()
})
//console.log(oddishOrEvenish(43));
//console.log(oddishOrEvenish(373));
//console.log(oddishOrEvenish(4433));
