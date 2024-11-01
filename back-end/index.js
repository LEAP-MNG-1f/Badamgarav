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
  { id: 1, name: "Dashka", age: 25 },
  { id: 2, name: "Bold", age: 30 },
];

app.get("/users", (request, response) => {
  response.send(users);
});

app.post("/users", (request, response) => {
  const { name, age } = request.body;

  if (!name || !age) {
    return response.send({ error: "All fields are required" });
  } else if (typeof name !== `string` || typeof age != `number`) {
    return response.send({ error: "Wrong Type" });
  } else {
    const newUser = {
      id: Date.now().toString(),
      name: name,
      age: age,
    };

    users.push(newUser);
  }

  response.send(users);
  console.log(request.body);
});

app.put("/users", (request, response) => {
  const { id, name, age } = request.body;

  const editedUser = users.map((user) => {
    if (user.id === id) {
      return {
        id,
        name,
        age,
      };
    }
    return user;
  });

  console.log(request.body);
  response.send(editedUser);
});

app.delete("/users", (request, response) => {
  const deletedUser = users.filter((user) => {
    // if (user.id === id) {
    //   return {};
    //   return user;
    // }
  });

  console.log(request.body);
  response.send("deletedUser");
});

app.listen(port, () => {
  console.log(`Server Ajillaj bna ${port}`);
});
