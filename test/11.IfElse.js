const { expect } = require("chai");
const { makeSut } = require('./util')

describe('IfElse', () => {
  
  it('test example function', async () => {
    const { sut } = await makeSut('IfElse')
    expect(await sut.example(5)).to.equal(1)
    expect(await sut.example(15)).to.equal(2)
    expect(await sut.example(25)).to.equal(3)
  })

  it('test ternary function', async () => {
    const { sut } = await makeSut('IfElse')
    expect(await sut.ternary(5)).to.equal(1)
    expect(await sut.ternary(15)).to.equal(2)
  })
})