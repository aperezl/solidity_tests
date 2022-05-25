const { expect } = require("chai");
const { ethers } = require("hardhat");
const { makeSut, getAccounts } = require('../util')


describe('01.Bank', () => {
  it('deploy contract', async () => {
    const { sut } = await makeSut('Bank')
    const [owner, addr1] = await getAccounts()
    const ether = ethers.utils.parseEther("10")
    const { gasPrice } = await sut.incrementBalance(ether, { value: ether })
    await sut.connect(addr1).withdrawBalance()

  })
})