const { user } = require("../models/");

class UsersController {
  get(req, res) {
    try {
      res.status(200).json({ data: [] });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async post(req, res) {
    try {
      const data = await user.create(req.body);
      res.status(201).json({ data });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  getByHash(req, res) {
    try {
      res.status(200).json({ data: {} });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  updateByHash(req, res) {
    try {
      res.status(200).json({ data: {} });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  deleteByHash(req, res) {
    try {
      res.status(204).send.json({ data: {} });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new UsersController();
