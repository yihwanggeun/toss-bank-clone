const Loan = require('../models/loan');

exports.getLoanById = async (req, res) => {
    try {
      const loan = await Loan.findById(req.params.id);
      if (loan) {
        res.json(loan);
      } else {
        res.status(404).json({ message: 'Loan not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
exports.createLoan = async (req, res) => {
try {
    const id = await Loan.create(req.body);
    res.status(201).json({ id, ...req.body});
} catch (error) {
    res.status(500).json({ message: error.message });
}
};