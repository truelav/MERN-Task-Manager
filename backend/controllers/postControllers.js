import Post from "../models/Post.js";

export const create = async (req, res) => {
  try {
    const { title, postBody, tags, imageUrl } = req.body;
    const userId = req.id;

    const newPost = new Post({
      title,
      postBody,
      tags,
      imageUrl,
      userId,
    });

    await newPost.save();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getAll = async (req, res) => {
  try {
    const { title, postBody, tags, imageUrl } = req.body;
    const userId = req.id;
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
