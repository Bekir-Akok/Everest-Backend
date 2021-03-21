import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import products from './productsShemas.js';
import comments from './commentsShemas.js';
import categories from './categoriesShemas.js';


//App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = "mongodb+srv://adminEverest:adminEverest@cluster0.vflfi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//API Endpoints
app.get("/", (req, res) => res.status(200).send('Welcome to Everest Backend'));

// Products
app.post("/products", (req, res) => {
    const dbProducts = req.body;

    products.create(dbProducts, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
    });

app.get("/products", (req, res) => {
    products.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// Comments
app.post("/comments", (req, res) => {
    const dbComments = req.body;

    comments.create(dbComments, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
    });

app.get("/comments", (req, res) => {
    comments.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// Categories
app.post("/categories", (req, res) => {
    const dbCategories = req.body;

    categories.create(dbCategories, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
    });

app.get("/categories", (req, res) => {
    categories.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})


//Listener
app.listen(port, () => console.log(`Listening the local host: ${port}`));