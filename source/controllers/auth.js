class Login {
  login(req, res) {
    try {
      res.status(200).json({ data: "User login" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  logout(req, res) {
    try {
      res.status(204).json({ message: "User logout" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = Login;
