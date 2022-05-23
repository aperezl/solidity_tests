const { expect } = require("chai");
const { makeSut, getAccountByIndex, getAccounts } = require('./util')

describe.only('Constructor ', () => {
  
  it('test', async () => {
    const { sut } = await makeSut('Constructor', [0])
    const singerAccount = await getAccountByIndex(0)
    expect(await sut.owner()).to.equal(singerAccount.address)
    expect(await sut.x()).to.equal(0)
  })
})