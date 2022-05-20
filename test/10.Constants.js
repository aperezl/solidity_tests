const { expect } = require("chai");
const { makeSut } = require('./util')

describe('Constants', () => {
  
  it('test', async () => {
    const { sut } = await makeSut('Constants')
    expect(await sut.MY_ADRRESS()).to.equal('0x1234567890123456789012345678901234567890')
    expect(await sut.MY_UINT()).to.equal(123)
  })
})