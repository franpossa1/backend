import express from "express";
import config from "./config";
import productRoutes from "./routes/products.routes";
import clientsRoutes from "./routes/clients.routes";
import ProductProvidersRoutes from "./routes/providers.routes";
const app = express();
 
//settings
app.set('port',3000)

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(productRoutes);
app.use(clientsRoutes);
app.use(ProductProvidersRoutes);

export default app