import { Router, Request, Response} from "express";

const router = Router();

router.get("/", (req:Request, res: Response) =>{
    res.send(`<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <form action="/getData" method="post">
        <input type="password" name="password">
        <button>提交</button>
    </form>
</body>
</html>`)
})


interface RequestWithBody extends Request{
    body: {
        // password: string | undefined
        [key: string]: string | undefined
    }
}

router.post("/getData", (req:RequestWithBody, res: Response) =>{
    const {password, name} = req.body;
    if (password === "xinxin") {
        res.send("success")
    } else{
        res.send(`${req.xinName} error`)
    }
}) 

export default router
