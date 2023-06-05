const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
// http object modulo
const http = require("http");

// server 
server = http.createServer((req, res) => {
    let reqBody = "";

    req.on("data", (data) => {
        reqBody += data;
    });

    // end request 
    req.on("end", () => {
        // console.log(reqBody);S
        const parsedBody = parseBody(reqBody);
        req.body = parseBody;
        sendFormPage(parsedBody, res);  
    });
});

// static port
const port = 5000;

// server listing port
server.listen(port, () => {
    console.log("server listening on port " + port);
});

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };