import express from "express";
import axios from "axios";

const app = express();

const port = 3000;

app.get("/", (req, res) => {

})

app.listen(port, () => {
    console.log('server is listening on port ${port}')
})