import app from "index.js";

const app = express();
app.get("/", (req, res) => {
    res.send("hello world");
})