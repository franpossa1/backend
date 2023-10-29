 
import { getConnection } from "../database/connection";

export const getProducts = async (req,res) => {
    const pool = await  getConnection()
    const result = await pool.request().query("SELECT *  FROM  [dbo].[Products]")
    //.req().query('  SELECT *  FROM  Products')
res.json(result.recordset)
}

export const createNewProduct = async (req,res) => {
    const {name,description,quantity} = req.body
    if(name == null || description == null || quantity == null){
        return res.status(400).json({
            msg:'Bad Request. Porfavor introduce todos los campos'
        })
    }
    const pool = await  getConnection()
    const result = await pool.request().query("SELECT *  FROM  [dbo].[Products]")
  console.log(name,description,quantity)
res.json(name,description,quantity)
}