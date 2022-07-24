const EmployeeModal = require("../models/Employee");

module.exports = class EmployeeController {
  static createDoc = async (req, res) => {
    try {
      //  const { Name, Age, Salary } = req.body;
      const doc = new EmployeeModal(req.body);
      const result = await doc.save(req.body);
      res.status(201).send(result);
    } catch (error) {
      console.log(error);
    }
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await EmployeeModal.find();
      res.send(result);
    } catch (error) {
      console.log(Error);
    }
  };

  static getSingleDocById = async (req, res) => {
    try {
      const result = await EmployeeModal.findById(req.params.id);
      res.send(result);
    } catch (error) {
      console.log(Error);
    }
  };

  static updateDocById = async (req, res) => {
    try {
      const result = await EmployeeModal.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  };

  static deleteDocById = async (req, res) => {
    try {
      const result = await EmployeeModal.findByIdAndDelete(req.params.id);
      res.status(204).send(result);
    } catch (error) {
      console.log(error);
    }
  };
};
