const db = require("../config/database")

class Loan{

  static async create(loan) {
    const [result] = await db.query(
      'INSERT INTO loan_contracts (user_id, product_id, amount, remaining_balance, start_date, end_date, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [loan.user_id, loan.product_id, loan.amount, loan.remaining_balance, loan.start_date, loan.end_date, loan.status || 'active']
    );
    return result.insertId;
  }
    
  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM loan_contracts WHERE user_id = ?', [id]);
    return rows;
  }

  
}

module.exports = Loan;