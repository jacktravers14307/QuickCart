import mongoose from "mongoose"

const basketItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: "products", required: true },
    quantity: { type: Number, required: true, default: 1 },
    addedAt: { type: Date, default: Date.now }
});

export default basketItemSchema