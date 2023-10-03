import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs",{ activeTab: 'home' });
});

app.get("/about", (req, res) => {
  res.render("about.ejs", { activeTab: 'about' });
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  