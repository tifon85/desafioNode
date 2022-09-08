const http = require('http');

const server = http.createServer((request, response) => {
    console.log("request received!")
});

const connectedServer = server.listen(8080, () => {
    console.log("server up!")
})