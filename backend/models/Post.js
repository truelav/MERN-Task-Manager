import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    postBody: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
