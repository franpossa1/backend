// clientController.js
import { getConnection, sql, queries } from "../database";

export const getClients = async (req, res) => {
  console.log("conectad")
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllClients);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewClient = async (req, res) => {
  const { name, lastName, dni, cardNum } = req.body;
  if (name == null || lastName == null || dni == null || cardNum == null) {
    return res.status(400).json({
      msg: "Bad Request. Por favor introduce todos los campos",
    });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("lastName", sql.VarChar, lastName)
      .input("dni", sql.VarChar, dni)
      .input("cardNum", sql.VarChar, cardNum)
      .query(queries.createNewClient);
    res.json({ name, lastName, dni, cardNum });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getClientById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(queries.getClientById);

    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteClientById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(queries.deleteClientById);

    res.json(result);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.send(error.message);
  }
};

export const updateClient = async (req, res) => {
  const { id } = req.params;
  const { name, lastName, dni, cardNum } = req.body;
  if (name == null || lastName == null || dni == null || cardNum == null) {
    return res.status(400).json({
      msg: "Bad Request. Por favor introduce todos los campos",
    });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("lastName", sql.VarChar, lastName)
      .input("dni", sql.VarChar, dni)
      .input("cardNum", sql.VarChar, cardNum)
      .input("id", sql.Int, id)
      .query(queries.updateClient);
    res.json({ name, lastName, dni, cardNum });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
