// notes router

const express = require("express");

const router = express.Router();

const Product = require("../models/notesModel");


// Create route
router.get("/", async (req, res) => {
    console.log("GET");
    try {
    let products = await Product.find();
    res.json(products);
    } catch {
        res.status(500).send()
    }
})

// Create route for detail
router.get("/:id", (req, res) => {
    console.log("GET");
    res.json(`request for item ${req.params.id}`);
})

// Create route
router.post("/", (req, res) => {
    console.log("POST");
    res.send("Hello Express");
})

// Create route
router.delete("/", (req, res) => {
    console.log("DELETE");
    res.send("Hello Express");
})

// Create route
router.options("/", (req, res) => {
    console.log("OPTIONS");
    res.send("Hello Express");
})

module.exports = router;