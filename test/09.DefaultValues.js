const { expect } = require("chai");
const { makeSut } = require('./util')

describe('DefaultValues', () => {
  
  it('test', async () => {
    const { sut } = await makeSut('DefaultValues')
    expect(await sut.b()).to.equal(false)
    expect(await sut.u()).to.equal(0)
    expect(await sut.i()).to.equal(0)
    expect(await sut.a()).to.equal('0x0000000000000000000000000000000000000000')
    expect(await sut.b32()).to.equal('0x0000000000000000000000000000000000000000000000000000000000000000')
  })
})