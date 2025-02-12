import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    productName: {type: String, required: true, unique: false},
    productPrice: {type: Number, required: true, unique: false},
    productCategory: {type: String, required: true, unique: false},
    productStock: {type: Number, required: true, unique: false},
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "users" }
})

const Product = mongoose.model("products", productSchema)

export default Product