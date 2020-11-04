const { count } = require("console");
const fs = require("fs");

fs.readFile("./santa.txt", (err, data) => {
    if (err) {
        console.log("Ooops santa no tuvo regalos")
    }
    const instructions = Array.from(data.toString());
    var piso = 0;
    var BreakException = {};
    instructions.forEach(function (ins, index) {
        if (ins === "(") {
            piso++;
            // console.log(piso);
        } else if (ins === ")") {
            piso--;
            // console.log(piso);
            if (piso < 0)  {
                console.log(index)
                throw err;
            }
        }
    });
})
