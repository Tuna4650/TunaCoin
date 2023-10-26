import express from "express";


const app = express();

app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});