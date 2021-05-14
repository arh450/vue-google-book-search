DROP DATABASE IF EXISTS vue_book_search_db

CREATE DATABASE vue_book_search_db

use vue_book_search_db
CREATE TABLE books (
    id INT AUTO_INCREMENT,
    title VARCHAR(255),
    authors VARCHAR(255),
    descript BLOB,
    image VARCHAR(255),
    link VARCHAR(255),
    PRIMARY KEY (id)
)

-- title
-- authors
--- description
--- image
--- link