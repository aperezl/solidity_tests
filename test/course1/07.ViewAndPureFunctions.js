const { expect } = require("chai");
const { makeSut } = require('../util')


describe('ViewAndPureFunctions', () => {
  it('test 1', async () => {
    const { sut } = await makeSut('ViewAndPureFunctions')
    const num = await sut.num()
    const viewFunc = await sut.viewFunc()
    const pureFunc = await sut.pureFunc()
    expect(num).to.equal(0)
    expect(viewFunc).to.equal(0)
    expect(pureFunc).to.equal(1)
  })

  it('test 2', async () => {
    const { sut } = await makeSut('ViewAndPureFunctions')
    const result = await sut.addToNum(5)
    expect(result).to.equal(5)
  })

  it('test 3', async () => {
    const { sut } = await makeSut('ViewAndPureFunctions')
    const result = await sut.add(3, 4)
    expect(result).to.equal(7)
  })

})