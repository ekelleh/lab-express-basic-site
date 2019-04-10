const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/views/index.html`);
});

app.get("/about", (request, response) => {
    response.sendFile(`${__dirname}/views/about.html`);
});

app.get("/gallery", (request, response) => {
    response.sendFile(`${__dirname}/views/photos.html`);
});

app.get("/text", (request, response) => {
    response.sendFile(`${__dirname}/views/text.html`);
});

app.listen(666);
