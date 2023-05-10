CREATE PROCEDURE GetProductById
  @productId VARCHAR(100)
AS
BEGIN
  SELECT id, name, price
  FROM products
  WHERE id = @productId;
END