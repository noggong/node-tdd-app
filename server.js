const express = require("express");

// Constant
const PORT = 5000;

// App
const app = express();
const productRoutes = require("./routes");

app.use("/api/products", productRoutes);
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hellow World");
});

app.listen(PORT);
console.log(`Running on Http://${HOST}:${PORT}`);
