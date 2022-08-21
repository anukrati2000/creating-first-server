const http = require("http");

const port = 8081;

http
    .createServer((req, res) => {
        // callback function
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Hello, This is from my server</h1>");
        res.end();

    })
    .listen(port, () => { // calback function
        console.log(`Nodejs server started on port ${port}`);
    });


// http://localhost:8081