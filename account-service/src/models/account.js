const db = require('../config/database');

class Account {
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM accounts');
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM accounts WHERE id = ?', [id]);
    return rows[0];
  }

  static async findByUserId(user_id) {
    const [rows] = await db.query('SELECT * FROM accounts WHERE user_id = ?', [user_id]);
    return rows;
  }

  static async create(accountData) {
    const { user_id, account_number, account_type } = accountData;
    const [result] = await db.query(
      'INSERT INTO accounts (user_id, account_number, account_type) VALUES (?, ?, ?)',
      [user_id, account_number, account_type]
    );
    return result.insertId;
  }

  static async update(id, accountData) {
    const { balance, account_type } = accountData;
    const [result] = await db.query(
      'UPDATE accounts SET balance = ?, account_type = ? WHERE id = ?',
      [balance, account_type, id]
    );
    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM accounts WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = Account;