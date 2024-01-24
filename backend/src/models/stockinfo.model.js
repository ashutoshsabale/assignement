import mongoose from "mongoose"

const stockSchema = new mongoose.Schema({
    name : String,
    last: Number,
    buy: Number,
    sell: Number,
    volume: Number,
    base_unit: String
})

export const Stock = mongoose.model("Stock", stockSchema)