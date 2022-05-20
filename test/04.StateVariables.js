const { expect } = require("chai");
const { makeSut } = require('./util')

describe('StateVariables', () => {
  it('test', async () => {
    const { sut } = await makeSut('StateVariables')
    expect(await sut.myUint()).to.equal(123)
  })
})