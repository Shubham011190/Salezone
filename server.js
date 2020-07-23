const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();
app.use(bodyParser);

mongoose.connect("mongodb://localhost/wamazona-db", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

const productSchema = new mongoose.Schema({
    _id: { type: shortid.generate },
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],
});

const Product = mongoose.model("products", productSchema);

app.get("/api/products", async(req, res) => {
    const products = await Product.find({});
    res.send(products);
})