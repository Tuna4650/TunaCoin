import express from "express";


const app = express();

app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (req, res) => {
    let sayi = 5;
    res.render("index.ejs", { number: sayi });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});