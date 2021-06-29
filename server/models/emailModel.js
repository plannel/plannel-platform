import mongoose from 'mongoose'

// Create Schema

const emailSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Email = mongoose.model('Email', emailSchema)

export default Email
