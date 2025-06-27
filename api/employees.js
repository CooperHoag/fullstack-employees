import express from "express";
import { getEmployees, createEmployee } from "#db/queries/employees";
const router = express.Router();
export default router;

// TODO: this file!
router.route("/").get(async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});

router.route('/').post(async (req, res) => {
  console.log('BODY', req.body);
  if (!req.body || !req.body.name || !req.body.birthday || !req.body.salary) {
    res.status(400).send('No body given');
  }else {
    const newEmployee = await createEmployee(req.body);
    res.status(201).send(newEmployee);
  }
});