import mongoose from 'mongoose';
import User from './User';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
})

export default mongoose.model('Product', ProductSchema);