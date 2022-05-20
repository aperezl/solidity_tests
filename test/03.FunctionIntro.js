const { expect } = require("chai");
const { makeSut } = require('./util')

describe('Function Intro', async  () => {
  
  it('should return 3 when params are 1 and 2', async () => {
    const { sut } = await makeSut('FunctionIntro')
    expect(await sut.add(1, 2)).to.equal(3)
  })

  it('should return 2 when params are 3 and 1', async () => {
    const { sut } = await makeSut('FunctionIntro')
    expect(await sut.sub(3, 1)).to.equal(2)
  })

})