/*	GIL, MARIA DE LOS ANGELES
	PEDERNERA CAÑADAS, CANDELA NAHIR
*/ 

const express = require('express');
const app = express();
const puerto = 3001;
const tasksRoutes = require("./routes/task.routes.js");

app.use(express.json());
app.use("/tasks", tasksRoutes);

app.get('/', 
	(req, res) => res.send('¡Hola!')
);

app.listen(puerto, 
	()=> console.log("Server is Ready! 🫡")
)