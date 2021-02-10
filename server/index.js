const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

//Routes//
//create a todo 
app.post("/todo", async(req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo  (description) VALUES($1)", 
        [description]
        );

        res.json(newTodo[0]);
    } catch (error) {
        console.error(err.message);
    }
})
//get all todos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
})
//get a todo
//update a todo
//delete a todo

app.listen(5000, () => {
    console.log("app has started on port 5000")
});