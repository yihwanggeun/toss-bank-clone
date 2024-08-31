const express = require('express');
const router = express.Router();
const Account = require('../models/account');

// 계좌 목록 조회
router.get('/', async (req, res) => {
  try {
    const accounts = await Account.findAll();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 계좌 생성
router.post('/', async (req, res) => {
  try {
    const id = await Account.create(req.body);
    res.status(201).json({ id, message: 'Account created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 계좌 상세 조회
router.get('/:id', async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (account) {
      res.json(account);
    } else {
      res.status(404).json({ message: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 계좌 정보 수정
router.put('/:id', async (req, res) => {
  try {
    const result = await Account.update(req.params.id, req.body);
    if (result) {
      res.json({ message: 'Account updated successfully' });
    } else {
      res.status(404).json({ message: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 계좌 삭제
router.delete('/:id', async (req, res) => {
  try {
    const result = await Account.delete(req.params.id);
    if (result) {
      res.json({ message: 'Account deleted successfully' });
    } else {
      res.status(404).json({ message: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;