const http = require("http");
const express = require("express");
const googleTranslateApi = require("@vitalets/google-translate-api");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/translate", async function (req, res, next) {
  const { from, to, text } = req.body;

  try {
    const result = await googleTranslateApi(text, {
      from,
      to,
      autoCorrect: true,
    });

    return res.status(200).json({
      status: "success",
      data: result.text,
    });
  } catch (err) {
    if (!err.code || err.code == "ENOTFOUND") {
      err.statusCode = 400;
      err.code = 400;
      err.message = "Unable to connect to the internet.";
    }
    return res
      .status(err.statusCode || err.code || 500)
      .json({ status: "failed", message: err.message });
  }
});

const server = http.createServer(app);

server.listen(4000, function () {
  console.log("listening on port 4000");
});
