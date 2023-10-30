export const queries ={
    getAllProducts: "SELECT *  FROM  [dbo].[Products]",
    createNewProduct:  "INSERT INTO [Products] (name,description,quantity) VALUES (@name,@description,@quantity)",
    getProductById:  "SELECT *  FROM  [dbo].[Products] where Id = @id",
    deleteProductById:  "DELETE   FROM  [dbo].[Products] where Id = @id",
    createNewProduct:  "UPDATE [Products] SET Name = @name, Description = @description, Quantity =@quantity where Id = @id",

}