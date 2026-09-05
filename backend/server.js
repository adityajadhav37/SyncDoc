const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("SyncDoc Backend is Running!");
});
const Document = require("./models/Document");

app.post("/api/documents", async (req, res) => {
    try {
        const document = new Document({
            title: req.body.title,
            nodes: req.body.nodes || [],
        });

        const savedDocument = await document.save();

        res.status(201).json(savedDocument);
    } catch (error) {
        res.status(500).json({
            message: "Failed to create document",
            error: error.message,
        });
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`SyncDoc server running on http://localhost:${PORT}`);
});