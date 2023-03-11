import Post from "../models/Post.js";
import { validationResult } from "express-validator";

export const create = async (req, res) => {
  // let userId = req.id;
  // return res.json({ messsage: userId });

  try {
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //   return res.status(400).json(errors.array());
    // }
    // const userId = req.id;
    // const { title, postBody, tags, imageUrl } = req.body;

    const doc = new Post({
      title: req.body.title,
      postBody: req.body.postBody,
      tags: req.body.tags,
      imageUrl: req.body.imageUrl,
      user: req.id,
    });

    await doc.save();

    res.status(200).json({ message: doc });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const getAll = async (req, res) => {
  try {
    const allPosts = await Post.find();

    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;

    // So here we are finding the post by id (first parameter)
    // We are updating the viewCount + 1     (Second parameter)
    // return the updated post with          (Third parameter)
    // do all the operations callback        (Fourth parameter)

    const currentPost = Post.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { viewCount: 1 },
      },
      {
        returnDocument: "after",
      },
      (error, currentPost) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: error });
        }
        if (!currentPost) {
          return res.status(404).json({ message: "Could not found the post" });
        }

        return res.json(currentPost);
      }
    );

    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
