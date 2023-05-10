CREATE PROCEDURE ReadProducts
AS
BEGIN
  SELECT id, name, price
  FROM products;
END
