import express from "express";

const server = express();

/* server.get("/", (req, res) => {
  const q = req.query;

  //res.send("Ciao");
  res.send(`Hello ${q.name} your age is ${q.age}`);
}); */

/* server.get("/other", (req, res) => {
  res.send("Ciao on other");
}); 

/* server.get("/user/:userId", (req, res) => {
  const id = req.params.userId;

  res.send(`Hello your id is ${id}`);
}); */

/* server.get("/math/:op", (req, res) => {
  const q = req.query;

  const x = parseFloat(q.x);
  const y = parseFloat(q.y);

  const operation = req.params.op;

  const result =
    operation === "add"
      ? x + y
      : operation === "substract"
      ? x - y
      : operation === "multiply"
      ? x * y
      : operation === "divide"
      ? x / y
      : false;

  res.send(
    result ? `the result is ${result}` : `unrecognizable operation name`
  );
}); */

//convert the response to a JSON object
server.get("/math/:op", (req, res) => {
  const q = req.query;

  const x = parseFloat(q.x);
  const y = parseFloat(q.y);

  const operation = req.params.op;

  const result =
    operation === "add"
      ? x + y
      : operation === "substract"
      ? x - y
      : operation === "multiply"
      ? x * y
      : operation === "divide"
      ? x / y
      : false;

  const resultObject = {
    numbers: {
      x: x,
      y: y,
    },
    op: operation,
    result: result ? result : `unrecognizable operation name`,
  };
  res.send(resultObject);
});

server.listen(3000);
