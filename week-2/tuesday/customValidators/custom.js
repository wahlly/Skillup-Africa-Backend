module.exports = class Common{
    
    static isEmpty(description) {
        return(
            description == null ||
            description == undefined ||
            (typeof description == 'string' && description.trim().length == 0) ||
            (typeof description == 'object' && Object.keys(description).length == 0)
        )
    }
}