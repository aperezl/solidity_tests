const { expect } = require("chai");
const { makeSut } = require('./util')

describe('ForAndWhileLoops ', () => {
  
  it('sum 5 should return 15', async () => {
    const { sut } = await makeSut('ForAndWhileLoops')
    const result = await sut.sum(5)
    expect(result).to.equal(15)
  })

})