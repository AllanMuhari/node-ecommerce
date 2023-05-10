import express, { json } from 'express'
import productRoutes from "./routes/productRoutes"

const app = express()
app.use(json())

app.use('/products',productRoutes)
app.listen(4000,()=>{
    console.log("Server is running")
})
