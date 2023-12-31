import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    wallet: { type: Number, required: true }
  })

export default model("User", UserSchema)
