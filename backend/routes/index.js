//import express and router
import express from "express"
const router = express.Router()

router.get('/', (req, res) => {
    console.log("hey")
    res.json("hey")
})

export default router;