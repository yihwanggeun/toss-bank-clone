const db = require("./../config/database")

class Product{
    static async create(product) {
        const [result] = await db.query(
          'INSERT INTO financial_products (name, type, description, interest_rate, term_months, min_amount, max_amount) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [product.name, product.type, product.description, product.interest_rate, product.term_months, product.min_amount, product.max_amount]
        );
        return result.insertId;
      }
    

    static async delete(id) {
        const [result] = await db.query('DELETE FROM financial_products WHERE id = ?', [id]);
        return result.affectedRows;
    }

    static async findAll() {
        const [rows] = await db.query('SELECT * FROM financial_products');
        return rows;
      }

    static async findById(id) {
        const [rows] = await db.query('SELECT * FROM financial_products WHERE id = ?', [id]);
        return rows[0];
    }

    static async update(id, product) {
        const [result] = await db.query(
          'UPDATE financial_products SET name = ?, type = ?, description = ?, interest_rate = ?, term_months = ?, min_amount = ?, max_amount = ? WHERE id = ?',
          [product.name, product.type, product.description, product.interest_rate, product.term_months, product.min_amount, product.max_amount, id]
        );
        return result.affectedRows;
    }  
}

module.exports = Product;