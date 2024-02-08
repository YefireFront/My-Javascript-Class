/*
Ejercicio: Sistema de gestión de tareas
Crea un sistema de gestión de tareas que permita al usuario agregar nuevas tareas, marcar tareas como completadas
eliminar tareas y ver todas las tareas existentes. Utiliza un objeto para representar cada tarea, con propiedades como id, descripcion y completada.

Requisitos:

Debe haber funciones para agregar, marcar como completada, eliminar y mostrar todas las tareas.
Las tareas deben tener un identificador único (id).
Debe manejar el estado de completado de cada tarea.
Debe proporcionar una interfaz de usuario simple para que el usuario interactúe con el sistema de gestión de tareas.
*/


class Tasks {
    constructor(id,description){
        this.id = id,
        this.description = description,
        this.state = false
    }
}


const taskManager = {
    task: [],
    addTask(description){
        const newTask = new Tasks(Date.now(), description)
        this.task.push(newTask)
    },

    checkTask(id){
        const task = this.task.find(e => e.id === id)
        if (task) {
            task.state = true
        }
    },

    deleteTask(id){
        this.task = this.task.filter(e=> e.id !== id)
    },

    showTask(){
        this.task.forEach(e=>{
            console.log(`ID. ${e.id} DESCRIPTION: ${e.description}`);
        })
    }
}



taskManager.addTask('go to the gym')
taskManager.addTask('Star to read a new book')
taskManager.showTask()
