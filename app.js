import express from 'express'
import { getNames, getName, createName , deleteName , updateName} from './database.js'
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
  res.send('APP IS WORKING !!!')
})
app.get("/employees", async (req, res) => {
  const name = await getNames()
  res.send(name)
})
app.get("/employee/:id", async (req, res) => {
  const id = req.params.id
  const name = await getName(id)
  res.send(name)
})
app.post("/employee", async (req, res) => {
  const { id, name} = req.body
  const name1 = await createName(id, name)
  res.status(201).send(name1)
})
app.post("/nameDelete", async (req, res) => {
    const { id } = req.body
    const name = await deleteName(id)
    res.status(201).send(name)
  })
app.post("/nameUpdate", async (req, res) => {
    const { id ,name } = req.body
    const name1 = await updateName(id,name)
    res.status(201).send(name1)
  })
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Error !!')
})
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
