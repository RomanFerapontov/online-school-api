class ClassesController {
  get(req, res) {
    try {
      res.status(200).json({ data: [] });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  post(req, res) {
    try {
      res.status(201).json({ data: [] });
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
      res.status(204).json({ data: {} });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  enroll(req, res) {
    try {
      res.status(204).json({ data: {} });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  expel(req, res) {
    try {
      res.status(204).json({ data: {} });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = ClassesController;
