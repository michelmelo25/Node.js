import { Database } from "./database.js";
import { Task } from "./model/task.js";
import { randomUUID } from 'node:crypto'
import { buildRoutePath } from "./utils/build-route-path.js";


const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { title, description } = req.query
            let filter = {}

            if (title)  filter.title = title
            if (description) filter.description = description

            const tasks = database.select('tasks', Object.keys(filter).length ? filter : null)
            res.writeHead(200).end(JSON.stringify({tasks}))
        }
    },{
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { title, description } = req.body
            const task = new Task(randomUUID(), title, description)
            const data = database.insert('tasks', task)
            res.writeHead(201).end(JSON.stringify({'tasks': data}))
        }
    },{
        method: 'PUT',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params
            const { title, description } = req.body        
            
            const data = database.update('tasks', id, { title, description })
            
            if(data === -1){
                return res.writeHead(404).end(JSON.stringify({ error: 'Task not found' }))
            }
            res.writeHead(200).end(JSON.stringify({'task' : data}))
        }
    },{
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params
            
            const data = database.delete('tasks', id)

            if (!data) {
                return res.writeHead(404).end(JSON.stringify({ error: 'Task not found' }))
            }
            
            res.writeHead(204).end()
        }
    },{
        method: 'PATCH',
        path: buildRoutePath('/tasks/:id/complete'),
        handler: (req, res) => {
            const { id } = req.params

            const data = database.update('tasks', id, { title: null, description:  null, completed_at: true })

            if (data === -1) {
                return res.writeHead(404).end(JSON.stringify({ error: 'Task not found' }))
            }

            res.writeHead(200).end(JSON.stringify({ 'task': data }))
        }
    }
]