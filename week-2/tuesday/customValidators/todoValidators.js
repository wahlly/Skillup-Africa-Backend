

module.exports = class TodoValidator{

    static async todoCreation(description){

        if(description.replace(/\s/g, '') == '') {
            return 'description cannot be empty'
        }

        let testCase = /^[0-9+$]/g
        if(testCase.test(description)) {
            return 'sorry, todos must be a String'
        }
        if(typeof description == Boolean) {
            return 'sorry, todos cannot be a Boolean'
        }

    }

    static async retrieveById(paramsId){

        let testCase = /[^\w+\-$]/g
        if(testCase.test(paramsId)){
            return 'please, input a valid id'
        }
    }

}