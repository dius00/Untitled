const express = require ("express");

const app = express();
const PORT = 3000;

app.use(express.static("dist"));

app.get("/api/helloworld", (req,res) => {
  res.send("hello world fella ");
});

app.listen(PORT, () =>{ 
  console.log(`listening @port ${PORT}`);
});