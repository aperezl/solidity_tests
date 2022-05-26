const { expect } = require("chai");
const { ethers } = require("hardhat");
const { makeSut, getAccounts } = require('../util')

describe('01.Bank', () => {
  it('ensure only owner can withdrawBalance', async () => {
    const { sut } = await makeSut('Bank')
    const [owner, addr1] = await getAccounts()
    const ether = ethers.utils.parseEther("10")
    const { gasPrice } = await sut.incrementBalance(ether, { value: ether })
    await expect(sut.connect(addr1).withdrawBalance()).to.revertedWith('not owner')
  })

   it('ensure owner can withdrawBalance', async () => {
    const { sut } = await makeSut('Bank')
    const [owner, addr1] = await getAccounts()
    const ether = ethers.utils.parseEther("10")
    const { gasPrice } = await sut.incrementBalance(ether, { value: ether })
    await expect(sut.withdrawBalance()).to.not.reverted
  })

  it('ensure only owner can call newOwner', async () => {
    const { sut } = await makeSut('Bank')
    const [owner, addr1] = await getAccounts()
    await expect(sut.connect(addr1).newOwner(addr1.address)).to.revertedWith('not owner')
    expect(await sut.getOwner()).to.equal(owner.address)
  })

  it('ensure owner can call newOwner', async () => {
    const { sut } = await makeSut('Bank')
    const [owner, addr1] = await getAccounts()
    await expect(sut.newOwner(addr1.address)).to.not.reverted
    expect(await sut.getOwner()).to.equal(addr1.address)

  })
})