const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("🚀 Updated CI/CD working!");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});