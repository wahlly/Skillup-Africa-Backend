const uuid = require('uuid');
// const { db } = require('../models/mongoose/todosModel');
// const Todo = require('../models/mongoose/todosModel');
const db = require('../models/sequelize/index')
const TodoValidator = require('../customValidators/todoValidators')
const Common = require('../../tuesday/customValidators/custom')


module.exports = class TodoService{

    static async createTodo(description) {
        // let found = await TodoValidator.todoCreation(description)
        let found = await Common.isEmpty(description)

        if(found){
            return found
        }
        // let newTodo = new Todo({
        //     "uniqueId" : uuid.v4(),
        //     "description": description,
        //     "isCompleted": false
        // })

        // return newTodo.save();

        return db.create({
            "uniqueId" : uuid.v4(),
            "description": description,
            "isCompleted": false
        })
    }

    static async gellAllTodos(){

        // let result = Todo.find({}).sort({description: 1})
        // return result

        let result = db.findAll()
        return result
    }
    

    static async getTodoById(paramsId){

        let found = await TodoValidator.retrieveById(paramsId)

        if(found){
            return found
        }
        // return Todo.findById(paramsId)

        return db.findOne({ where: {uniqueId: paramsId} })

    }

    static async removeTodo(paramsId) {

        let found = await TodoValidator.retrieveById(paramsId)

        if(found){
            return found
        }
        // return Todo.findOneAndDelete({paramsId})

        return db.destroy({ where: {uniqueId: paramsId} })

    }

    static async updateTodo(description, paramsId) {

        
        let found = await TodoValidator.retrieveById(paramsId)

        if(found){
            return found
        }
        return db.update({ description: description}, {where: {uniqueId: paramsId}})

    }

}