const postsController = require("../controllers/posts.controller");

var express = require("express");

var router = express.Router();

router.post("/add-post", postsController.addPost);
/**
 * @swagger
 * /posts/add-post:
 *   post:
 *      description: Used to add post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              required:
 *                 - description
 *                 - imagePath
 *                 - addedByUserId
 *              properties:
 *                  description:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: This is sample post
 *                  imagePath:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: abc.png
 *                  addedByUserId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;