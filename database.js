import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
const pool = mysql.createPool({
  host: process.env.db_host,
  port:"3306",
  user: process.env.db_user,
  password: process.env.db_pass,
  database: process.env.db_name
}).promise()
export async function getNames() {
  const [rows] = await pool.query("SELECT * FROM employee")
  return rows
}
export async function getName(id) {
  const [rows] = await pool.query(`
  SELECT *
  FROM employee
  WHERE id = ?
  `, [id])
  return rows[0]
}
export async function createName(id,name) {
  const [result] = await pool.query(`
  INSERT INTO employee (id, name)
  VALUES (?, ?)` , [id, name])
  return "inserted !!"
}
export async function deleteName(id) {
    const [result] = await pool.query(`
    DELETE from employee where id= ? ` ,[id])
    return "Deleted !!"
  }
  export async function updateName(id,name) {
    const [result] = await pool.query(`
    Update employee set name =?  where id=?` ,[name,id])
    return getName(id)
  }