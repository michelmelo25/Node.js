import fs from 'node:fs/promises';
import { Task } from './model/task.js';
const databaseFilePath = new URL('../db.json', import.meta.url);

export class Database {
    #database = {};

    constructor(){
        fs.readFile(databaseFilePath, 'utf-8').then(data => {
            this.#database = JSON.parse(data)
        }).catch(()=> {
            this.#persist()
        })
    }

    #persist(){
        fs.writeFile(databaseFilePath, JSON.stringify(this.#database))
    }

    select(table, search){
        let data = this.#database[table] ?? []

        if(search){
            data = data.filter(row => {
                return Object.entries(search).some(([key, value]) => {
                    return row[key].toLowerCase().includes(value.toLowerCase())
                })
            })
        }

        return data
    }
    
    insert(table, data){
        if(Array.isArray(this.#database[table])){
            this.#database[table].push(data)
        } else{
            this.#database[table] = [data]
        }

        this.#persist()
        return data
    }

    update(table, id, { title, description, completed_at }){
        const rowIndex = this.#database[table]?.findIndex(row => row.id === id)

        if(rowIndex > -1){
            const task = Task.fromJson(this.#database[table][rowIndex])
            if(completed_at) {
                if(!task.completed_at){
                    task.complete()
                }else{
                    task.uncomplete()
                }
            } else {
                task.update({ title, description })
            }
            this.#database[table][rowIndex] = { id, ...task }
            this.#persist()
            return this.#database[table][rowIndex]
        }

        return -1
    }

    delete(table, id){
        const rowIndex = this.#database[table]?.findIndex(row => row.id === id)

        if(rowIndex > -1){
            this.#database[table].splice(rowIndex, 1)
            this.#persist()
            return true
        }
        return false
    }
}