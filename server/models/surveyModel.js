import mongoose from 'mongoose'

const surveySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    role: {
      type: String,
      required: true,
    },
    struggle: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Survey = mongoose.model('Survey', surveySchema)

export default Survey
