import mongoose from "mongoose"
import basketItemSchema from "./basketModel"

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true, unique: false},
    lastName: {type: String, required: true, unique: false},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: false},
    role: {type: String, enum: ["customer", "seller", "admin"], default: "customer"},
    basket: [basketItemSchema],
    itemsForSale: [{ type: mongoose.Schema.Types.ObjectId, ref: "products" }]
})

const User = mongoose.model("users", userSchema)

export default User