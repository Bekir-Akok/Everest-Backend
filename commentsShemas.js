import mongoose from 'mongoose';

const commentsShema = mongoose.Schema({
    name: String,
    message: String
})

export default mongoose.model('comments', commentsShema);