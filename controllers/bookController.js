const router = require("express").Router();
const book = require("../models/book");

router.get("/api/getSavedBooks", (req, res) => {
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
        req.body.description,
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

router.delete("/api/removeBook/:id", (req, res) => {
  const id = req.params.id;

  book
    .delete(id)
    .then((result) => {
      console.log(`Deleted book successfully`);
      res.json(result);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

module.exports = router;
