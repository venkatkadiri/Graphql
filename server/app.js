const express = require("express");
var { graphqlHTTP } = require("express-graphql"); // CommonJS
const schema = require("./schema/schema");

const app = express();

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
