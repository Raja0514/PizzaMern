const express = require("express");
const router = express.Router();
const model = require("../models/pizzaModel");
router.get("/getAllpizzas", async (req, res) => {
  try {
    const pizza1 = await model.find({});

    res.send(pizza1);

  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
