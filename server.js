const express = require("express");
const stockRouters = require("./routes/stockRouter.js")
const cors = require("cors")
const dynamicInfoRouters = require("./routes/dynamicInfoRouter.js")
const investedRouter = require("./routes/investRouter.js");
const { options } = require("./routes/stockRouter.js");
const app = express();
const port = process.env.PORT || 3000;
app.use(cors({origin:"http://localhost:4200", optionsSuccessStatus:200, credentials:true}))
app.use(express.json()) //For JSON requests
app.use(express.urlencoded({extended: true}));
app.use("/invest", investedRouter)
app.use("/stocks", stockRouters)
app.use("/dynamicInfo", dynamicInfoRouters)
app.get("/", (req, res) => {
    res.send("Hello World!")
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app //for testing