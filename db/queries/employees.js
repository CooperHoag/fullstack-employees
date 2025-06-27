/** @returns the employee created according to the provided details */
import db from "#db/client";
export async function createEmployee({ name, birthday, salary }) {
  const sql = `
    INSERT INTO employees (name, birthday, salary)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const { rows: [ createEmployee ] } = await db.query(sql, [name, birthday, salary]);
  return createEmployee;
}

// === Part 2 ===

/** @returns all employees */
// I cannot get this to pass
export async function getEmployees() {
  // TODO
  const sql = `
    SELECT *
    FROM employees
  `;
  const { rows: employees } = await db.query(sql);
  return employees;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
  console.log('getting employee')
  const sql = `
    SELECT * 
    FROM employees
    WHERE id = $1
  `;
  const {rows: [employeeById]} = await db.query(sql, [id])
  // console.log(employeeById)
  return employeeById;
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
  const sql = `
    UPDATE employees
    SET name=$2, birthday=$3, salary=$4
    WHERE id=$1
    RETURNING *
  `;
  const { rows: [updatedEmployee] } = await db.query(sql, [id, name, birthday, salary]);
  return updatedEmployee;
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
  const sql = `
    DELETE FROM employees
    WHERE id=$1
    RETURNING *
  `;
  const {rows: [deleteEmployee]} = await db.query(sql, [id])
  return deleteEmployee;
}
