import inquirer from "inquirer";
//In PKR
let Conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0037,
        "PKR": 1
    },
    //In GBP
    "GBP": {
        "USD": 1.21,
        "PKR": 350,
        "GBP": 1
    },
    //In Dollars
    "USD": {
        "PKR": 277.58,
        "GBP": 0.83,
        "USD": 1
    }
};
//step 2: Using Inquirer
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency..?"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion currency"
    },
    //conversion amount
    {
        type: "number",
        name: "amount",
        message: "Enter your conversion amount"
    }
]);
//step 3 Output
const { from, to, amount } = answer;
//check input in given program
if (from && to && amount) {
    //formula
    let result = Conversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}
else {
    //generate error
    console.log("invalid inputs");
}
