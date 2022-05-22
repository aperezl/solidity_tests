const { expect } = require("chai");
const { makeSut } = require('./util')

describe.only('FunctionModifier ', () => {
  
  it('should inc counter when not paused', async () => {
    const { sut } = await makeSut('FunctionModifier', [5])
    await sut.inc()
    const result = await sut.getCount()
    expect(result).to.equal(6)
  })

  it('should dec counter when not paused', async () => {
    const { sut } = await makeSut('FunctionModifier', [5])
    await sut.dec()
    const result = await sut.getCount()
    expect(result).to.equal(4)
  })

  it('should an error when try inc in paused', async () => {
    const { sut } = await makeSut('FunctionModifier', [1])
    await sut.setPause(true)
    await expect(sut.inc()).to.revertedWith('counter is paused')
  })

  it('should an error when try dec in paused', async () => {
    const { sut } = await makeSut('FunctionModifier', [1])
    await sut.setPause(true)
    await expect(sut.dec()).to.revertedWith('counter is paused')
  })

  it('should inc by 50 when is not paused', async () => {
    const { sut } = await makeSut('FunctionModifier', [100])
    await sut.incBy(50)
    const result = await sut.getCount()
    expect(result).to.equal(150)
  })

  it('should return an error when is paused', async () => {
    const { sut } = await makeSut('FunctionModifier', [100])
    await sut.setPause(true)
    await expect(sut.incBy(50)).to.revertedWith('counter is paused')
  })

  it('should return an error when try inc by 110', async () => {
    const { sut } = await makeSut('FunctionModifier', [100])
    await expect(sut.incBy(110)).to.revertedWith('x >= 100')
  })
})