// const { log } = require("console");
// const http = require("http");

// const server = http.createServer((request, response) => {
//   console.log(request);
//   response.end("Hello World");
// });

// server.listen(3333);

import express from express;

const app = express();

const port=1111;


app.listen(port, ()=>{

    console.log (`Server Ajillaj bna ${port}`)

})
