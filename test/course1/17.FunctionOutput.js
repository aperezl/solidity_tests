const { expect } = require("chai");
const { makeSut } = require('../util')

describe('FunctionOutput ', () => {
  
  it('call returnMany should return 2 values unnamed', async () => {
    const { sut } = await makeSut('FunctionOutput')
    const [num, bool] = await sut.returnMany()
    expect(num).to.be.equal(1)
    expect(bool).to.be.equal(true)
  })

  it('call returnMany should return 2 values named', async () => {
    const { sut } = await makeSut('FunctionOutput')
    const [num, bool] = await sut.named()
    expect(num).to.be.equal(1)
    expect(bool).to.be.equal(true)
  })

  it('call returnMany should return 2 values assigned', async () => {
    const { sut } = await makeSut('FunctionOutput')
    const [num, bool] = await sut.assigned()
    expect(num).to.be.equal(1)
    expect(bool).to.be.equal(true)
  })

  it('call returnMany should return 1 values destructed', async () => {
    const { sut } = await makeSut('FunctionOutput')
    const bool = await sut.destructingAssigments()
    expect(bool).to.be.equal(true)
  })
})