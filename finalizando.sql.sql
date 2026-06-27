--create table Fruta (
--	codigo int primary key,
--	descricao varchar(50) not null,
--	preco float not null
--);


--INSERT INTO fruta (codigo, descricao, preco) 
--VALUES 
--    (2, 'Maca', 2.80),
--    (3, 'Uva', 3.25),
--    (4, 'Pera', 1.00),
--    (5, 'Maracuja', 2.00),
--	(6, 'Mamao', 2.55),
--	(7, 'Goiaba', 2.00),
--	(8, 'Laranja', 3.25),
--	(9, 'Limao', 0.85),
--	(10, 'Melancia', 2.55);

select * from fruta order by descricao asc;

select * from fruta order by preco desc;

select distinct preco from fruta;

select max(preco), min(preco), avg(preco), count(codigo), sum(preco) from fruta;

select max(preco) as maior, min(preco) as menor, avg(preco) as media, count(codigo) as Qtde, sum(preco) as total from fruta;

select * from fruta where preco between 2.00 and 3.00;

select * from fruta where preco not between 2.00 and 3.00;

select * from fruta where preco in (2.00, 3.00);

select * from fruta where preco in (1.00, 2.00, 3.00);

select * from fruta where preco not in(2.00, 3.00);