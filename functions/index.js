const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const secretKeypart1 = "sk_test_51IJirjKDonKM84aW14oMa1erXwbC1ElyR";
const secretKeypart2 = "9Acc3MZx6EhuSamVr90KbvZQfecFk00tPogtzG0O5N";
const secretKeypart3 = "00B8oEt67iy7100m4gmScUM";

const secretKey = secretKeypart1 + secretKeypart2 + secretKeypart3;

const stripe = require("stripe")(secretKey);

// app config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// API routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);
// Example end point
// http://localhost:5001/clone-50a7a/us-central1/api
