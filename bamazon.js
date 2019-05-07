var mysql = require("mysql");
var inquirer = require("inquirer");
var chalk = require("chalk");



var connection = mysql.createConnection({


    host: 'localhost',
    port: 3306,

    user: "root",
    password: "root",

    database: "bamazon"

});


// connection.connect(function(err) {
//         if (err) {
//          console.error("error connecting: " + err.stack);
//          return;
//         }
//         console.log("connected as id " + connection.threadId);
//         // connection.end(function(err) {
//          console.log("bye, bitch");
// return;
//         }); 



let itemList = function () {
    connection.query("SELECT * FROM bamazon.products", function (error, response) {
        if (error) throw error;

        console.log(chalk.blue.bgWhite("Id / Name / Department / Price / Stock"));
        for (var i = 0; i < response.length; i++) {
            console.log("Product: " + response[i].id + " / " + response[i].product_name + " / " + response[i].department_name + " / $" + response[i].price + " / " + response[i].stock_quantity + " |");
        }

        customerInquire();
    })

}

function validation(answer) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if (integer && (sign === 1)) {
        return true;
    } else {
        return "Please select an existing product id#";
    }
}

function customerInquire() {
    inquirer
        .prompt([
            {
                type: 'number',
                name: 'id',
                message: chalk.blue.bgWhite("Please enter the Product's ID #"),
                // validate: validation,
                // filter: Number,
            },
            {
                type: 'number',
                name: 'quantity',
                message: chalk.blue.bgWhite("How many?")
            }

        ]).then(function(answers){

            let product = answers.id;
            let quantity = answers.quantity;

            console.log(product + " | "+quantity);
            
        })
};


function runApp() {
    itemList();
}

runApp();