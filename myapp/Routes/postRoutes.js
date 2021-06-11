const express = require('express');
const router = express.Router();
const PostModel = require('../models/post');

router.patch('/post/:id', async (req, res) => {
    try {
      const updatedPost = await PostModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.send(updatedPost);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  router.delete('/post/:id', async (req, res) => {
    try {
      const post = await PostModel.findByIdAndDelete(req.params.id);
      if (!post) res.status(404).send('Not found');
      res.status(200).send();
    } catch (err) {
      res.status(500).send(err);
    }
  });
module.exports = router;