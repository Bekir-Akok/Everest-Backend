import mongoose from 'mongoose';

const productsShema = mongoose.Schema({
    name: String,
    imgUrl: String,
    price: String ,
    description: Array,
    categories: String,
})

export default mongoose.model('products', productsShema);