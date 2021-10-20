const express = require('express');
const jwt = require('jsonwebtoken');
const employee = express.Router();
const db = require('../config/database');

employee.post("/add", async (req, res, next) => {
    const { employee_name, employee_lastnames, employee_phone, employee_email, employee_address } = req.body;

    if (employee_name && employee_lastnames && employee_phone && employee_email && employee_address) {
        let query = "INSERT INTO employees (employee_name, employee_lastnames, employee_phone, employee_email, employee_address) ";
        query += `VALUES ('${employee_name}', '${employee_lastnames}', '${employee_phone}', '${employee_email}', '${employee_address}')`;

        const rows = await db.query(query);

        if (rows.affectedRows == 1) {
            return res.status(200).json({ code: 200, message: "Empleado registrado correctamente" });
        };
        return res.status(200).json({ code: 500, message: "Ocurrió un error" });
    };
    return res.status(200).json({ code: 500, message: "Campos incompletos" });
});

employee.patch("/edit", async (req, res, next) => {
    const { employee_id, employee_name, employee_lastnames, employee_phone, employee_email, employee_address } = req.body;

    if (employee_id && employee_name && employee_lastnames && employee_phone && employee_email && employee_address) {
        let query = `UPDATE employees SET employee_name='${employee_name}', employee_lastnames='${employee_lastnames}',`;
        query += `employee_phone='${employee_phone}', employee_email='${employee_email}', employee_address='${employee_address}' WHERE employee_id=${employee_id}`;

        const rows = await db.query(query);

        if (rows.affectedRows == 1) {
            return res.status(200).json({ code: 200, message: "Información de empleado modificada exitosamente" });
        };
        return res.status(200).json({ code: 500, message: "Ocurrió un error" });
    };
    return res.status(200).json({ code: 500, message: "Campos incompletos" });
});

employee.delete("/delete", async (req, res, next) => {
  console.log("d");
    const { employee_id } = req.body;

    if (employee_id) {
        const query = `DELETE FROM employees WHERE employee_id=${employee_id}`;
        const rows = await db.query(query);

        if (rows.affectedRows == 1) {
            return res.status(200).json({ code: 200, message: "Información de empleado eliminada exitosamente" });
        };
        return res.status(200).json({ code: 500, message: "Ocurrió un error" });
    };
    return res.status(200).json({ code: 500, message: "Campos incompletos" });
});

employee.post("/search", async (req, res) => {
    const { employee_name } = req.body.data;
    if (employee_name) {
        const query = ` SELECT * FROM employees WHERE employee_name='${employee_name}';`;
        const rows = await db.query(query);

        if (rows.length > 0) {
            return res.status(200).json({ code: 200, message: "Empleado encontrado", employee: rows });
        };
        return res.status(200).json({ code: 500, message: "Ocurrió un error" });
    };
    return res.status(200).json({ code: 500, message: "Campos incompletos" });
});

employee.get("/", async (req, res, next) => {
    const emp = await db.query("SELECT * FROM employees");
    return res.status(200).json({ code: 200, message: emp });
});


module.exports = employee;
