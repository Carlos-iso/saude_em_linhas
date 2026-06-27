async function connect() {

    if (global.connection) {
        return global.connection;
    }

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    const client = await pool.connect();

    console.log("Conectado ao banco de dados");

    const result = await client.query('SELECT NOW()');
    console.log(result.rows[0]);

    client.release();

    global.connection = pool;
    return pool;

}

async function selectProducts() {
    const produtcs = await connect();
    const res = await produtcs.query('SELECT * FROM produtos');
    return res.rows;
}

async function selectProduct(numero){
    const product = await connect();
    const res = await product.query('SELECT * FROM produtos WHERE numero = $1', [numero]);
    return res.rows[0];
}

async function insertProduct(produto) {
    const product = await connect();
    await product.query('INSERT INTO produtos (numero, nome, preco, desconto) VALUES ($1, $2, $3, $4)', [produto.numero, produto.nome, produto.preco, produto.desconto]);
    
    // SELECT o produto inserido para confirmar
    const res = await product.query('SELECT * FROM produtos WHERE numero = $1', [produto.numero]);
    return res.rows[0];
}

async function updateProduct(numero, produto) {
    const product = await connect();
    await product.query('UPDATE produtos SET nome = $1, preco = $2, desconto = $3 WHERE numero = $4', [produto.nome, produto.preco, produto.desconto, numero]);
    
    // SELECT o produto atualizado para confirmar
    const res = await product.query('SELECT * FROM produtos WHERE numero = $1', [numero]);
    return res.rows[0];
}

module.exports = {
    connect,
    selectProducts,
    selectProduct,
    insertProduct,
    updateProduct
}
