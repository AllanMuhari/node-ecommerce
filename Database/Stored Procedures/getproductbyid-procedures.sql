CREATE PROCEDURE GetProductById
  @productId INT
AS
BEGIN
  SELECT id, name, price
  FROM products
  WHERE id = @productId;
END
