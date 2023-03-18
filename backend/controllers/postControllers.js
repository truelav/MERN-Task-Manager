import Post from "../models/Post.js";
import { validationResult } from "express-validator";

export const create = async (req, res) => {
  try {
    const doc = new Post({
      title: req.body.title,
      postBody: req.body.postBody,
      tags: req.body.tags,
      imageUrl: req.body.imageUrl,
      user: req.id,
      viewCount: 1,
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
    const allPosts = await Post.find().populate("user").exec();

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

    // const currentPost = Post.findOneAndUpdate(
    //   {
    //     _id: postId,
    //   },
    //   {
    //     $inc: { viewCount: 1 },
    //   },
    //   {
    //     returnDocument: "after",
    //   },
    //   (error, currentPost) => {
    //     if (error) {
    //       console.log(error);
    //       return res.status(500).json({ message: error });
    //     }
    //     if (!currentPost) {
    //       return res.status(404).json({ message: "Could not found the post" });
    //     }

    //     return res.json(currentPost);
    //   }
    // );

    const currentPost = await Post.findById(postId);

    res.status(200).json({ message: currentPost });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const remove = async (req, res) => {
  //we need to check if the token of the user is the same
  //as the creator of the post
  // Also need to handle the errors

  try {
    const postId = req.params.id;
    // const post = await Post.findById(postId);
    // const userId = post.user;
    // console.log(userId);
    // res.status(201).json(userId);
    const user = await Post.findByIdAndDelete(postId);
    res.status(200).json({ message: "Post Deleted Successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const edit = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, postBody, tags, imageUrl } = req.body;

    Post.findOneAndUpdate(
      { _id: postId },
      { title, postBody, tags, imageUrl },
      (error, data) => {
        if (error) {
          console.log(error);
        } else {
          console.log(data);
        }
      }
    );
    res.status(200).json({ message: "Post modified successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const uploadImg = async (req, res) => {};
