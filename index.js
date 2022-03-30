const express = require ('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require ('cors');
const Product = require('./modules/product');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const app = express ();
app.use(bodyParser.json());
app.use (cors());
app.use (express.static('products'));
app.use (fileUpload());


const port = 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8dpf0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then ((result) => app.listen (process.env.PORT || port))
.catch ((err) => console.log(err))


app.get ('/products', (req, res) => {
  Product.find()
         .then ((result) => {
            res.send (result);
         })
         .catch ((err) => console.log (err))
})

app.post("/products", async (req, res) => {
	const post = new User({
		name: req.body.name,
		phone: req.body.phone,
      password: req.body.password
	})
	await post.save()
	res.send(post)
})



