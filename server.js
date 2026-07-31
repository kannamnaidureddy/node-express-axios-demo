const express = require("express");
const axios = require("axios");

const app = express();

const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// Serve frontend files from public folder
app.use(express.static("public"));

// Basic test API
app.get("/api/status", (req, res) => {
    res.json({
        success: true,
        message: "Node.js + Express.js server is running"
    });
});

// API using Axios
app.get("/api/users", async (req, res) => {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        res.json({
            success: true,
            data: response.data
        });

    } catch (error) {
        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch users"
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});