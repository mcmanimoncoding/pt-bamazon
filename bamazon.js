var mysql = require("mysql");
var inquirer = require("inquirer");



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


let categories = [];


// categoryPop()
// function categoryPop() {
connection.query("SELECT DISTINCT department_name FROM products", (err, results, fields) => {
    {
        if (err) {
            console.error("error connecting: " + err.stack);
            return;
        }
        results.forEach(burrito => {
            categories.push(burrito.department_name);
        });




        // };


        // console.log("v" + newCats);
        // console.log("CatPop" + categoryPop());
        // console.log("Categories: " + categories);
        start();

        function start() {

            inquirer
                .prompt([{
                    type: 'list',
                    name: 'bamOptions',
                    message: "\n--------------------------------------------------\nWelcome to Bamazon! What are you looking for?\n------------------------------",
                    choices: [
                        'Books', 'Computers', 'Albums', 'Video Games', 'Exit'
                    ]
                }])
                .then(answers => {
                    switch (answers.bamOptions) {
                        case 'Books':
                            loadBooks();
                            break;
                        case 'Computers':
                            loadComps();
                            break;
                        case 'Albums':
                            loadAlbums();
                            break;
                        case 'Video Games':
                            loadVGames();
                            break;
                        case 'Exit':
                            end();
                            break;

                    }
                    // console.log(answers.bamOptions);
                    // if (answers.searchOptions === "categories") {
                    //     artistSearch();
                    // } else if (answers.
                    // searchOptions === "Multi Hit Artists") {
                    //     repeatSearch();
                    // } else if (answers.searchOptions === "Chunks of the List") {
                    //     rankSearch();
                    // } else if (answers.searchOptions === "Song Search by Title") {
                    //     songSearch();
                    // } else {
                    //     return;
                    // };

                    // Use user feedback for... whatever!!
                });
        };

        // console.log(": " + categories);
        return categories;
    }
})
// console.log([categories]);

function end() {
    connection.end(function (err) {
        console.log("bye, bitch");
    });
};

function loadAlbums(){
    console.log("load Albums here...");
    end();
};

function loadBooks(){
    console.log("load Books here...");
    end();
};

function loadComps(){
    console.log("load Computers here...");
    end();
};

function loadVGames(){
    console.log("load Games here...");
    end();
};


