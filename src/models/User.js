// src/models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  image: String,
  emailVerified: Date,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);