// providerController.js
import { getConnection, sql, queries } from "../database";

export const getProductProviders = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProductProviders);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewProvider = async (req, res) => {
  const { socialReason, phone, address } = req.body;
  if (socialReason == null || phone == null || address == null) {
    return res.status(400).json({
      msg: "Bad Request. Por favor introduce todos los campos",
    });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("socialReason", sql.VarChar, socialReason)
      .input("phone", sql.VarChar, phone)
      .input("address", sql.VarChar, address)
      .query(queries.createNewProvider);
    res.json({ socialReason, phone, address });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProviderById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(queries.getProviderById);

    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProviderById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(queries.deleteProviderById);

    res.json(result);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.send(error.message);
  }
};

export const updateProvider = async (req, res) => {
  const { id } = req.params;
  const { socialReason, phone, address } = req.body;
  if (socialReason == null || phone == null || address == null) {
    return res.status(400).json({
      msg: "Bad Request. Por favor introduce todos los campos",
    });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("socialReason", sql.VarChar, socialReason)
      .input("phone", sql.VarChar, phone)
      .input("address", sql.VarChar, address)
      .input("id", sql.Int, id)
      .query(queries.updateProvider);
    res.json({ socialReason, phone, address });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
