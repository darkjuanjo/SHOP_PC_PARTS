const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const path = require('path');
const {typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');
const db = require('./config/connection');
// const PORT = process.env.PORT || 3001;
require("dotenv").config()
// const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context: authMiddleware 
});
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.use(cors()); //payments stripe

//payment stripe
app.post("/payment", cors(), async (req, res) => {
  let {amount, id} = req.body
  try {
      const payment = await stripe.paymentIntents.create({
          amount,
          currency: "USD",
          description:"Shop PC Parts",
          payment_method: id,
          confirm: true
      })
      console.log("Payment", payment)
      res.json({
          message:"Payment successful",
          success: true
      })



  } catch (error) {
      console.log("Error", error)
      res.json({
          message:"Payment failed",
          success: false
      })
  }
}) 

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
  console.log(req.header);
});

db.once('open', () => {
  app.listen(process.env.PORT || 3001, () => {
    // console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});