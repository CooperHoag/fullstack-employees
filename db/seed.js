import db from "./client.js";
import { createEmployee } from "./queries/employees.js";

await seedEmployees();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  console.log('CONNECTING TO DB');
  await db.connect();
  console.log('CONNECTED TO DB');

  console.log('ADDING EMPLOYEES');
  await createEmployee({ name: 'Mia Wallace', birthday: '1980-05-10', salary: 70000000 });
  await createEmployee({ name: 'Marsellus Wallace', birthday: '1975-08-07', salary: 85000000 });
  console.log('EMPLOYEE CREATED');

  console.log('DISCONNECTING FROM DB');
  await db.end();
  console.log('DISCONNECTED');
  // TODO
}
