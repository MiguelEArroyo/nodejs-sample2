const express = require('express');
const router = express.Router();

router.all('/secrets', async (req, res, next) => {
  console.log("Accessing the secrets section ..")
  next() //pass control to the next handler
});
