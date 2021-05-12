const orm = require("../config/orm");

const book = {
  selectAll: () => {
    return new Promise((resolve, reject) => {
      orm
        .selectAll("books")
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          if (err) {
            reject(err);
          }
        });
    });
  },

  insert: (columns, values) => {
    return new Promise((resolve, reject) => {
      insert("books", columns, values)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          if (err) {
            reject(err);
          }
        });
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      orm
        .delete("books", id)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          if (err) {
            reject(err);
          }
        });
    });
  },
};

module.exports = book;
