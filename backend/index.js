const express = require("express");
const cors = require("cors");
const { sendMail } = require("./utils/sendMail");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => res.send("OK"));

app.post("/api/sendMail", async (req, res) => {
  const body = req.body;
  const mailStatus = await sendMail(req.body);
  return res.status(200).json(mailStatus);
});

app.listen(port, () => console.log(`server is running on port: ${port}`));
