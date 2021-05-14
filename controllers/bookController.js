const router = require("express").Router();
const book = require("../models/book");

router.get("/api/getAllBooks", (req, res) => {
  book
    .selectAll()
    .then((results) => {
      const bookObj = {
        books: results,
      };

      console.log("Data Read Successfully");
      res.json(bookObj);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

router.post("/api/saveBook", (req, res) => {
  book
    .insert(
      ["title", "authors", "descript", "image", "link"],
      [
        req.body.title,
        req.body.authors,
        req.body.descript,
        req.body.image,
        req.body.link,
      ]
    )
    .then((result) => {
      console.log(`Book saved successfully`);
      res.json(result);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

module.exports = router;
