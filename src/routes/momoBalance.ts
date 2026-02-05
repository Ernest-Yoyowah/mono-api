import {Router} from "express";

const router = Router();

router.get("/", (req: any, res: any) => {
    res.json({
        accountid: "42453",
        balance: 5000,
        currency: "USD",
        date: new Date().toISOString(),
    })
})


export default router;