const router = require("express").Router();



const Cards = require('../models/Cards');

router.post("/dating/cards", async (req, res) => {
    const newCard = new Cards(req.body);
    try {
      const savedCard = await newCard.save();
      res.status(200).json(savedCard);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/dating/cards", async (req,res) =>{
     
    await Cards.find((err, data) => {
        if(err) {
        res.status(500).send(err)
        } else {
        res.status(200).send(data)
        }
        })

  });

  module.exports = router;