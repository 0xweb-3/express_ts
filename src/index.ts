import express, {Request, Response, NextFunction} from "express";
import bodyParser from "body-parser";

import router from "./router"

const app = express();

app.use(bodyParser.urlencoded({extended: false})); // 解析请求内容
app.use(router);

app.use((req:Request, res: Response, next:NextFunction)=>{
    // 实现的代码
    req.xinName = "xin"
    next()
})


app.listen(8080, ()=>{
    console.log("server is running is :8080")
})
