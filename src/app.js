import express from "express";
import config from "./config";
import productRoutes from "./routes/products.routes";
const app = express();
 
//settings
app.set('port',3000)

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(productRoutes);

export default app