import { getConnection, sql, queries } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProducts);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewProduct = async (req, res) => {
  const { name, description, quantity } = req.body;
  if (name == null || description == null || quantity == null) {
    return res.status(400).json({
      msg: "Bad Request. Porfavor introduce todos los campos",
    });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.VarChar, description)
      .input("quantity", sql.Int, quantity)
      .query(queries.createNewProduct);
    console.log(name, description, quantity);
    res.json(name, description, quantity);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()

      .input("id", sql.Int, id)
      .query(queries.getProductById);

    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()

      .input("id", sql.Int, id)
      .query(queries.deleteProductById);

    res.json(result);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.send(error.message);
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, quantity } = req.body;
  if (name == null || description == null || quantity == null) {
    return res.status(400).json({
      msg: "Bad Request. Porfavor introduce todos los campos",
    });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.VarChar, description)
      .input("quantity", sql.Int, quantity)
      .input("id", sql.Int, id)
      .query(queries.createNewProduct);
    console.log(name, description, quantity);
    res.json(name, description, quantity);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
