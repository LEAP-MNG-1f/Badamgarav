// const { log } = require("console");
// const http = require("http");

// const server = http.createServer((request, response) => {
//   console.log(request);
//   response.end("Hello World");
// });

// server.listen(3333);

import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const port = 1111;

const users = [
  { name: "Dashka", age: 25 },
  { name: "Bold", age: 30 },
];

app.get("/users", (request, response) => {
  response.send(users);
});

app.post("/users", (request, response) => {
  const { name, age } = request.body;

  console.log(request.body);
  response.send("Hello received POST request");
});

app.put("/users", (request, response) => {
  console.log(request.body);
  response.send("Hello received PUT request");
});

app.delete("/users", (request, response) => {
  console.log(request.body);
  response.send("Hello received DELETE request");
});

app.listen(port, () => {
  console.log(`Server Ajillaj bna ${port}`);
});
