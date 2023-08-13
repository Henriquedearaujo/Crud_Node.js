const express = require("express");

const app = express();
const bodyParser = require("body-parser");

const usersRoutes = require("./routes/users.route");

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.listen(3000, () => {
  console.log("i am ready to lisen you");
});
