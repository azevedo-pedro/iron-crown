const { createSandbox } = require('sinon')
const Service = require('./service')
const assert = require('assert')
const BASE_URL_1 = 'https://swapi.py4e.com/api/planets/1'
const BASE_URL_2 = 'https://swapi.py4e.com/api/planets/2'
const mocks = {
    alderan: require('./mocks/alderaan.json'),
    tatooine: require('./mocks/tatooine.json')
}
const sinon = createSandbox()
    ; (async () => {
        // {
        //     const service = new Service()
        //     const dados = await service.makeRequest(BASE_URL_2)
        //     console.log(JSON.stringify(dados))
        // }
        const service = new Service()
        const stub = sinon.stub(
            service,
            service.makeRequest.name
        )
        stub
            .withArgs(BASE_URL_1)
            .resolves(mocks.tatooine)
        stub
            .withArgs(BASE_URL_2)
            .resolves(mocks.alderan)
        {
            const expected = {
                name: "Tatooine",
                surfaceWater: "1",
                appearIn: 5
            }
            const results = await service.getPlanets(BASE_URL_1)
            assert.deepStrictEqual(results,expected)
        }
        {
            const expected = {
                name: "Alderaan",
                surfaceWater: "40",
                appearIn: 2
            }
            const results = await service.getPlanets(BASE_URL_2)
            assert.deepStrictEqual(results,expected)
        }
    })()