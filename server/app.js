const express = require("express");
var { graphqlHTTP } = require("express-graphql");
const Schema = require("./schema/schema");

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
  })
);

app.listen(4000, () => {
  console.log("listening for request on port 4000");
});
