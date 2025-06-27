import db from "./client.js";
import { createEmployee, getEmployees, getEmployee, updateEmployee, deleteEmployee } from "./queries/employees.js";
import { faker } from "@faker-js/faker";

await seedEmployees();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  console.log('CONNECTING TO DB');
  await db.connect();
  console.log('CONNECTED TO DB');

  console.log('ADDING EMPLOYEES');
  await createEmployee({ name: 'Mia Wallace', birthday: '1980-05-10', salary: 70000000 });
  await createEmployee({ name: 'Marsellus Wallace', birthday: '1975-08-07', salary: 85000000 });
  await createEmployee({ name: faker.book.author(), birthday: faker.date.between({ from: '1950-01-01', to: '2000-12-31'}), salary: faker.number.int({ min:300000, max:2500000 }) });
  await createEmployee({ name: faker.book.author(), birthday: faker.date.between({ from: '1950-01-01', to: '2000-12-31'}), salary: faker.number.int({ min:300000, max:2500000 }) });
  await createEmployee({ name: faker.book.author(), birthday: faker.date.between({ from: '1950-01-01', to: '2000-12-31'}), salary: faker.number.int({ min:300000, max:2500000 }) });
  await createEmployee({ name: faker.book.author(), birthday: faker.date.between({ from: '1950-01-01', to: '2000-12-31'}), salary: faker.number.int({ min:300000, max:2500000 }) });
  await createEmployee({ name: faker.book.author(), birthday: faker.date.between({ from: '1950-01-01', to: '2000-12-31'}), salary: faker.number.int({ min:300000, max:2500000 }) });
  await createEmployee({ name: faker.book.author(), birthday: faker.date.between({ from: '1950-01-01', to: '2000-12-31'}), salary: faker.number.int({ min:300000, max:2500000 }) });
  await createEmployee({ name: faker.book.author(), birthday: faker.date.between({ from: '1950-01-01', to: '2000-12-31'}), salary: faker.number.int({ min:300000, max:2500000 }) });
  await createEmployee({ name: faker.book.author(), birthday: faker.date.between({ from: '1950-01-01', to: '2000-12-31'}), salary: faker.number.int({ min:300000, max:2500000 }) });
  console.log('EMPLOYEE CREATED');

  // console.log('DISCONNECTING FROM DB');
  // await db.end();
  // console.log('DISCONNECTED');
  // TODO

  // const employeeOne = await getEmployee(1);
  // console.log(employeeOne);

  const updatedEmployee = await updateEmployee({id: 1, name: 'Mister White', birthday: '1952-11-27', salary: 650000000})
  console.log(updatedEmployee);

  const deletedEmployee = await deleteEmployee(3)
  console.log(deletedEmployee);

}
