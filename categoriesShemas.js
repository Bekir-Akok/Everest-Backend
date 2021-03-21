import mongoose from 'mongoose';

const categoriesShema = mongoose.Schema({
    name: String,
    imgUrl: String,
})

export default mongoose.model('categories', categoriesShema);