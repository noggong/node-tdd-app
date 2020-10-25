const express = require("express");

// Constant
const PORT = 5000;
const productRoutes = require("./routes");
const mongoose = require("mongoose");
mongoose
    .connect(
        "mongodb+srv://noggong:QOLVYi85mN7XTnxt@cluster0.sbgbo.mongodb.net/tdd-app?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDb Connected..."))
    .catch((err) => console.log(err));

// App
const app = express();

app.use("/api/products", productRoutes);
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hellow World");
});

app.listen(PORT);
console.log(`Running on Http://127.0.0.1:${PORT}`);
