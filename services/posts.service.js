const db = require("../config/db.config");

exports.addPost = (data, callback) => {
  db.query(
    `INSERT INTO posts (description, imagePath, datetimeCreated, addedByUserId) VALUES (?, ?, ?, ?)`,
    [
      data.description,
      data.imagePath,
      new Date(),
      data.addedByUserId
    ],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, "Post added successfully");
    }
  );
};
