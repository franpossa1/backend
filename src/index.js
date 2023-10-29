import app from "./app"
import connection from  "./database/connection"
app.listen(app.get('port'))
//settings

console.log("Server on port", app.get('port'))