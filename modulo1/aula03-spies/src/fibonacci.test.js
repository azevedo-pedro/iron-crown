// Fibonnaci: o proximo numero da sequencia ẽ sempre a soma dos anteriores
//  input 3
//  0,1,1

const { createSandbox } = require('sinon');
const Fibonacci = require('./fibonacci');
const assert = require('assert')
const sinon = createSandbox()
const fibonacci = new Fibonacci()
    ; (async () => {
        {
            const spy = sinon.spy(
                fibonacci,
                fibonacci.execute.name
            )
            const results = [...fibonacci.execute(5)]
            const expectedCAllCount = 6
            assert.strictEqual(expectedCAllCount, spy.callCount)

            const { args } = spy.getCall(2)
            const expectedParams = [3, 1, 2]
            assert.deepStrictEqual(args, expectedParams, 'Arrays não são iguais!')
            const expectedResults = [0, 1, 1, 2, 3]
            assert.deepStrictEqual(results, expectedResults, 'os arrays não são iguais')
        }
    })()