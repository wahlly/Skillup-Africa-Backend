const { expect } = require('chai')
const TodoService = require('../../tuesday/services/todoService')
const proxyquire = require('proxyquire')


const mockTodo = {
    id: 64,
    uniqueid: 'b47e733c-14e9-446b-8935-1f9aec08958f',
    description: 'just testing',
    isCompleted: false,
    updatedAt: '2021-05-24T15:51:09.403Z',
    createdAt: '2021-05-24T15:51:09.403Z'
}

const modelStub = {}

describe('TodoService', () => {
    beforeEach(() => {
        proxyquire('../../tuesday/services/todoService', {
            '../models/sequelize/index': modelStub
        })

        modelStub.db.create = async function(description){
            return mockTodo
        }
    })

    it('can create a todo', async () => {
        let result = await TodoService.createTodo('just testing')

        expect(result).to.deep.equal(mockTodo)
    })

})