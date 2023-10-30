import sql from 'mssql';
const dbSettings = {
    user: "fran",
    password: "321321",
    server: "localhost",
    database:"Management-App",
    trustServerCertificate: true
}

export async function getConnection() {
try {
const pool  = await sql.connect(dbSettings);
return pool
} catch (error) {
    console.log(error)
}
}
export {sql
    };
 
 