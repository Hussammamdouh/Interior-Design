const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      console.error('Validation Error:', error.details[0].message); // Debugging
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  };
};

module.exports = validate; // Export the validate function