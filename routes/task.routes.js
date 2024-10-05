const express = require('express');
const router = express.Router();
const tasks = require("../MOCK_DATA.json");

//

router.get('/', (req, res) => {
	// Retornar el listado de todas las tareas...
	res.status(200).json(tasks);
});

router.get('/:id', (req, res) => {
	// Retornar la tarea identificada con id...
	let tarea = tasks.find((task) => {
		return task.id == req.params.id;
	})
	res.status(200).json(tarea);
});

router.post('/', (req, res) => {
	const body = req.body;
	tasks.push(body);
	console.log(body);
	res.send("tarea enviada");
});

router.put('/:id', (req, res) => {
	// Editar la tarea identificada con id...
	const infoActualizada = req.body;
	const id = req.params.id;

	const index = tasks.findIndex((task) => task.id == id); //-1 si no encuentra 

	if (index !== -1) {
		// Actualizar los campos de la tarea existente con la nueva información
		tasks[index ] = { ...tasks[index ], ...infoActualizada };

		res.status(200).json(tasks[index]); // Responder con la tarea actualizada

	} else {
		// Si la tarea no se encuentra, devolver un error 404
		res.status(404).send("Tarea no encontrada");
	} 

	/* tasks[index] = { ...tasks[index], ...infoActualizada };: Esta línea actualiza la tarea que fue encontrada en la posición index.
Utiliza el operador de propagación (...) para combinar el objeto original tasks[index] con la nueva información recibida en infoActualizada.
Si algún campo en infoActualizada coincide con un campo existente, se sobreescribe. Si no coincide, se conserva el valor original.*/


});

router.delete('/:id', (req, res) => {
	// Eliminar la tarea identificada con id...
	const id= req.params.id; 
	const index = tasks.findIndex((task) => task.id == id); //-1 si no encuentra 
	
	if(index==-1){
		return res.status(404).send("Tarea no encontrada");
	}
	tasks.splice(index,1); //metodo para eliminar, el 1 es la cantidad que elimnina a la derecha 
	
	res.send(tasks);

});

module.exports = router;