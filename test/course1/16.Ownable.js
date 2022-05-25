const { expect } = require("chai");
const { makeSut, getAccountByIndex } = require('../util')

describe('Ownable ', () => {
  
  it('ensure contract onwer are the singner', async () => {
    const { sut } = await makeSut('Ownable')
    const singerAccount = await getAccountByIndex(0)
    expect(await sut.owner()).to.equal(singerAccount.address)
  })

  it('ensure onwer can not setOwner to own', async () => {
    const { sut } = await makeSut('Ownable')
    const singerAccount = await getAccountByIndex(0)
    await expect(sut.setOwner(singerAccount.address)).to.be.revertedWith('invalid address')
  })

  it('ensure onwer can setOwner to other', async () => {
    const { sut } = await makeSut('Ownable')
    const secondaryAccount = await getAccountByIndex(1)
    await sut.setOwner(secondaryAccount.address)
    expect(await sut.owner()).to.equal(secondaryAccount.address)
  })

  it('ensure not onwer can setOwner', async () => {
    const { sut } = await makeSut('Ownable')
    const secondaryAccount = await getAccountByIndex(1)
    const setOwner = sut.connect(secondaryAccount).setOwner(secondaryAccount.address)
    await expect(setOwner).to.be.revertedWith('not owner')
  })

  it('ensure onwer can call onlyOwnerCanCallThisFunc', async () => {
    const { sut } = await makeSut('Ownable')
    expect(await sut.onlyOwnerCanCallThisFunc()).to.equal(true)
  })

  it('ensure not onwer reject onlyOwnerCanCallThisFunc', async () => {
    const { sut } = await makeSut('Ownable')
    const secondaryAccount = await getAccountByIndex(1)
    const onlyOwnerCanCallThisFunc = sut.connect(secondaryAccount).onlyOwnerCanCallThisFunc()
    await expect(onlyOwnerCanCallThisFunc).to.be.revertedWith('not owner')
  })

   it('ensure onwer can call anyOneCanCallFunc', async () => {
    const { sut } = await makeSut('Ownable')
    expect(await sut.anyOneCanCallFunc()).to.equal(true)
  })

  it('ensure not onwer reject anyOneCanCallFunc', async () => {
    const { sut } = await makeSut('Ownable')
    const secondaryAccount = await getAccountByIndex(1)
    const anyOneCanCallFunc = sut.connect(secondaryAccount).anyOneCanCallFunc()
    expect(await anyOneCanCallFunc).to.equal(true)
  })
})