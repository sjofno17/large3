module.exports = {
    queries: {
        allBasketballFields: (_, {}, {dataSources: { BasketballFieldService}}) => {
            return BasketballFieldService.getAll();
        },
        basketballField: (_, {id}, { dataSources: { BasketballFieldService }}) => {
            return BasketballFieldService.getById(id);
        }
    }
}