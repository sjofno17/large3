const { RESTDataSource } = require('apollo-datasource-rest');

class BasketballFieldService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://basketball-fields.herokuapp.com/api/basketball-fields";
    }
    async getById(id) {
        return this.get(`/${id}`);
    }
    async getAll() {
        return this.get('');
    }
}

module.exports = {
    BasketballFieldService
}