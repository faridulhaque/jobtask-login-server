const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const token = "QpwL5tke4Pnpja7X4";

  if (email !== "eve.holt@reqres.in") {
    return res.send({ error: "Email did not match" });
  }
  if (password !== "5cityslicka") {
    return res.send({ error: "Password did not match" });
  }
  res.send({ token });
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("listening on port", port);
});
