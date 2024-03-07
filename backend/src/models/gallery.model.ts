import mongoose, { Schema, model } from 'mongoose'

type TGallery = {
  img: string
  userId: mongoose.ObjectId
}
// d
const gallerySchema = new Schema<TGallery>({
  img: {
    type: String,
    required: true,
  },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
})

export const Gallery = model<TGallery>('Gallery', gallerySchema)


