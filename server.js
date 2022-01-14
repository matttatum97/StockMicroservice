const express = require("express");
const stockRouters = require("./routes/stockRouter.js")
const dynamicInfoRouters = require("./routes/dynamicInfoRouter.js")
const investedRouter = require("./routes/investRouter.js")
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())
app.use("/invest", investedRouter)
app.use("/stocks", stockRouters)
app.use("/dynamicInfo", dynamicInfoRouters)
app.get("/", (req, res) => {
    res.send("Hello World!")
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})