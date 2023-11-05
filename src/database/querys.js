export const queries ={
    getAllProducts: "SELECT *  FROM  [dbo].[Products]",
    createNewProduct:  "INSERT INTO [Products] (name,description,quantity) VALUES (@name,@description,@quantity)",
    getProductById:  "SELECT *  FROM  [dbo].[Products] where Id = @id",
    deleteProductById:  "DELETE   FROM  [dbo].[Products] where Id = @id",
    updateProduct:  "UPDATE [Products] SET Name = @name, Description = @description, Quantity =@quantity where Id = @id",

    getAllClients: "SELECT * FROM [dbo].[Clients]",
    createNewClient: "INSERT INTO [Clients] (Name, LastName, DNI, CardNum) VALUES (@name, @lastName, @dni, @cardNum)",
    getClientById: "SELECT * FROM [dbo].[Clients] WHERE Id = @id",
    deleteClientById: "DELETE FROM [dbo].[Clients] WHERE Id = @id",
    updateClient: "UPDATE [Clients] SET Name = @name, LastName = @lastName, DNI = @dni, CardNum = @cardNum WHERE Id = @id",

    getAllProductProviders: "SELECT * FROM [dbo].[ProductProviders]",
    createNewProvider: "INSERT INTO [ProductProviders] (SocialReason, Phone, Address) VALUES (@socialReason, @phone, @address)",
    getProviderById: "SELECT * FROM [dbo].[ProductProviders] WHERE Id = @id",
    deleteProviderById: "DELETE FROM [dbo].[ProductProviders] WHERE Id = @id",
    updateProvider: "UPDATE [ProductProviders] SET SocialReason = @socialReason, Phone = @phone, Address = @address WHERE Id = @id"

}