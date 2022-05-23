const { expect } = require("chai");
const { makeSut, getAccountByIndex } = require('./util')

describe('Constructor ', () => {
  
  it('test', async () => {
    const { sut } = await makeSut('Constructor', [0])
    const singerAccount = await getAccountByIndex(0)
    expect(await sut.owner()).to.equal(singerAccount.address)
    expect(await sut.x()).to.equal(0)
  })
})