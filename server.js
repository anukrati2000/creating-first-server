const express = require('express');

// initialisation
const app = express();
// application will now use json format for data
app.use(express.json());

const port = 8081;

const toDoList = ["Complete Node Byte", "Play Cricket"];

// http://localhost:8081/todos
app.get("/todos", (req, res) => {
    // callback
    res.status(200).send(toDoList);
});

app.post("/todos", (req, res) => {
    const newToDo = req.body.item;
    toDoList.push(newToDo);
    res.status(201).send({
        message: "Task added successfully",
    });
});

app.delete("/todos", (req, res) => {
    const itemToDelete = req.body.item;

    toDoList.find((element, index) => {
        if (element === itemToDelete) {
            toDoList.splice(index, 1);
        }
    });

    res.status(202).send({
        message: `Deleted item "${req.body.item}"`,
    })
});

// put, patch
app.all("/todos", (req, res) => {
    res.status(501).send();
})

app.all("*", (req, res) => {
    res.status(404).send();
});

app.listen(port, () => {
    //callback
    console.log(`Nodejs server started on port ${port}`);
});