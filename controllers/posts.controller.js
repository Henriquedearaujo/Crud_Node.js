const postsService = require("../services/posts.service");
//Postar Comentarios
exports.addPost = (req, res, next) => {
  const data = {
    description: req.body.description,
    imagePath: req.body.imagePath,
    addedByUserId: req.body.addedByUserId,
  };

  postsService.addPost(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};
//buscar cometarios
exports.getAllPosts = (req, res, next) => {
  const data = {};
  postsService.getAllPosts(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};
//Comentar um post
exports.addPostComment = (req, res, next) => {
  const data = {
    postId: req.body.postId,
    comment: req.body.comment,
    addedByUserId: req.body.addedByUserId,
  };
  postsService.addPostComment(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};
//buscar post
exports.getPostAllComments = (req, res, next) => {
  const data = {
    postId: req.query.postId,
  };
  postsService.getPostAllComments(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

//like and dislike
exports.likePost = (req, res, next) => {
  const data = {
    postId: req.body.postId,
  };
  postsService.likePost(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.dislikePost = (req, res, next) => {
  const data = {
    postId: req.body.postId,
  };
  postsService.dislikePost(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.deletePost = (req, res, next) => {
  const data = {
    postId: req.query.postId,
  };
  postsService.deletePost(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};


