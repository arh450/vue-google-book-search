const router = require("express").Router();
const book = require("../models/book");

router.get("api/getAllBooks", (req, res) => {
  book
    .selectAll()
    .then((results) => {
      const bookObj = {
        books: results,
      };

      console.log("Data Read Successfully");
      res.json(burgerObj);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

module.exports = router;
