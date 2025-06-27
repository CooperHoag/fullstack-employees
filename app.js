import express from "express";
const app = express();
export default app;

// TODO: this file!
app.use(express.json());

import router from './api/employees.js'
app.use('/employees', router);
